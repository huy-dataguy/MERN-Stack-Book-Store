import { TiShoppingCart } from "react-icons/ti";
import { HiMiniBars3CenterLeft, HiSparkles } from "react-icons/hi2";
import { HiUserCircle } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import avatarImage from "../assets/avatar.png"
function Navbar() {
  const currentUser = true;
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to='/'>
            <HiMiniBars3CenterLeft className="size-6" />

          </Link>
          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <Link >
              <IoIosSearch className="absolute inline-block left-2 inset-y-1" />
              <input type="text" placeholder="Search here"
                className="bg-gray-200 w-full md:px-8 rounded-md focus:outline-none" />
            </Link>
          </div>

        </div>

        {/* right side */}
        <div className=" relative flex items-center md:space-x-3 space-x-2">

          <div>
            {
              currentUser ? <>
              <button>
                <img src={avatarImage} alt="" className="size-7 rounded-full "></img>
              </button>
              </> : <Link to="/login">
                <HiUserCircle className="size-6" />
              </Link>
            }
          </div>

          <button className="hidden sm:block md:border-hidden bg-white">
            <HiOutlineHeart className="size-6" />
          </button>

          <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md">
            <TiShoppingCart className="size-6" />
            <span>0</span>
          </Link>



        </div>
      </nav>
    </header>
  )
}

export default Navbar
