import React from 'react'

const CTA = () => {
  return (
    <div className='container mx-auto py-10 mt-10'>
      <div className='rounded-2xl p-20 text-center text-white bg-gradient-to-b from-[#ffffff05] to-[#ffffff00] shadow-[0px_-2px_5px_rgba(233,217,255,0.3),0px_-2px_40px_rgba(167,160,248,0.15)]'>
        <h2 className='font-bold text-[52px] text-[#fafafa]'>
          Join Our Community
        </h2>
        <p className='max-w-4xl mx-auto px-5 py-3 text-[#8692a6]'>
          At Bot Buzz, we value connection and shared experiences. Join our
          vibrant community to enhance your daily interactions with AI, share
          stories, exchange tips, and discover new ways to maximize your Ai-Con
          experience.
        </p>
        <button className='border border-[#fafafa] text-[#fafafa] rounded-xl py-2 px-7 mt-3'>
          Join Community
        </button>
      </div>
    </div>
  )
}

export default CTA
