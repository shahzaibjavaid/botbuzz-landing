import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Pricing = () => {
  return (
    <div className='container mx-auto py-10 text-center'>
      <span className='px-[20px] py-[8px] rounded-xl text-[#181818] bg-gradient-to-r from-[#A7A0F8] to-[#A7A0F8]'>
        Plan & Pricing
      </span>
      <h2 className='font-bold text-[52px] mt-5 text-[#fafafa]'>
        Choose the Plan that’s Right For You
      </h2>
      <p className='text-[#8692a6] text-[18px] py-2'>
        Provide Descriptions, Get Instant AI Generated Content
      </p>
      <div className='py-8 grid grid-cols-3 gap-8 text-white px-10 text-left'>
        <div className='relative border border-gray-light rounded-xl bg-[#ffffff10] p-4 '>
          <img src='/images/pricing_1.png' />
          <div className='py-4'>
            <h3 className='text-2xl font-bold text-white'>Free</h3>
            <p className='text-[#8492a6] text-sm mt-2'>USD $0/month</p>
            <ul className='py-5 mb-10 pr-12'>
              <li className='flex '>
                <span className='py-3 pl-1 pr-3 text-[#fafafa]'>
                  <FaCheck />
                </span>
                <span className='p-2 text-md text-[#f5f5f5]'>
                  Limited access to Multiple Personalities (3 personalities)
                </span>
              </li>
              <li className='flex '>
                <span className='py-3 pl-1 pr-3 text-[#fafafa]'>
                  <FaCheck />
                </span>
                <span className='p-2 text-md text-[#f5f5f5]'>
                  Basic Dynamic Suggestions
                </span>
              </li>
              <li className='flex '>
                <span className='py-3 pl-1 pr-3 text-[#fafafa]'>
                  <FaCheck />
                </span>
                <span className='p-2 text-md text-[#f5f5f5]'>
                  Multi-platform Integration (limited to 1 device)
                </span>
              </li>
              <li className='flex '>
                <span className='py-3 pl-1 pr-3 text-[#fafafa]'>
                  <FaCheck />
                </span>
                <span className='p-2 text-md text-[#f5f5f5]'>
                  Multilingual Support (2 languages)
                </span>
              </li>
            </ul>
          </div>
          <button className='w-auto absolute bottom-5 left-4 right-4 border border-gray-light p-3 rounded-lg text-sm text-[#8692a6] '>
            Your Current Plan
          </button>
        </div>
        <div className='relative border border-gray-light rounded-xl bg-[#1E2024] p-4'>
          <img src='/images/pricing_2.png' />
          <div className=' py-4'>
            <div className='flex'>
              <div>
                <h3 className='text-2xl font-bold text-white'>Plus</h3>
                <p className='text-[#bababa] text-sm mt-2'>USD $20/month</p>
              </div>
              <span className='ml-auto text-[#A7A0F8] border border-[#A7A0F8] py-1 px-2 text-sm rounded-lg h-max'>
                Best Selling
              </span>
            </div>

            <ul className='py-5 mb-10 pr-12'>
              <li className='flex '>
                <span className='py-3 pl-1 pr-3 text-[#fafafa]'>
                  <FaCheck />
                </span>
                <span className='p-2 text-md text-[#f5f5f5]'>
                  Access to Multiple Personalities (10 personalities)
                </span>
              </li>
              <li className='flex '>
                <span className='py-3 pl-1 pr-3 text-[#fafafa]'>
                  <FaCheck />
                </span>
                <span className='p-2 text-md text-[#f5f5f5]'>
                  Real-time Web References (unlimited queries)
                </span>
              </li>
              <li className='flex '>
                <span className='py-3 pl-1 pr-3 text-[#fafafa]'>
                  <FaCheck />
                </span>
                <span className='p-2 text-md text-[#f5f5f5]'>
                  Multi-platform Integration (up to 5 devices)
                </span>
              </li>
              <li className='flex '>
                <span className='py-3 pl-1 pr-3 text-[#fafafa]'>
                  <FaCheck />
                </span>
                <span className='p-2 text-md text-[#f5f5f5]'>
                  Multilingual Support (10 languages)
                </span>
              </li>
            </ul>
          </div>
          <button className='w-auto absolute bottom-5 left-4 right-4 border border-gray-light p-3 rounded-lg text-sm text-[#181818] bg-gradient-to-r from-[#A7A0F8] to-[#A7A0F8] '>
            Upgrade to Plus
          </button>
        </div>
        <div className='relative border border-gray-light rounded-xl bg-[#181818] p-4'>
          <img src='/images/pricing_3.png' />
          <div className=' py-4'>
            <h3 className='text-2xl font-bold text-white'>Team</h3>
            <p className='text-[#bababa] text-sm mt-2'>
              USD $40/month (per user)
            </p>
            <ul className='py-5 mb-10 pr-12'>
              <li className='flex'>
                <span className='py-3 pl-1 pr-3 text-[#fafafa]'>
                  <FaCheck />
                </span>
                <span className='p-2 text-md text-[#f5f5f5]'>
                  Advanced Generated Images (limited to 100 images/month for the
                  team)
                </span>
              </li>
              <li className='flex '>
                <span className='py-3 pl-1 pr-3 text-[#fafafa]'>
                  <FaCheck />
                </span>
                <span className='p-2 text-md text-[#f5f5f5]'>
                  Multilingual Support (15 languages)
                </span>
              </li>
              <li className='flex '>
                <span className='py-3 pl-1 pr-3 text-[#fafafa]'>
                  <FaCheck />
                </span>
                <span className='p-2 text-md text-[#f5f5f5]'>
                  Advanced Feedback Mechanism
                </span>
              </li>
              <li className='flex '>
                <span className='py-3 pl-1 pr-3 text-[#fafafa]'>
                  <FaCheck />
                </span>
                <span className='p-2 text-md text-[#f5f5f5]'>
                  Collaborative conversation features for team projects
                </span>
              </li>
            </ul>
          </div>
          <button className='w-auto absolute bottom-5 left-4 right-4 border border-gray-light p-3 rounded-lg text-sm text-[#181818] bg-gradient-to-r from-[#A7A0F8] to-[#A7A0F8] '>
            Upgrade to Team
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
