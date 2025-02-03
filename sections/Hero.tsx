import React from 'react'

const Hero = () => {
  return (
    <div className='py-24'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1 className='font-bold text-[64px] leading-[70px] text-[#fafafa]'>
          Unlock The Power Of <span className='text-[#7468FC]'>BotBuzz AI</span>{' '}
          With Smartest AI
        </h1>
        <h6 className='text-[#696f79] text-[18px] py-3'>
          Your Personal AI, Tailored for Every Conversation, Anytime, Anywhere
        </h6>
        <button className='px-[48px] py-[16px] mt-5 rounded-xl text-[#181818] bg-[linear-gradient(to_right,#7468FC,#A7A0F8,#A7A0F8,#7468FC)]'>
          Start Conversation for free
        </button>
        <div className='flex items-center justify-center gap-4 py-2'>
          <img src='/images/card.svg' className='w-[24px]' />
          <h6 className='text-[#696f79] text-[16px] py-3'>
            No credit card required
          </h6>
        </div>
      </div>
      <div
        className='bg-cover bg-top bg-no-repeat w-full xl:min-h-[780px] custom-xl:min-h-[1050px] '
        style={{ backgroundImage: 'url(/images/banner.svg)' }}
      ></div>
    </div>
  )
}

export default Hero
