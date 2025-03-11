
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='min-h-screen max-w-screen-2xl mx-20 px-4 py-6 font-primary'>
      <Navbar />
      <main className=''>
        <Outlet /> {/* This is where the child components will be rendered */}

      </main>
      <footer> Footer </footer>
    </div>

  )
}

export default App
