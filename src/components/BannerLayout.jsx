import React from 'react'

const BannerLayout = () => {
    return (
        <div className='text-left bg-gray-50 mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-12 px-4 sm:px-8 md:px-12 py-8 rounded-2xl'>
          <div className='p-4 sm:p-8 md:p-16 lg:p-24'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-tight sm:leading-normal mb-4'>
              A warm welcome!
            </h1>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-snug sm:leading-normal mb-6'>
              Bootstrap utility classes are used to create this jumbotron since the old component
              <br className='hidden sm:block' />
              has been removed from the framework. Why create custom CSS when you can use utilities?
            </p>
            <button className='bg-blue-700 text-white text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded-lg'>
              Call to action
            </button>
          </div>
        </div>
      );
}

export default BannerLayout;