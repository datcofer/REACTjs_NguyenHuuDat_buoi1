import React, { useState } from 'react';

const HeaderLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-black text-white px-4 sm:px-6 md:px-12 text-base'>
      <div className='mx-auto max-w-7xl flex justify-between items-center py-4'>
        <div className='w-auto md:w-1/4'>
          <h2 className='text-lg md:text-xl'>Star Bootstrap</h2>
        </div>
        <button
          className='block md:hidden text-white'
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <nav className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='flex flex-col md:flex-row justify-center gap-2 md:gap-6 text-center'>
            <li><a href="#" className='hover:text-gray-400'>Home</a></li>
            <li><a href="#" className='text-gray-500 hover:text-white'>About</a></li>
            <li><a href="#" className='text-gray-500 hover:text-white'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderLayout;
