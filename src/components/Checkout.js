import React from 'react'
import {query, where, getDocs, addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { UserAuth } from '../context/AuthContext';
import { useEffect } from 'react';


const Checkout = () => {

    const {user} = UserAuth();

    const {cart, clear, totalPrice} = useCartContext();

    const [usuario, setUsuario] = useState([])

    const [name, setName] = useState()
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState()
    const [dni, setDni] = useState()
    const [state, setState] = useState(false)

    const navigate = useNavigate()


    const order = {
        buyer: {
        name: name,
        email: email,
        phone: phone,
        dni: dni,
    },
    date: serverTimestamp(),
    state: state,
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(
        ({id}) => swal({
            title: "Listo! Retirala en 10 dias!",
            text: `Con su codigo ${id}!`,
            icon: "success",
          })
    )
    .then(clear)
    const mailCollection = collection(db, 'mail')
    const emailContent = {
        to: user.email,
        message: {
            subject: 'Compra realizada!',
            text: `Retire su orden de compra en 10 días con el codigo ${order.id} por la fotocopiadora del CED`,
            html: `<p>Retire su orden de compra en 10 días con el codigo ${order.id} por la fotocopiadora del CED</p>`
        }
    }
    addDoc(mailCollection, emailContent)

    navigate('/profile')
  }


  return (
    <div className='w-full h-screen pt-[80px]'>
        <p className='text-center p-4 font-bold'>
            Complete los campos!
        </p>
        <form className='flex flex-col items-center w-[70vw] m-auto'>
            <div className='p-2'>
                <input type="text" className='border p-2 rounded-2xl' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='p-2'>
                <select className='border p-2 rounded-2xl' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}>
                    <option selected defaultValue={user.uid}>{user.email}</option>
                </select>
            </div>

            <div  className='p-2'>
                <input type="number" className='border p-2 rounded-2xl' placeholder='Telefono' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className='p-2'>
                <input type="text" className='border p-2 rounded-2xl' placeholder='DNI' value={dni} onChange={(e) => setDni(e.target.value)}/>
            </div>
        </form>
        <div className='flex items-center justify-center p-4'>
            <button onClick={handleClick} className='p-2 text-white font-bold bg-[#5a2b80] rounded-xl text-center cursor-pointer w-auto text-2xl'>Comprar</button>
        </div> 
    </div>
  )
}

export default Checkout