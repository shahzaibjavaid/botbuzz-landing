const Header = () => {
  return (
    <header className='container mx-auto flex items-center justify-between px-6 py-8 '>
      <div className='flex items-center space-x-2'>
        <img src='/images/logo.svg' />
        <span className='text-xl font-semibold text-2xl mt-1 text-[#f5f5f5]'>
          BotBuzz
        </span>
      </div>
      <nav className='absolute left-1/2 transform -translate-x-1/2 border border-gray-light py-[16px] px-[36px] rounded rounded-full'>
        <ul className='flex space-x-6 text-sm text-[#fafafa]'>
          <li>
            <a href='#' className='hover:text-gray-300 mx-4'>
              FAQ
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-300 mx-4'>
              Pricing
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-300 mx-4'>
              Sign In
            </a>
          </li>
        </ul>
      </nav>
      <a
        href='#'
        className='px-[20px] py-[4px] rounded-xl text-[#181818] bg-gradient-to-r from-[#A7A0F8] to-[#A7A0F8]'
      >
        Get Started
      </a>
    </header>
  )
}

export default Header
