'use client'
import { useState } from 'react'
import { HiMiniArrowUpRight } from 'react-icons/hi2'

const faqs = [
  {
    id: 1,
    question: 'Is my data safe with Ai-Con?',
    answer:
      'Ai-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.',
  },
  {
    id: 2,
    question: 'What is Botbuzz and how does it work?',
    answer:
      'Ai-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.',
  },
  {
    id: 3,
    question: 'Can I customize the personality of my AI companion?',
    answer:
      'Ai-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.',
  },
  {
    id: 4,
    question: 'How does the real-time web reference feature work?',
    answer:
      'Ai-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.',
  },
  {
    id: 5,
    question:
      'What are the benefits of the premium plans compared to the free plan?',
    answer:
      'Ai-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.',
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <div className='container mx-auto py-10 text-center'>
      <h2 className='font-bold text-[52px] mt-5 text-[#fafafa]'>
        Everything You Need To Know
      </h2>
      <p className='text-[#8692a6] text-[18px] py-2'>
        Here are some frequently asked questions
      </p>
      <div className='text-left max-w-5xl mx-auto'>
        {' '}
        {faqs.map((faq, index) => (
          <div key={faq.id} className='border-b border-b-[#696f79] py-8 px-2'>
            <button
              className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-500 ${
                activeIndex === index ? 'text-[#a7a0f8]' : 'text-[#fafafa]'
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className='flex items-center space-x-12'>
                <span className='text-lg font-bold'>0{index + 1}</span>
                <span className='text-lg font-semibold'>{faq.question}</span>
              </div>
              <HiMiniArrowUpRight
                className={`transition-transform duration-500 text-[#8692a6] border border-[#8692a6] w-9 h-9 p-2 rounded-full ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-max-height ml-16 px-5 max-w-3xl duration-500 ${
                activeIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className='text-[#f5f5f5]'>{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
