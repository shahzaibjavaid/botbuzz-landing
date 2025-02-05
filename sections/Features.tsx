import React from 'react'
import { FaCheck } from 'react-icons/fa'
const Features = () => {
  return (
    <div className='container mx-auto py-10'>
      <div className='grid grid-cols-2 gap-0 items-center'>
        <div className='text-white '>
          <span className='text-md text-[#A7A0F8]'>AI Features</span>
          <h3 className='py-4 text-4xl font-semibold'>
            Discover Personalities
          </h3>
          <p className='text-[#8692a6] text-md leading-[20px] capitalize pr-[180px]'>
            Switch between various personalities to match your mood and make
            conversations more engaging.
          </p>
          <ul className='mt-10'>
            <li className='flex items-center space-x-5 py-1'>
              <span className='p-1 rounded-full text-xs flex items-center justify-center text-[#fafafa] bg-[#a7a0f8]'>
                <FaCheck />
              </span>
              <span className='text-md text-[#f5f5f5] mt-1'>
                12 different personalities
              </span>
            </li>
            <li className='flex items-center space-x-5 py-1'>
              <span className='p-1 rounded-full text-xs flex items-center justify-center text-[#fafafa] bg-[#a7a0f8]'>
                <FaCheck />
              </span>
              <span className='text-md text-[#f5f5f5] mt-1'>
                Personalized experience
              </span>
            </li>
            <li className='flex items-center space-x-5 py-1'>
              <span className='p-1 rounded-full text-xs flex items-center justify-center text-[#fafafa] bg-[#a7a0f8]'>
                <FaCheck />
              </span>
              <span className='text-md text-[#f5f5f5] mt-1'>
                Empathetic interactions
              </span>
            </li>
          </ul>
        </div>
        <div className='bg-gradient-to-b from-[#ffffff05] to-[#ffffff00] rounded-3xl'>
          <img src='/images/feature_1.png' />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-0 items-center mt-20'>
        <div className='text-white '>
          <span className='text-md text-[#A7A0F8]'>AI Features</span>
          <h3 className='py-4 text-4xl font-semibold'>
            Seamless Follow-up Questions
          </h3>
          <p className='text-[#8692a6] text-md leading-[20px] capitalize pr-[180px]'>
            Keeps the conversation flowing naturally by asking relevant
            follow-up questions.
          </p>
          <ul className='mt-10'>
            <li className='flex items-center space-x-5 py-1'>
              <span className='p-1 rounded-full text-xs flex items-center justify-center text-[#fafafa] bg-[#a7a0f8]'>
                <FaCheck />
              </span>
              <span className='text-md text-[#f5f5f5] mt-1'>
                Enhanced Engagement
              </span>
            </li>
            <li className='flex items-center space-x-5 py-1'>
              <span className='p-1 rounded-full text-xs flex items-center justify-center text-[#fafafa] bg-[#a7a0f8]'>
                <FaCheck />
              </span>
              <span className='text-md text-[#f5f5f5] mt-1'>
                Deeper Understanding
              </span>
            </li>
            <li className='flex items-center space-x-5 py-1'>
              <span className='p-1 rounded-full text-xs flex items-center justify-center text-[#fafafa] bg-[#a7a0f8]'>
                <FaCheck />
              </span>
              <span className='text-md text-[#f5f5f5] mt-1'>
                Smooth Interactions
              </span>
            </li>
          </ul>
        </div>
        <div className='bg-gradient-to-b from-[#ffffff05] to-[#ffffff00] rounded-3xl'>
          <img src='/images/feature_2.png' />
        </div>
      </div>
    </div>
  )
}

export default Features
