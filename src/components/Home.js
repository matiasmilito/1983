import React from 'react'
import Portada from '../assets/portada.jpeg'
import Novedades from '../assets/novedades.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-full w-full'>
        <div className='pt-[80px]'>
            <img src={Portada} alt='portada' className='object-cover w-full'/>
        </div>
        {/* <div className='p-4 flex items-center justify-center '>
            <img src={Novedades} alt='novedades' className='max-w-[200px]'/>
        </div> */}
        <div className='flex flex-col items-center justify-center p-2 m-2'>
          <p className='text-4xl font-bold text-center'>¡Bienvenidos!</p>
          <p className='text-2xl text-center'>a la web de la Fotocopiadora del CED,</p>
          <p className='text-2xl text-center'>Bienvenidos al Sistema Ágil de Fotocopiadora Online.</p>
          <p className='text-2xl text-center'>Para realizar tus compras debes registrarte en el sistema!</p>
          <div className='p-2'>
            <Link to='/register'><button className='p-1 text-black font-bold bg-[#f1da36] rounded-xl text-center cursor-pointer w-auto text-2xl'>Registrate</button></Link>
          </div>
        </div> 
    </div>
  )
}

export default Home