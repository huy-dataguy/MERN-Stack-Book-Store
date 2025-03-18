
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div >
      <Navbar />
      <main className='min-h-screen max-w-screen-2xl mx-20 px-4 py-6 font-primary'>
        <Outlet /> {/* This is where the child components will be rendered */}

      </main>
      <Footer/>
    </div>

  )
}

export default App
