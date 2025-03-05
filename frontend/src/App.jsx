
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <main className='min-h-screen'>
    <Outlet/> {/* This is where the child components will be rendered */}

    </main>
    <footer> Footer </footer>
    </>
  )
}

export default App
