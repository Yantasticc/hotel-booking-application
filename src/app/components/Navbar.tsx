'use client'

import { useState } from "react";
import { MdOutlineTaxiAlert } from "react-icons/md"; 
import { MdAttractions } from "react-icons/md"; 
import { BiCar } from "react-icons/bi"; 
import { SiYourtraveldottv } from "react-icons/si"; 
import { FaPlane } from "react-icons/fa"; 
import { RiHotelBedFill } from "react-icons/ri"; 
import { AiOutlineClose } from "react-icons/ai"; 
import { BsFillJournalBookmarkFill } from "react-icons/bs"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { AiOutlineMenu } from "react-icons/ai"; 
import { Button } from "@/components/ui/button"
import Link from "next/link";

const Navbar = () => {

  const [nav, setNav] = useState(false)

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={()=> setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:4xl px-2 cursor-pointer">
          <Link href="/">
            Cosy <span className="font-bold">Nest</span>
          </Link>
        </h1>
      </div>

      {/* Search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder="What are we looking for?" />
      </div>
      {/* Booking */}
      <Button className="bg-black hover:bg-black text-white rounded-full">
        <BsFillJournalBookmarkFill size={20} className="mr-2"/>
        <Link href='/bookings'>Bookings</Link>
      </Button>

      {/* Mobile menu */}
      {/* Overlay */}
      {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''} 
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose size={30} 
          className="absolute right-4 top-4 cursor-pointer"
          onClick={()=> setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Cosy <span className="font-bold">Nest</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-4 text-gray-800">
            <li className="text-xl py-4 flex cursor-pointer">
              <RiHotelBedFill size={25} className="mr-4"/>
              <Link href="/stays">
                Stays
              </Link>
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaPlane size={25} className="mr-4"/>
              <Link href="/flights">
                Flights
              </Link>
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <SiYourtraveldottv size={25} className="mr-4"/>
              <Link href="/flights-hotel">
                Flights + Hotel
              </Link>
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <BiCar size={25} className="mr-4"/>
              <Link href="/car-rentals">
                Car rentals
              </Link>
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdAttractions size={25} className="mr-4"/>
              <Link href="/attractions">
                Attractions
              </Link>
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdOutlineTaxiAlert size={25} className="mr-4"/>
              <Link href="/airport-taxi">
                Airport Taxi
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Navbar
