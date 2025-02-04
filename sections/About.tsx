import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto text-center py-10'>
      <span className='px-[20px] py-[8px] rounded-xl text-[#181818] bg-gradient-to-r from-[#A7A0F8] to-[#A7A0F8]'>
        Get in touch for free
      </span>
      <h2 className='font-bold text-[52px] mt-5 text-[#fafafa]'>
        Instant Content Generation with AI
      </h2>
      <p className='text-[#8692a6] text-[18px] py-2'>
        Provide Descriptions, Get Instant AI Generated Content
      </p>
      <div className='py-8 grid grid-cols-3 gap-8 text-white'>
        <div className='bg-gradient-to-b from-[#ffffff05] to-[#ffffff00] text-center flex flex-col items-center py-12 px-14 border border-gray-light shadow-[0px_-4px_4px_0px_rgba(233,217,255,0.14)] rounded-lg'>
          <img src='/images/vital_signs.svg' className='' />
          <h3 className='text-xl font-semibold mt-5 text-[#fafafa]'>
            Effortless Content AI
          </h3>
          <p className='text-gray-600 text-[#8692a6] mt-5 text-sm font-semibold'>
            Let our AI-powered service take the hard work out of content
            creation. Get started today with AI.
          </p>
        </div>
        <div className='bg-gradient-to-b from-[#ffffff05] to-[#ffffff00] text-center flex flex-col items-center py-12 px-14 border border-gray-light shadow-[0px_-4px_4px_0px_rgba(233,217,255,0.14)] rounded-lg'>
          <img src='/images/web.svg' className='' />
          <h3 className='text-xl font-semibold mt-5 text-[#fafafa]'>
            Real Time Web References
          </h3>
          <p className='text-gray-600 text-[#8692a6] mt-5 text-sm font-semibold'>
            Access up-to-date information on any topic during your conversations
            with Ai-Con.
          </p>
        </div>
        <div className='bg-gradient-to-b from-[#ffffff05] to-[#ffffff00] text-center flex flex-col items-center py-12 px-14 border border-gray-light shadow-[0px_-4px_4px_0px_rgba(233,217,255,0.14)] rounded-lg'>
          <img src='/images/automation.svg' className='' />
          <h3 className='text-xl font-semibold mt-5 text-[#fafafa]'>
            Emotional Intelligence
          </h3>
          <p className='text-gray-600 text-[#8692a6] mt-5 text-sm font-semibold'>
            Enhances the empathetic aspect of your interactions, making your
            conversations more meaningful.
          </p>
        </div>
        <div className='bg-gradient-to-b from-[#ffffff05] to-[#ffffff00] text-center flex flex-col items-center py-12 px-14 border border-gray-light shadow-[0px_-4px_4px_0px_rgba(233,217,255,0.14)] rounded-lg'>
          <img src='/images/group.svg' className='' />
          <h3 className='text-xl font-semibold mt-5 text-[#fafafa]'>
            Multiple Personalities
          </h3>
          <p className='text-gray-600 text-[#8692a6] mt-5 text-sm font-semibold'>
            Ai-Con offers a variety of personalities for your AI companion, such
            as a Explorer, Sage and etc.
          </p>
        </div>
        <div className='bg-gradient-to-b from-[#ffffff05] to-[#ffffff00] text-center flex flex-col items-center py-12 px-14 border border-gray-light shadow-[0px_-4px_4px_0px_rgba(233,217,255,0.14)] rounded-lg'>
          <img src='/images/autorenew.svg' className='' />
          <h3 className='text-xl font-semibold mt-5 text-[#fafafa]'>
            Dynamic Suggestions
          </h3>
          <p className='text-gray-600 text-[#8692a6] mt-5 text-sm font-semibold'>
            Ai-Con provides dynamic topic suggestions based on your interests
            and previous conversations.
          </p>
        </div>
        <div className='bg-gradient-to-b from-[#ffffff05] to-[#ffffff00] text-center flex flex-col items-center py-12 px-14 border border-gray-light shadow-[0px_-4px_4px_0px_rgba(233,217,255,0.14)] rounded-lg'>
          <img src='/images/cast.svg' className='' />
          <h3 className='text-xl font-semibold mt-5 text-[#fafafa]'>
            Personalized Responses
          </h3>
          <p className='text-gray-600 text-[#8692a6] mt-5 text-sm font-semibold'>
            Personalization makes your interactions more engaging and tailored
            to your unique needs.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
