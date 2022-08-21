import React from 'react';
import Delivery from '../img/delivery.png'
import HeroBg from "../img/heroBg.png"
import { data } from '../utils/data';
import {BiRupee} from 'react-icons/bi'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id="home">
      <div className='py-2 flex-1 flex flex-col justify-start items-start  gap-6'>
        <div className='flex justify-center items-center gap-2 rounded-full bg-orange-100 px-4 py-1'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 shadow-xl rounded-full overflow-hidden bg-white' >
            <img src={Delivery} className="w-full h-full object-contain " alt='delivery'></img>
          </div>
        </div>
        <p className='text-[2.5em] font-bold text-headingColor tracking-wide lg:text-[3.5rem]'>
          The Fastest Delivery in
          <span className='text-orange-600 lg:text-[5rem]'> Your City</span>
        </p>
        <p className='text-base text-center text-textColor md:text-left'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        tessdf asdd ada asd eqweq
        </p>
        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg px-4 py-2 
        w-full hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'>Order Now</button>
      </div>
      <div className='py-2 flex-1 flex items-center relative '>
          <img src={HeroBg} alt="heroBg" className='ml-auto  h-400 w-auto lg:h-650'></img>
          <div className='w-full h-full absolute flex top-0 left-0 items-center justify-center flex-wrap gap-2 lg:px-10 py-4'>
          { data && data.map( n => (
                <div key={n.id} className='lg:w-190 p-2 bg-cardOverLay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col drop-shadow-lg'>
                  <img src={n.imgsrc} alt="i1" className='lg:w-40 lg:-mt-20 w-20 -mt-10'></img>
                  <p className='text-base lg:text-lg mt-4  font-semibold text-textColor'>{n.name}</p>
                  <p className='text-sm text-gray-500 font-semibold my-2'>{n.description}</p>
                  <div className='flex flex-row  items-center'>
                    <BiRupee className='text-red-600'></BiRupee>
                    <p className='text-sm font-semibold text-headingColor'>{n.price}</p>
                  </div>
                </div>
              )
              )}
          </div>
      </div>
    </section>
  )
}

export default HomeContainer