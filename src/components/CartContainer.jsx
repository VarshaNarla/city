import React from 'react'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {motion} from 'framer-motion'
import { useStateValue } from '../context/stateProvider'
import { actionType } from '../context/reducer'
import EmptyCart from '../img/emptyCart.svg'
import { useState,useEffect } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import  { app } from '../firebase.config'
import CartItem from './CartItem'
 
const CartContainer = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{user,cartShow,cartItems},dispatch] = useStateValue();
    const [flag, setFlag] = useState(1);
    const [total, setTotal] = useState(0);
    const onShowCart = () =>{
        dispatch({
          type :actionType.Set_CART_SHOW,
          cartShow : !cartShow,
        });
    
      }
    useEffect(() => {
      let Total = cartItems.reduce(function(accumilator,item) {
        return accumilator + (item.qty * item.price);
      },0)
      setTotal(Total);
    },[total,flag])

    const clearCart = () => {
        dispatch({
            type :actionType.Set_CART_ITEMS,
            cartItems : [],
          });
          localStorage.setItem("cartItems",JSON.stringify([]))
    }
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
        }
      };
      useEffect(() => {}, [cartItems])
      
  return (
    <motion.div  initial= {{opacity:0,x:200}}
    animate= {{opacity:1,x:0}} exit= {{opacity:0,x:200}} className='z-[101] fixed top-0 right-0 w-full md:w-350 bg-white flex flex-col h-screen drop-shadow-md rounded-md '>
        <div className='w-full flex items-center justify-between p-4'>
            <motion.div whileTap={{scale : 0.75}} onClick={onShowCart} className="cursor-pointer">
                <MdOutlineKeyboardBackspace className='text-textColor text-3xl'/>
            </motion.div>
            <p className='text-orange-500 font-semibold text-lg'>Your Bag</p>
            <motion.p whileTap={{scale : 0.90}} onClick={clearCart} className='text-textColor text-base font-semibold cursor-pointer'>Clear</motion.p>
        </div>
        {/* This is bottom section */}
        { (cartItems && cartItems?.length >0 ) ?
            <div className='w-full h-full bg-cartBg rounded-t-[1rem] flex flex-col justify-around '>
                {/* cart items section */}
                <div className='w-full gap-2 h-300 px-4 py-4 flex flex-col overflow-scroll scrollbar-none'>
                {/* cart item */}
                {
                    cartItems && cartItems?.length > 0 && cartItems.map(item => (
                        <CartItem key={item.id} item={item} flag={flag} setFlag={setFlag}/>
                    ))
                }
                </div>
                {/* total section item */}
                <div className='w-full flex flex-col bg-cartTotal rounded-[2rem] items-center gap-2 justify-evenly px-8 py-2 '>
                    <div className='w-full m-2 flex justify-between items-center'>
                        <p className='text-gray-400 text-lg'>Sub Total</p>
                        <p className='text-gray-400 text-lg'>${total}</p>
                    </div>
                    <div className='w-full m-2  flex justify-between items-center'>
                        <p className='text-gray-400 text-lg'>Delivery cost</p>
                        <p className='text-gray-400 text-lg'>$2.8</p>
                    </div>
                    <div className='w-full m-2  bg-gray-400 border'></div>
                    <div className='w-full flex justify-between items-center'>
                        <p className='text-gray-300 text-lg font-semibold'>Total</p>
                        <p className='text-gray-300 text-lg'>${total + 2.8}</p>
                    </div>
                    {user ? (
                        <motion.button whileTap={{scale:0.95}} className='w-full p-2 bg-orange-500 rounded-3xl text-gray-100 '>Check out</motion.button>
                    ) : (
                        <motion.button whileTap={{scale:0.95}} onClick={login} className='w-full p-2 bg-orange-500 rounded-3xl text-gray-100 '>Login</motion.button>
                    )}
                </div>
                
            </div>
            : <div className='w-full h-full items-center justify-center flex flex-col gap-3'>
                <img src={EmptyCart} className='w-300'></img>
                <p className='text-orange-500 text-lg font-semibold m-5 text-center'> Add something delicious to your bag !!!!!</p>
            </div>
        }              
    </motion.div>
  )
}

export default CartContainer