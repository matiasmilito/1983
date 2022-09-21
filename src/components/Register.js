import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Register = () => {

    const {createUser} = UserAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dni, setDni] = useState()
    const [legajo, setLegajo] = useState('')
    const [phone, setPhone] = useState()
    

    const [error, setError] = useState('')

    

    const navigate = useNavigate();

    const usuario = {
        name: name,
        lastName: lastName,
        dni: dni,
        legajo: legajo,
        email: email,
        phone: phone
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password)
            navigate('/')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
        const db = getFirestore();
        const usersCollection = collection(db, 'usuarios');
        addDoc(usersCollection, usuario)
    }




  return (
    <div className='w-full h-screen bg-white flex items-center justify-center'>
        <form className='w-auto h-auto bg-white rounded-2xl flex flex-col items-center p-4 '>
            <h2 className='text-black text-2xl font-bold p-2'>Cree su cuenta</h2>
            <div className='p-4'>
                <input 
                type="text" 
                placeholder='Nombre' 
                className='p-2 text-center rounded-2xl border border-black'
                onChange={(e) => {setName(e.target.value)}}
                />
            </div>
            <div className='p-4'>
                <input 
                type="text" 
                placeholder='Apellido' 
                className='p-2 text-center rounded-2xl border border-black'
                onChange={(e) => {setLastName(e.target.value)}}
                />
            </div>
            <div className='p-4'>
                <input 
                type="number" 
                placeholder='DNI' 
                className='p-2 text-center rounded-2xl border border-black'
                onChange={(e) => {setDni(e.target.value)}}
                />
            </div>
            <div className='p-4'>
                <input 
                type="text" 
                placeholder='Legajo' 
                className='p-2 text-center rounded-2xl border border-black'
                onChange={(e) => {setLegajo(e.target.value)}}
                />
            </div>
            <div className='p-4'>
                <input 
                type="number" 
                placeholder='Celular' 
                className='p-2 text-center rounded-2xl border border-black'
                onChange={(e) => {setPhone(e.target.value)}}
                />
            </div>
            <div className='p-4'>
                <input 
                type="text" 
                placeholder='Email' 
                className='p-2 text-center rounded-2xl border border-black'
                onChange={(e) => {setEmail(e.target.value)}}
                />
            </div>
            <div className='p-4'>
                <input 
                type="password" 
                placeholder='Contraseña' 
                className='p-2 text-center rounded-2xl border border-black'
                onChange={(e) => {setPassword(e.target.value)}}
                />
            </div>
            <div className='flex flex-col items-center p-2'>
                <div className=''><button className='p-2 text-white font-bold bg-[#5a2b80] rounded-xl text-center cursor-pointer w-auto text-2xl' onClick={handleSubmit}>Registrarme</button></div>
            </div>
        </form>
    </div>
  )
}

export default Register