import React from 'react'
import Institutes_bg from '../../assets/institutes_bg.png'
import data from '../Home/Mock_Data.json'

const Institutes = () => {
 


  return (
    <div className='min-h-screen overflow-hidden'>
      Institutes
      <div
        className="bg-cover bg-center  w-full  mt-[45px] bg-opacity-20"
        style={{ backgroundImage: `url(${Institutes_bg})` }}
      >

        <div className='px-[50px] py-[50px] '>
          <div className='pb-[60px]'>
          <h1 className='text-white uppercase py-[10px] text-3xl font-bold'>
            institutes
          </h1>
          <p className='text-white text-opacity-60 lg:w-full sm:w-1/2 '>Currently we have some institutes which we added below if your institute name is differ from these intitutes you can mention your institute name, we will update here. Here you can review your institute we will your identity anonymous.</p>

          <div className='flex  pt-[15px]'>
          <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-opacity-80 text-sm font-medium text-white  bg-transparent rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ">JEE Mains</button>
          <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-opacity-80 text-sm font-medium text-white  bg-transparent  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ">JEE Advanced</button>
          <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-opacity-80 text-white  bg-transparent  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ">NEET</button>
          <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white text-opacity-80 bg-transparent  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ">Others</button>
          </div>
          </div>
{
  data.map((item) => (
    <ul className='text-white '>
      <li className='my-2 uppercase'>{item.name}</li>
    </ul>
  ))
}


        </div>
      </div>

    </div>
  )
}

export default Institutes