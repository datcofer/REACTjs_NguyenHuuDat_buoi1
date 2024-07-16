import { useState } from 'react'
import HeaderLayout from './components/HeaderLayout'
import BannerLayout from './components/BannerLayout';
import ItemLayout from './components/ItemLayout';
import FooterLayout from './components/FooterLayout';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-red-500'>tôi là header</h1> */}
      <HeaderLayout />
      <BannerLayout />
      <ItemLayout />
      <FooterLayout/>
    </>
  )
}

export default App;
