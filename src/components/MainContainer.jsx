import React, { useEffect, useState } from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion'
import {MdChevronLeft, MdChevronRight}  from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/stateProvider'
import MenuContainer from './MenuContainer'
import CartContainer from './CartContainer'

const MainContainer = () => {
  const [{foodItems,cartShow,dispatch}] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect (()=> {},[scrollValue,cartShow])
  return (
    <div className='flex flex-col w-full  h-auto items-center justify-center'>
      <HomeContainer/>
      <section className='w-full'>
        <div className='w-full  flex items-start justify-between'>
          <p className='text-lg font-semibold capitalize text-headingColor relative 
            before:absolute before:rounded-lg before:content before:w-32 before:h-1 
            before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-500
            transition-all ease-in-out duration-100 my-4'>
            Our fresh & healthy fruits
          </p>
          <div className='hidden items-center  md:flex gap-2'>
            <motion.div whileTap={{scale:0.85}} onClick={() => {setScrollValue(-400)}} className='w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 hover:shadow-lg
             cursor-pointer flex items-center justify-center'><MdChevronLeft className='text-lg text-white'/></motion.div>
            <motion.div whileTap={{scale:0.85}}  onClick={() => {setScrollValue(400)}} className='w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 hover:shadow-lg
             cursor-pointer flex items-center justify-center'><MdChevronRight className='text-lg text-white'/></motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue} flag={true} data={foodItems?.filter(n => n.category === 'fruits')}/>
      </section>
      <MenuContainer/>
      {cartShow && <CartContainer/>}
    </div>
  )
}

export default MainContainer