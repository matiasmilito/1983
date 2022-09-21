import React from 'react'

const MyOrders = ({orders}) => {

  return (
    <div className='flex items-center p-2'>
        <p className='p-2 font-bold text-[12px]'>{orders.id}</p>
        <p className='p-2'>${orders.total}</p>
        <p className='p-2'>{orders.state ? <div className='bg-green-500 p-1 rounded-lg '>A retirar!</div>  : <div className='bg-[#5a2b80] p-1 rounded-lg text-white'>En proceso</div>}</p>
    </div>
  )
}

export default MyOrders