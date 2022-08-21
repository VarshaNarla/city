import React, { useEffect, useRef,useState } from 'react'
import {MdShoppingBasket} from "react-icons/md"
import {motion} from "framer-motion"
import NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/stateProvider'
import { cartItems } from '../context/initialState'
import { actionType } from '../context/reducer'
import {BiRupee} from 'react-icons/bi'
 
const RowContainer = ({flag,data, scrollValue}) => {
    const rowContainer = useRef()
    const [{cartItems}, dispatch] = useStateValue()
    const [items, setItems] = useState([]);
    const addToCart =  () => {
        dispatch({
            type:actionType.Set_CART_ITEMS,
            cartItems: items,
        });
        localStorage.setItem("cartItems", JSON.stringify(items))
    }
    useEffect(()=>{
        rowContainer.current.scrollLeft += scrollValue
    },[scrollValue])

    useEffect(()=> {
        addToCart()
    },[items])
  return (
    <div ref={rowContainer} className={`w-full flex gap-2 items-center scroll-smooth  my-4  ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap md:justify-center'}`}>
        { (data && data.length > 0) ? 
            data.map(item => (
            <div key={item?.id} className='min-w-[310px] h-[170px] w-310  bg-cardOverLay shadow-md backdrop-blur-lg rounded-lg my-10 hover:drop-shadow-md'>
                <div className='w-full flex items-center justify-center'>
                    <motion.img whileHover={{scale:1.1}} className='w-40 h-40 -mt-16' src={item?.imgUrl} ></motion.img>
                    <div className='w-full h-40 flex flex-col items-end justify-between mr-2 gap-0.5'>
                        <motion.div whileTap={{scale:0.8}}  onClick={() => setItems([...cartItems,item])} className='w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center mt-2'>
                            <MdShoppingBasket className='text-white cursor-pointer hover:shadow-md'/>
                        </motion.div>
                        <div className='flex flex-col'>
                            <p className='font-semibold text-textColor md:text-base text-sm text-right'>{item?.title}</p>
                            <p className='font-semibold text-gray-500 md:text-xs text-xs text-right'>{item?.calories} Calories</p>
                            <div className='flex flex-row  items-center justify-end'>
                                <BiRupee className='text-red-600'></BiRupee>
                                <p className='font-semibold text-gray-500  md:text-xs text-xs text-right'>{item?.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )): (<div className=' w-full flex flex-col m-2 gap-3 items-center justify-center '>
            <img src={NotFound} className='h-300'/>
            <p className='text-textColor font-semibold text-base'>Items Not Found</p>
        </div>)}
    </div>
  )
}

export default RowContainer