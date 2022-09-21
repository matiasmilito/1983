import React, { useEffect, useState } from 'react'
import { doc, updateDoc, setDoc, getFirestore, deleteDoc } from 'firebase/firestore';
import { BsTrash } from 'react-icons/bs';


const Order = ({order, setorders}) => {

    const [refresh, setRefresh] = useState(false)
    const [bool, setBool] = useState(false)
    
        
    const handleClick = () =>{
        const db = getFirestore();
        const documento = doc(db, 'orders', order.id)
        setBool(!bool)
        updateDoc(documento, {
            state: bool
        })        
    }
    
    const handleDelete = () => {
        const querydb = getFirestore();
        deleteDoc(doc(querydb, 'orders', order.id));
    }

  return (
    <div className='flex border-b-2 items-center'>
        <div className='flex flex-col p-4 w-[30vw] border-r-2'>
            <p>Comprador: {order.buyer.name}</p>
            <p>{order.buyer.email}</p>
            <p>DNI: {order.buyer.dni}</p>
            <p>Celular: {order.buyer.phone}</p>
        </div>
        <div>
            {
                order.items.map((product) =>{  
                    return (
                        <div className='flex justify-around w-[50vw] text-center border-b-2 p-2'>
                                <p className='text-center'>{product.title}</p>
                                <p className='text-center'>{product.quantity}</p>
                                <p className='text-center'>${product.price}</p>
                        </div> 
                )})
            }
        </div>
        <div className='w-[10vw] text-center font-bold border-l-2'>
            ${order.total}
        </div>
        <div className='m-auto'>
            <button onClick={handleClick}>
                {order.state? <div className='bg-green-500 p-1 rounded-lg '>A retirar</div>  : <div className='bg-[#5a2b80] text-white p-1 rounded-lg'>En proceso</div>}
            </button>
        </div>
        <div className='p-2'>
            <button onClick={handleDelete} className='bg-red-500 p-1 rounded-lg'><BsTrash /></button>
        </div>
    </div>
  )
}

export default Order