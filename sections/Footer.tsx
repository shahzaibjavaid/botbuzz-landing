import React from 'react'

const Footer = () => {
  return (
    <div className='container mx-auto py-10 mt-20'>
      <div className='flex'>
        <div className='w-[35%]'>
          {' '}
          <div className='flex items-center space-x-3'>
            <img src='/images/logo-mini.svg' className='w-14' />
            <span className='text-xl font-semibold text-3xl mt-1 text-[#f5f5f5]'>
              BotBuzz
            </span>
          </div>
        </div>
        <div className='w-[65%] flex ml-auto'>
          <div className='text-left'>
            <h4 className='text-3xl font-semibold text-[#fafafa]'>Resources</h4>
            <ul className='text-white mt-5 space-y-2 text-lg'>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  Updates
                </a>
              </li>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  Help Center
                </a>
              </li>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  Pricing
                </a>
              </li>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='text-left ml-auto'>
            <h4 className='text-3xl font-semibold text-[#fafafa]'>Pricing</h4>
            <ul className='text-white mt-5 space-y-2 text-lg'>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  Basic Pricing Plan
                </a>
              </li>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  Plus Pricing Plan
                </a>
              </li>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  Teams Pricing Plan
                </a>
              </li>
            </ul>
          </div>
          <div className='text-left ml-auto'>
            <h4 className='text-3xl font-semibold text-[#fafafa]'>Explore</h4>
            <ul className='text-white mt-5 space-y-2 text-lg'>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  AI Personalities
                </a>
              </li>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  Bot Buzz AI
                </a>
              </li>
            </ul>
          </div>
          <div className='text-left ml-auto'>
            <h4 className='text-3xl font-semibold text-[#fafafa]'>Company</h4>
            <ul className='text-white mt-5 space-y-2 text-lg'>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className='text-left ml-auto'>
            <h4 className='text-3xl font-semibold text-[#fafafa]'>Others</h4>
            <ul className='text-white mt-5 space-y-2 text-lg'>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  FAQs
                </a>
              </li>
              <li>
                <a href='#' className='text-[#8692a6]'>
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='py-14'>
        <hr className='border-[#696f79]' />
      </div>
      <div className='flex'>
        <p className='text-xl text-[#fafafa]'>
          Copyright © 2023 . All rights reserved
        </p>
        <ul className='ml-auto space-x-3'>
          <li className='inline-block'>
            <a
              href='#'
              className="relative text-[#fafafa] py-2 px-4 rounded-lg bg-[#282a2f] border border-transparent before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-[#8692A6] before:to-[#343840] before:z-[-1] before:m-[-2px] before:content-['']"
            >
              Socials
            </a>
          </li>
          <li className='inline-block'>
            <a
              href='#'
              className="relative text-[#fafafa] py-2 px-4 rounded-lg bg-[#282a2f] border border-transparent before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-[#8692A6] before:to-[#343840] before:z-[-1] before:m-[-2px] before:content-['']"
            >
              Botbuzz Comunity
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
