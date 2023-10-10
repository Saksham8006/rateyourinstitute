import React from 'react'
import SuccessImage from "../assets/successimg.png"

const SuccessStep = () => {
  return (
    <div>
      <h3 className='text-center mb-6 text-green-400 font-semibold text-xl'>Your review has successfully registered!</h3>

      <img className=' mx-auto w-[300px]' src={SuccessImage} />
    </div>
  )
}

export default SuccessStep