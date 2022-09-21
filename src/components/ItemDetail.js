import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import { useCartContext } from '../context/CartContext';
import swal from 'sweetalert';
import { useEffect } from 'react';


const ItemDetail = ({producto, count}) => {
  const [cart1, setCart1] = useState(false);
  const [anillado, setAnillado] = useState(false)
  const [anilladoPrice, setAnilladoPrice] = useState(0)
  
  const {addItem} = useCartContext();

  const onAdd = (count) => {
    swal({
        title: "Agregado!",
        text: `Se agregaron ${count} al carrito!`,
        icon: "success",
      })
    setCart1(true);
    addItem(producto, count, anilladoPrice)
    setAnilladoPrice(0);
    console.log(anilladoPrice)
}

 useState(() => {
   if(anillado){
     setAnilladoPrice(150)
   } else {
  setAnilladoPrice(0)
}
}, [anilladoPrice])

const handleChange = (event) => {
  if (event.target.checked){
    console.log('con anillado')
  } else {
    console.log('sin anillado')
  }
  setAnillado(!anillado)
}




  return (
    <div className='w-full bg-white flex items-center justify-center pt-[60px]'>
      <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 m-4'>
        <div className='m-auto pt-4'>
            <img src={producto.image} alt="itemdetail" className='h-[300px] rounded-xl shadow-lg'/>
        </div>
        <div className='flex flex-col items-center m-4 justify-center'>
            <div className='text-4xl font-bold text-center'>{producto.title}</div>
            <div className='p-4 text-2xl text-center'>{producto.description}</div>
            <div className='text-2xl font-bold p-4'>${producto.price}</div>
            <div className='pb-2 text-xl'>Anillado $150<input type='checkbox' value={anillado} className='m-2 text-2xl' onChange={handleChange} /></div>
            {/* <div>
              <select onChange={e => setAnillado(e.target.value)}>
                <option>Anillado $150</option>
                <option selected>Sin anillado</option>
              </select>
            </div> */}
            {
              cart1
                ? <Link to='/cart'><button className='p-[12px] text-black font-bold bg-[#f1da36] rounded-xl text-center cursor-pointer w-auto text-2xl'>Terminar compra</button></Link>
                : <ItemCount stock={producto.stock} onAdd={onAdd}/>
            }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail