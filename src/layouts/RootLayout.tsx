import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className='pt-15'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default RootLayout