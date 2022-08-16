import React from 'react'
import {MdIcecream} from 'react-icons/md'
import {FaFish,FaWineGlass} from 'react-icons/fa'
import {GiChickenOven,GiFruitBowl,GiBowlOfRice,GiBubblingBowl} from 'react-icons/gi'
import { useState,useEffect } from 'react'
import {motion} from "framer-motion"
import {categories} from '../utils/data'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/stateProvider'

const MenuContainer = () => {
  const [filter, setFilter] = useState('chicken');
  const [{foodItems,dispatch}] = useStateValue();
  console.log(foodItems)
  return (
    <section className='w-full' id='menu'>
        <div className='w-full flex-col items-center justify-center'>
            <p className='text-lg font-semibold capitalize text-headingColor relative 
            before:absolute before:rounded-lg before:content before:w-16 before:h-1 
            before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-500
            transition-all ease-in-out duration-100 my-4'>
            Our Hot Dishes
          </p>
          <div className='w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll 
            scrollbar-none py-1'>
            { categories && categories.map((categories) => (
                <motion.div key={categories.id} whileTap={{scale:0.9}} className={`group bg-white w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl
                flex flex-col gap-3 items-center justify-center hover:bg-red-600 
                ${filter === categories.urlParamName ? 'bg-red-600' : 'bg-white' }`}
                onClick={() => {setFilter(categories.urlParamName)}}
                >
                   <div className={`w-8 h-8  rounded-full group-hover:bg-white flex items-center justify-center
                    ${filter === categories.urlParamName ? 'bg-white' : 'bg-red-600' } `}>
                       {categories?.urlParamName ==='fish' && <FaFish className={`${filter === categories.urlParamName ? 'text-textColor' : 'text-white' } group-hover:text-textColor`}/>}
                       {categories?.urlParamName ==='chicken' && <GiChickenOven className={`${filter === categories.urlParamName ? 'text-textColor' : 'text-white' } group-hover:text-textColor`}/>}
                       {categories?.urlParamName ==='rice' && <GiBowlOfRice className={`${filter === categories.urlParamName ? 'text-textColor' : 'text-white' } group-hover:text-textColor`}/>}
                       {categories?.urlParamName ==='curry' && <GiBubblingBowl className={`${filter === categories.urlParamName ? 'text-textColor' : 'text-white' } group-hover:text-textColor`}/>}
                       {categories?.urlParamName ==='fruits' && <GiFruitBowl className={`${filter === categories.urlParamName ? 'text-textColor' : 'text-white' } group-hover:text-textColor`}/>}
                       {categories?.urlParamName ==='icecreams' && <MdIcecream className={`${filter === categories.urlParamName ? 'text-textColor' : 'text-white' } group-hover:text-textColor`}/>}
                       {categories?.urlParamName ==='drinks' && <FaWineGlass className={`${filter === categories.urlParamName ? 'text-textColor' : 'text-white' } group-hover:text-textColor`}/>}
                   </div>
                   <p className={`text-sm ${filter === categories.urlParamName ? 'text-white' : 'text-textColor' } group-hover:text-white`}>
                      {categories.name}
                   </p>
               </motion.div>
            ))
            }
          </div>
          <div className='w-full'>
            <RowContainer flag={false} data={foodItems?.filter(n => n.category === filter)}/>
          </div>
        </div>    
    </section>
  )
}

export default MenuContainer