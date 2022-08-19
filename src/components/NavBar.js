import React from 'react';
import { useState } from 'react';
import Logo from '../assets/logoced.png';
import {FaShoppingCart, FaUser, FaBars, FaTimes} from 'react-icons/fa';




const NavBar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  // const [activePage, setActivePage] = useState(null)
  
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#772181] text-white'>
      <div className='flex items-center'>
        <img src={Logo} alt="logo" style={{width: '150px'}} className='transform hover:scale-105 transition duration-300'/>
      </div>

      {/*Desktop Menu*/}
      <ul className='hidden md:flex items-center pr-22'>
        <li className='hover:scale-110 font-bold p-4'>Home</li>
        <li className='hover:scale-110 active:font-bold p-4'>1° año</li>
        <li className='hover:scale-110 active:font-bold p-4'>2° año</li>
        <li className='hover:scale-110 active:font-bold p-4'>3° año</li>
        <li className='hover:scale-110 active:font-bold p-4'>4° año</li>
        <li className='hover:scale-110 active:font-bold p-4'>5° año</li>
        <li className='hover:scale-110 active:font-bold p-4'>6° año</li>

      </ul>

      <ul className='hidden md:flex items-center'>
        <li className='text-3xl hover:scale-110 transition duration-100 p-4'><FaShoppingCart /></li>
        <li className='text-3xl hover:scale-110 transition duration-100 p-4'><FaUser /></li>
      </ul>
      


      {/* Hamburger Menu */}
      <div onClick={handleClick} className='md:hidden z-10 text-2xl'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile Menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#772181] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl '>Home</li>
        <li className='py-6 text-4xl '>1° año</li>
        <li className='py-6 text-4xl '>2° año</li>
        <li className='py-6 text-4xl '>3° año</li>
        <li className='py-6 text-4xl '>4° año</li>
        <li className='py-6 text-4xl '>5° año</li>
        <li className='py-6 text-4xl '>6° año</li>
        <li className='py-6 text-4xl '><FaShoppingCart /></li>
        <li className='py-6 text-4xl '><FaUser /></li>
      </ul>

      

    </div>
  )
}

export default NavBar