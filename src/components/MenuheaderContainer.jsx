import React from 'react'

const MenuheaderContainer = () => {
  return (
    <div className='w-full md:h-screen h-auto'>
      <div className=' w-full h-full bg-orange-100 rounded-3xl gap-9 flex flex-col md:flex-row justify-around'>
          <div className='md:w-[50%] w-full h-full flex flex-col gap-2'>
            <div className='m-10 font-semibold text-lg text-orange-600'>Frequently Picked</div>
            <div className='ml-10 w-[80%] gap-1 px-1 bg-orange-300 rounded-lg flex items-center'>
              <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660160465899-c2.png?alt=media&token=08202d7d-73d3-40e8-9724-02fb1e20704e' alt="img" className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
              <div className='flex flex-col'>
                <p className='text-base text-gray-50 font-semibold '>Chicken 65</p>
                <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>28</p>
              </div>
            </div>
            <div className='ml-10 w-[80%] gap-1 px-1 bg-orange-300 rounded-lg flex items-center'>
              <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660160752305-cu1.png?alt=media&token=852d2029-81e2-4301-8428-742683bf635b' alt="img"  className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
              <div className='flex flex-col'>
                <p className='text-base text-gray-50 font-semibold '>Paneer Butter Masala</p>
                <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>32</p>
              </div>
            </div>
            <div className='ml-10 w-[80%] gap-1 px-1 bg-orange-300 rounded-lg flex items-center'>
              <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660161578215-r3.png?alt=media&token=15a5de24-8e4e-45eb-a4f0-d5241bba24bc' alt="img"  className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
              <div className='flex flex-col'>
                <p className='text-base text-gray-50 font-semibold '>Chicken Biryani</p>
                <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>38</p>
              </div>
            </div>
            <div className='ml-10 w-[80%] gap-1 px-1 bg-orange-300 rounded-lg flex items-center'>
              <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660161761231-r4.png?alt=media&token=3a0c1fb0-6776-4104-95c0-b1952181180f' alt="img"  className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
              <div className='flex flex-col'>
                <p className='text-base text-gray-50 font-semibold '>Egg Rice</p>
                <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>25</p>
              </div>
            </div>
            <div className='ml-10 w-[80%] gap-1 px-1 bg-orange-300 rounded-lg flex items-center'>
              <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660161898003-fi4.png?alt=media&token=15362829-aa57-4500-9f9f-0f5f5437a5ac' alt="img"  className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
              <div className='flex flex-col'>
                <p className='text-base text-gray-50 font-semibold '>Fish Spl</p>
                <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>31</p>
              </div>
            </div>
          </div>
          <div className='md:w-[50%] w-full h-full flex flex-col gap-2 pb-4'>
            <div className='m-10 font-semibold text-lg text-orange-600'>Best combos</div>
            <div className='ml-10 w-[80%] gap-1 px-1 bg-orange-300 rounded-lg flex flex-row items-center justify-between'>
              <div className='w-[45%] flex items-center '>
                <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660160465899-c2.png?alt=media&token=08202d7d-73d3-40e8-9724-02fb1e20704e' alt="img"  className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
                <div className='flex flex-col'>
                  <p className='text-base text-gray-50 font-semibold '>Chicken 65</p>
                  <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>28</p>
                </div>
              </div>
              <div className='text-base text-gray-50 font-semibold '>+</div>
              <div className='w-[45%] flex items-center '>
                <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660161728755-r2.png?alt=media&token=301cd63f-bb54-495d-b201-6794f096502d' alt="img"  className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
                <div className='flex flex-col'>
                  <p className='text-base text-gray-50 font-semibold '>Chicken Spl Biryani</p>
                  <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>38</p>
                </div>
              </div>
            </div>
            <div className='ml-10 w-[80%] gap-1 px-1 bg-orange-300 rounded-lg flex flex-row items-center justify-between'>
              <div className='w-[45%] flex items-center '>
                <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660131910208-r2.png?alt=media&token=2cc4a96e-f7b9-4b11-87dd-01651e14ab89' alt="img"  className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
                <div className='flex flex-col'>
                  <p className='text-base text-gray-50 font-semibold '>Chicken Biriyani</p>
                  <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>23</p>
                </div>
              </div>
              <div className='text-base text-gray-50 font-semibold '>+</div>
              <div className='w-[45%] flex items-center '>
                <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660161049582-d5.png?alt=media&token=146f92ab-a0c6-4256-9130-fd27459c7b0e' alt="img"  className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
                <div className='flex flex-col'>
                  <p className='text-base text-gray-50 font-semibold '>Sprite</p>
                  <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>11</p>
                </div>
              </div>
            </div>
            <div className='ml-10 w-[80%] gap-1 px-1 bg-orange-300 rounded-lg flex flex-row items-center justify-between'>
              <div className='w-[45%] flex items-center '>
                <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660161668398-r1.png?alt=media&token=b56dbbdc-a2b1-47c8-936e-3a7657e23ad0' alt="img"  className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
                <div className='flex flex-col'>
                  <p className='text-base text-gray-50 font-semibold '>Mixed veg Rice</p>
                  <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>36</p>
                </div>
              </div>
              <div className='text-base text-gray-50 font-semibold '>+</div>
              <div className='w-[45%] flex items-center '>
                <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660160752305-cu1.png?alt=media&token=852d2029-81e2-4301-8428-742683bf635b' alt="img"  className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
                <div className='flex flex-col'>
                  <p className='text-base text-gray-50 font-semibold '>Paneer Butter Masala</p>
                  <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>32</p>
                </div>
              </div>
            </div>
            <div className='ml-10 w-[80%] gap-1 px-1 bg-orange-300 rounded-lg flex flex-row items-center justify-between'>
              <div className='w-[45%] flex items-center '>
                <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660161761231-r4.png?alt=media&token=3a0c1fb0-6776-4104-95c0-b1952181180f' alt="img"  className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
                <div className='flex flex-col'>
                  <p className='text-base text-gray-50 font-semibold '>Egg Rice</p>
                  <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>25</p>
                </div>
              </div>
              <div className='text-base text-gray-50 font-semibold '>+</div>
              <div className='w-[45%] flex items-center '>
                <img src='https://firebasestorage.googleapis.com/v0/b/city-dd854.appspot.com/o/Images%2F1660161819024-fi3.png?alt=media&token=cac97655-0003-4729-bd2e-40c50195432a' alt="img"  className='w-20 h-20 rounded-full object-contain min-w-[60px]'></img>
                <div className='flex flex-col'>
                  <p className='text-base text-gray-50 font-semibold '>Fish fry</p>
                  <p className='text-sm text-gray-50 font-semibold'><span className='text-sm text-red-600 font-semibold'>$ </span>29</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MenuheaderContainer