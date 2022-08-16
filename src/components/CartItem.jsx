import React from 'react'
import {motion} from 'framer-motion'
import {BiMinus, BiPlus} from 'react-icons/bi'
import { useState,useEffect } from 'react'
import { useStateValue } from '../context/stateProvider'
import {actionType} from '../context/reducer'
let items = [];

const CartItem = ({item,flag,setFlag}) => {
    const [qty, setQty] = useState(item.qty);
    const [{cartItems}, dispatch] = useStateValue();

    const cartDispatch=() => {
        localStorage.setItem("cartItems",JSON.stringify(items))
        dispatch({
            type :actionType.Set_CART_ITEMS,
            cartItems:items
        })
    }
    
    const updateQty = (action,id) => {
        if(action === "add") {
            setQty(qty + 1)
            cartItems.map((item) => {
                if(item.id === id){
                    item.qty += 1;
                }
            });
            setFlag(flag + 1)
            cartDispatch();
        }else{
            if(qty === 1) {
                items = cartItems.filter(item => item.id !== id)
                cartDispatch();
                setFlag(flag + 1)
            }
            else{
                setQty(qty - 1)
                cartItems.map((item)=> {
                    if(item.id === id){
                        item.qty -= 1;
                    }
                });
                setFlag(flag + 1)
                cartDispatch();
            }
        }

    };

    useEffect(() => {
      items = cartItems
    }, [qty,items])
    
  return (
    <div key= {item?.id}className='w-full gap-1 px-1 bg-cartItem rounded-lg flex items-center'>
        <img src={item?.imgUrl}
        className='w-20 h-20 rounded-full object-contain min-w-[60px]'>
        </img>
        <div className='flex flex-col'>
            <p className='text-base text-gray-50 font-semibold '>{item?.title}</p>
            <p className='text-sm text-gray-300 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>{parseFloat(item?.price) * qty}</p>
        </div>
        {/* button section */}
        <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
        <motion.div whileTap={{scale:0.8}} onClick={()=> updateQty("remove",item?.id)}>
            <BiMinus  className='text-gray-50'/>
        </motion.div>
        <p className='text-gray-50 w-5 h-5 flex justify-center items-center'>
            {qty}
        </p>
        <motion.div whileTap={{scale:0.8}} onClick={()=> updateQty("add",item?.id)}>
            <BiPlus className='text-gray-50'/>
        </motion.div>
        </div>
    </div>
  )
}

export default CartItem