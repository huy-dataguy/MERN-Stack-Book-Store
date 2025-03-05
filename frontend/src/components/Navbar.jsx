import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to='/'>
            <HiMiniBars3CenterLeft className="size-6" />

          </Link>
          <div className="relative ">
            <Link >
              <IoIosSearch className="size-6" />
              <input type="text" placeholder="Search here" />
            </Link>
          </div>

        </div>

        {/* right side */}
        <div>
          <div>Nav items</div>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
