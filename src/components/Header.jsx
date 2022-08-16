import React , {useState} from 'react'
import logo from "../img/logo.png"
import {MdShoppingBasket , MdAdd , MdLogout} from "react-icons/md"
import Avatar from "../img/avatar.png"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import  { app } from '../firebase.config'
import { useStateValue } from '../context/stateProvider'
import { actionType } from '../context/reducer'


 
export const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{user,cartShow,cartItems} , dispatch] = useStateValue(); 
  const [isMenu, setIsMenu]  = useState(false)
   
  const login = async () =>{
    if(!user) {
      const { 
        user: {refreshToken,providerData},
      } = await signInWithPopup(firebaseAuth,provider);
  
      dispatch({
        type :actionType.Set_USER,
        user : providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]) )
    }else{
      setIsMenu(!isMenu)
    }
  };

  const logout = async () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.Set_USER,
      user: null
    })
  };

  const onShowCart = () =>{
    dispatch({
      type :actionType.Set_CART_SHOW,
      cartShow : !cartShow,
    });

  }

  return (
    <header className='w-screen fixed z-50 p-6   bg-primary'>
     {/* Dekpot and tablet */}
     <div className='hidden md:flex w-full h-full items-center justify-between'>
      <div className='flex '> 
        <Link to={"/"} className='flex items-center gap-2'>
          <img alt='logo' src={logo} className= "w-8 object-cover"></img>
	        <p className='text-headingColor text-xl font-bold '>City</p>
        </Link>
      </div>
      <div className='flex items-center  gap-6'> 
        <motion.ul 
        // initial={{opacity:0, x: 200, }} 
        // animate={{opacity:1, x: 0, }} 
        // exit={{opacity:0, x: 200, }}  
        className='flex items-center  gap-6'>
        <Link to={"/"}>
        <li className="text-base  text-textColor hover:text-headingColor  
          duration-100 transition-all ease-in-out  cursor-pointer" onClick={() => setIsMenu(false)} >Home</li>
        </Link>
        <Link to={"/menu"}>
        <li className="text-base text-textColor hover:text-headingColor  
          duration-100 transition-all ease-in-out cursor-pointer" onClick={() => setIsMenu(false)}>Menu</li>
        </Link>
        </motion.ul>
        <div className='relative flex items-center justify-center'>
          <MdShoppingBasket onClick={onShowCart} className='text-textColor text-xl cursor-pointer'/>
          {(cartItems && cartItems?.length > 0) &&
            <div className='absolute -top-3 -right-1 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>{cartItems?.length }</p>
            </div>
          }
        </div>
        <div className='relative'>
          <motion.img whileTap={{scale:0.9}} src={user ? user.photoURL : Avatar } alt="userProfile" onClick={login} className='w-10 h-10 drop-shadow-xl rounded-full cursor-pointer'  ></motion.img>
          {
            isMenu && (
              <motion.div 
                 initial={{opacity:0, scale:0.6}} 
                 animate={{opacity:1, scale:1  }} 
                 exit={{opacity:0, scale: 0.6 }} 
                className='w-40 bg-gray-50 shadow-xl rounded-lg flex-col absolute px-4 py-2 right-0 top-10' >
                { (user && user.email === 'narlavarsha0@gmail.com') && 
                  <Link to="createItem">
                  <p className='py-1 flex items-center justify-between gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out
                  text-textColor text-base cursor-pointer ' onClick={() => setIsMenu(false)}>New Item <MdAdd/></p>
                  </Link>
                }
                <p className=' py-1 flex items-center justify-between  gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out
                 text-textColor text-base cursor-pointer' onClick={logout} >Logout <MdLogout/></p>
              </motion.div>
            )
          }
        </div>
      </div>
     </div>
     {/* Mobile*/}
     <div className='flex md:hidden w-full h-full items-center justify-between'>
      <div className='flex '> 
        <Link to={"/"} className='flex items-center gap-2'>
          <img alt='logo' src={logo} className= "w-8 object-cover"></img>
        </Link>
        <div className='flex items-center'>
          <p className='text-headingColor text-xl font-bold '>City</p>
        </div>
      </div>
      <div className='flex gap-6'>
        <div className='relative flex items-center justify-center'>
          <MdShoppingBasket onClick={onShowCart} className='text-textColor text-2xl cursor-pointer'/>
          {(cartItems && cartItems?.length > 0) &&
            <div className='absolute -top-3 -right-1 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>{cartItems?.length }</p>
            </div>
          }
        </div>
        <div className='relative'>
            <motion.img whileTap={{scale:0.9}} src={user ? user.photoURL : Avatar } alt="userProfile" onClick={login} className='w-10 h-10 drop-shadow-xl rounded-full cursor-pointer'  ></motion.img>
            {
              isMenu && (
                <motion.div 
                  initial={{opacity:0, scale:0.6}} 
                  animate={{opacity:1, scale:1  }} 
                  exit={{opacity:0, scale: 0.6 }} 
                  className='w-40 bg-gray-50 shadow-xl rounded-lg flex-col absolute px-4 py-2 right-0 top-10' >
                  { (user && user.email === 'narlavarsha0@gmail.com') && 
                    <Link to="createItem">
                    <p className='py-1 flex items-center justify-between hover:bg-slate-200 transition-all duration-100 ease-in-out
                    text-textColor text-base cursor-pointer'>New Item <MdAdd/></p>
                    </Link>
                  }
                  <ul className='items-center flex-col  gap-6'>
                  <Link to={"/"}>
                    <li className="text-base  text-textColor hover:bg-slate-200 
                      duration-100 transition-all ease-in-out py-1  cursor-pointer"  >Home</li>
                  </Link>
                  <Link to={"/menu"}>
                    <li className="text-base text-textColor hover:bg-slate-200
                      duration-100 transition-all ease-in-out py-1 cursor-pointer" >Menu</li>
                  </Link>
                  </ul>
                  <p className=' py-1 flex items-center justify-center rounded-md shadow-md
                  gap-3 bg-gray-200 hover:bg-gray-300 transition-all duration-100 ease-in-out
                  text-textColor text-base cursor-pointer' onClick={logout} >Logout <MdLogout/></p>
                </motion.div>
              )
            }
        </div>
      </div>
     </div>

    </header>
  )
}

export default Header