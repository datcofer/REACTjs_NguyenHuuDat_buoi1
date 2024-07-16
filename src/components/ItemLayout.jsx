import React from 'react'

const ItemLayout = () => {
    return (
        <div className='bg-gray-100 mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-12 px-4 sm:px-8 md:px-12 rounded-2xl'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 text-white m-2 sm:m-3 md:m-4 rounded-lg">
              <div className='bg-gray-500 text-center p-5 rounded-xl'>500 x 325</div>
              <div className='text-center m-3'>
                <h5 className='text-xl text-black font-bold mb-3'>Card Title</h5>
                <p className='text-base text-gray-500 mb-3'>Lorem ipsum dolor sit amet consectetur elit. Dignissimos, corrupti eius recusandae sunt ipsa quae magnam incidunt ad obcaecati quaerat.</p>
                <button className='bg-blue-700 text-white text-base py-2 px-4 rounded-lg capitalize'>Find Out More!</button>
              </div>
            </div>
            <div className="bg-white p-4 text-white m-2 sm:m-3 md:m-4 rounded-lg">
              <div className='bg-gray-500 text-center p-5 rounded-xl'>500 x 325</div>
              <div className='text-center m-3'>
                <h5 className='text-xl text-black font-bold mb-3'>Card Title</h5>
                <p className='text-base text-gray-500 mb-3'>Lorem ipsum dolor sit amet consectetur elit. Dignissimos, corrupti eius recusandae sunt ipsa quae magnam incidunt ad obcaecati quaerat.</p>
                <button className='bg-blue-700 text-white text-base py-2 px-4 rounded-lg capitalize'>Find Out More!</button>
              </div>
            </div>
            <div className="bg-white p-4 text-white m-2 sm:m-3 md:m-4 rounded-lg">
              <div className='bg-gray-500 text-center p-5 rounded-xl'>500 x 325</div>
              <div className='text-center m-3'>
                <h5 className='text-xl text-black font-bold mb-3'>Card Title</h5>
                <p className='text-base text-gray-500 mb-3'>Lorem ipsum dolor sit amet consectetur elit. Dignissimos, corrupti eius recusandae sunt ipsa quae magnam incidunt ad obcaecati quaerat.</p>
                <button className='bg-blue-700 text-white text-base py-2 px-4 rounded-lg capitalize'>Find Out More!</button>
              </div>
            </div>
            <div className="bg-white p-4 text-white m-2 sm:m-3 md:m-4 rounded-lg">
              <div className='bg-gray-500 text-center p-5 rounded-xl'>500 x 325</div>
              <div className='text-center m-3'>
                <h5 className='text-xl text-black font-bold mb-3'>Card Title</h5>
                <p className='text-base text-gray-500 mb-3'>Lorem ipsum dolor sit amet consectetur elit. Dignissimos, corrupti eius recusandae sunt ipsa quae magnam incidunt ad obcaecati quaerat.</p>
                <button className='bg-blue-700 text-white text-base py-2 px-4 rounded-lg capitalize'>Find Out More!</button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ItemLayout;