import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import User from '../assets/logoced.png'
import { useNavigate } from 'react-router-dom';
import { getDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import MyOrders from './MyOrders';
import Bienvenido from '../assets/bienvenido.png'

const Profile = () => {

    const [usuario, setUsuario] = useState([])
    const [myOrders, setMyOrders] = useState([])
    const [miUsuario, setMiUsuario] = useState({})

    const { user, logout } = UserAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
            console.log('logout')
        } catch (e) {
            console.log(e.message)
        }
    }


    useEffect(() => {
      const querydb = getFirestore();
      const ordersCollection = collection(querydb, 'orders')
      const filterMyOrders = query(ordersCollection, where('buyer.email' , '==', user.email))
      getDocs(filterMyOrders)
      .then(res => setMyOrders(res.docs.map(order => ({id: order.id, ...order.data()}))))
    }, [])

    useEffect(() => {
        const querydb1 = getFirestore();
        const usersCollection = collection(querydb1, 'usuarios')
        const filterUser = query(usersCollection, where('email', '==', user.email))
        getDocs(filterUser)
        .then(
            res => setUsuario(res.docs.map(order => ({id: order.id, ...order.data()})))
        )
    }, [])
 

    return (
        <div className='w-full pt-[90px] flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
            <div>
                {/* <img src={Bienvenido} alt='bienvenido' className='max-w-[300px] p-2' /> */}
                <p className='text-4xl font-bold'>¡Bienvenido!</p>
            </div>
                {
                    usuario.map((usuario) => {
                        return (
                            <div className='flex flex-col items-center'>
                                <div className='font-semibold text-2xl pt-2 '>{usuario.name} {usuario.lastName}</div>
                                <div>{usuario.legajo}</div>
                            </div>
                        )
                    })
                }
                <div className='p-4'>
                    <button className='p-1 text-black font-bold bg-[#f1da36] rounded-xl text-center cursor-pointer w-auto text-2xl' onClick={handleLogout}>Cerrar Sesión</button>
                </div>
                {myOrders.length === 0 ? <p className='text-center font-bold text-2xl'>No tienes compras todavía</p> : <p className='text-center font-bold text-2xl'>Compras en proceso</p>}
                {
                  myOrders.map((orders) => <MyOrders orders={orders}/>)
                }
            </div>
        </div>
    )
}

export default Profile