import React from 'react';
import { useState } from 'react';
import Logo from '../assets/logoced.png';
import SAFO from '../assets/SAFO.png';
import {FaShoppingCart, FaUser, FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import CartWidget from './CartWidget';


const NavBar = () => {

  const {user} = UserAuth();

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  

  // const [activePage, setActivePage] = useState(null)
  
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#5a2b80] text-white '>
      <div className='flex items-center'>
        <Link to='/'>
          <div className='flex items-center'>
            <img src={Logo} alt="logo" style={{width: '150px'}} className='transform hover:scale-105 transition duration-300'/>
            {/* <img src={SAFO} alt="safo" className='max-h-[50px]' /> */}
            <p className='text-2xl pt-8 pl-1 text-white font-bold'>S.A.F.O.</p>
          </div>   
        </Link>  
      </div>

      {/*Desktop Menu*/}
      <ul className='hidden md:flex items-center'>
        <li className='hover:scale-110 font-bold p-4'><Link to='/'>Home</Link></li>
        <li className='hover:scale-110 active:font-bold p-4'><Link to='/type/primero'>1° año</Link></li>
        <li className='hover:scale-110 active:font-bold p-4'><Link to='/type/segundo'>2° año</Link></li>
        <li className='hover:scale-110 active:font-bold p-4'><Link to='/type/tercero'>3° año</Link></li>
        <li className='hover:scale-110 active:font-bold p-4'><Link to='/type/cuarto'>4° año</Link></li>
        <li className='hover:scale-110 active:font-bold p-4'><Link to='/type/quinto'>5° año</Link></li>
        <li className='hover:scale-110 active:font-bold p-4'><Link to='/type/sexto'>6° año</Link></li>
        <li className='hover:scale-110 active:font-bold p-4'><Link to='/type/codigos'>Códigos</Link></li>
        <li className='hover:scale-110 active:font-bold p-4'><Link to='/type/editorial'>Editorial CED</Link></li>
      </ul>

      <ul className='hidden md:flex items-center'>
        <li className='text-3xl hover:scale-110 transition duration-100 p-4'><CartWidget /></li>
        <li className='text-3xl hover:scale-110 transition duration-100 p-4'><Link to={user ? '/profile' : '/login'}><FaUser /></Link></li>
      </ul>

     

      {/* Hamburger Menu */}

      {/* <div className='md:hidden text-2xl flex justify-end'>
        <div className=''>
          <CartWidget />
        </div>
      </div> */}
      <div className='flex items-center'>
        <div className='md:hidden text-2xl p-2'><CartWidget /></div>
        <div onClick={handleClick} className='md:hidden z-10 text-2xl'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>
      </div>

      

      {/* Mobile Menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#5a2b80] flex flex-col justify-center items-center'}>
        <li className='py-4 text-4xl font-bold' onClick={handleClick}><Link to='/'>Home</Link></li>
        <li className='py-4 text-4xl ' onClick={handleClick}><Link to='/type/primero'>1° año</Link></li>
        <li className='py-4 text-4xl ' onClick={handleClick}><Link to='/type/segundo'>2° año</Link></li>
        <li className='py-4 text-4xl ' onClick={handleClick}><Link to='/type/tercero'>3° año</Link></li>
        <li className='py-4 text-4xl ' onClick={handleClick}><Link to='/type/cuarto'>4° año</Link></li>
        <li className='py-4 text-4xl ' onClick={handleClick}><Link to='/type/quinto'>5° año</Link></li>
        <li className='py-4 text-4xl ' onClick={handleClick}><Link to='/type/sexto'>6° año</Link></li>
        <li className='py-4 text-4xl ' onClick={handleClick}><Link to='/type/codigos'>Códigos</Link></li>
        <li className='py-4 text-4xl ' onClick={handleClick}><Link to='/type/editorial'>Editorial CED</Link></li>
        <li className='py-4 text-4xl ' onClick={handleClick}><Link to={user ? '/profile' : '/login'}><FaUser /></Link></li>
      </ul>
    </div>
  )
}

export default NavBar