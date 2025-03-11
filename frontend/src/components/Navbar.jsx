import { TiShoppingCart } from "react-icons/ti";
import { HiMiniBars3CenterLeft, HiMiniFaceSmile, HiSparkles } from "react-icons/hi2";
import { HiUserCircle } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import avatarImage from "../assets/avatar.png"
import { useState } from "react";



const Navbar = () => {
  const navigation = [
    {name: "Dashboard", href:"/dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/checkout"},
  
  ]

  const currentUser = true;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  console.log(isDropDownOpen)

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
              {/* relative position, Allows "elements" to have absolute adjustment bases on it  */}
        <div className=" relative flex items-center md:space-x-3 space-x-2">

          <div>
            {
              currentUser ? <>
                <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  <img src={avatarImage} alt="" className="size-7 rounded-full "></img>
                </button>

                {/* show dropdown  */}
                {
                  isDropDownOpen && (
                                 // absolute: It places the element in absolute position in relation to its relative parent element.
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                      <ul>
                        {
                          navigation.map((item) => (
                            <li key={item.name} onClick={() =>
                              setIsDropDownOpen(false)}>
                              <Link to={item.href} className="block
                              px-4 py-2 text-sm hover:bg-gray-200">
                                {item.name}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                }
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
