import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <section className="min-h-screen h-[100vh] bg-white main overflow-y-auto  z-0 top-0  pt-[150px] pb-[100px] right-0   min-h-[calc(100vh-256px)]" >
    <div className='l-[256px] w-[800px] flex  items-center justify-center mx-auto'>
       
        <img className='w-[300px] mx-35px pb-[50px]' src="./assets/error404.png" alt="" />
        <div className='w-[8px] bg-black h-[150px] mx-4 ' ></div>
        <h1 className='text-slate-500 font-bold text-2xl'>The page you are trying to request doesn't exist.</h1>
    </div>

    <Link to='/'><h1 className='text-center text-2xl underline text-blue-600'>Go Back!</h1></Link>
    </section>
  )
}

export default Error404