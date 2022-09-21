import React, { useEffect, useState } from 'react';
import { getDoc, getDocs ,addDoc, collection, orderBy, getFirestore, query } from 'firebase/firestore';
import swal from 'sweetalert';
import Order from './Order';

const AdminPage = () => {

  const [orders, setOrders] = useState([])

  const [categoryId, setCategoryId] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState()
  const [stock, setStock] = useState()
  const [title, setTitle] = useState('')
  const [anillado, setAnillado] = useState(false)
  const [materia, setMateria] = useState('')


  const product = {
    categoryId: categoryId,
    description: description,
    image: image,
    price: price,
    stock: stock,
    title: title,
    materia: materia,
    anillado: anillado
  }

  const handleClick = () => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    addDoc(productsCollection, product)
    .then(
      swal({
        title: "Producto agregado",
        icon: "success"
      })
    )
  }

  useEffect(() => {
    const querydb = getFirestore();
    const ordersCollection = collection(querydb, 'orders')
    const ordersByDate = query(ordersCollection, orderBy('date', 'desc'))
    getDocs(ordersByDate)
    .then(res => setOrders(res.docs.map(order => ({id: order.id, ...order.data()}))));
  }, [])





  return (
    <div className='pt-[90px]'>
        <p className='text-4xl sm:text-2xl md:text-2xl text-center font-bold'>Control de Administrador</p>


      {/* CARGA DE PRODUCTOS */}


        <div>
          <form className='flex flex-col items-center w-[70vw] m-auto'>
            <div className='p-2'>
                <input type="text" className='border p-2 rounded-2xl' placeholder='Titulo' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='p-2'>
                <select className='border p-2 rounded-2xl' placeholder='Categoría' value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                  <option selected disabled>Seleccione categoría</option>
                  <option>primero</option>
                  <option>segundo</option>
                  <option>tercero</option>
                  <option>cuarto</option>
                  <option>quinto</option>
                  <option>sexto</option>
                  <option>codigos</option>
                  <option>editorial</option>
                </select>
            </div>
            <div className='p-2'>
                <select className='border p-2 rounded-2xl' placeholder='Materia' value={materia} onChange={(e) => setMateria(e.target.value)}>
                  <option selected disabled>Seleccione materia</option>
                  <option>Historia Constitucional Argentina</option>
                  <option>Derecho Constitucional</option>
                  <option>Derecho Privado</option>
                  <option>Introduccion al Derecho</option>
                  <option>Introduccion a la Filosofia</option>
                  <option>Taller de acceso a la info. Jurídica</option>
                  <option>Historia del Derecho</option>
                  <option>Economía Politica</option>
                  <option>Derechos de las Obligaciones</option>
                  <option>Derechos de Daños</option>
                  <option>Derechos Humanos</option>
                  <option>Derechos Reales</option>
                  <option>Finanzas y Derecho Financiero</option>
                  <option>Derecho Político</option>
                  <option>Derecho de los Contratos</option>
                  <option>Derecho Penal I</option>
                  <option>Derecho Tributario</option>
                  <option>Derecho de la Empresa y el Mercado</option>
                  <option>Derecho Procesal I</option>
                  <option>Derecho Agrario</option>
                  <option>Sociología General y del Derecho</option>
                  <option>Derecho Penal II</option>
                  <option>Derecho Procesal II</option>
                  <option>Derecho de las Familias</option>
                  <option>Derecho del Trabajo y Seguridad Social</option>
                  <option>Derecho de las Personas Jurídicas</option>
                  <option>Derecho del Consumidor</option>
                  <option>Derecho Ambiental</option>
                  <option>Derecho Administrativo I</option>
                  <option>Derecho Procesal III</option>
                  <option>Políticas Demócraticas de Seguridad Ciudadana</option>
                  <option>Títulos Valores</option>
                  <option>Práctica Profesional II</option>
                  <option>Derecho Administrativo II</option>
                  <option>Derecho Internacional Público</option>
                  <option>Derecho de la Insolvencia</option>
                  <option>Derecho del Transporte y de la Navegación</option>
                  <option>Filosofía del Derecho</option>
                  <option>Derecho de las sucesiones</option>
                  <option>Derecho Internacional Privado</option>
                  <option>Derecho de la Integración</option>
                  <option>Idioma</option>
                  <option>Práctica Profesional III</option>
                  <option>Código Civil y Comercial</option>
                  <option>Constitución Nacional</option>
                  <option>Editorial</option>
                </select>
            </div>
            <div className='p-2'>
                <input type="text" className='border p-2 rounded-2xl' placeholder='Descripción' value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className='p-2'>
                <input type="text" className='border p-2 rounded-2xl' placeholder='Imagen' value={image} onChange={(e) => setImage(e.target.value)}/>
            </div>
            <div className='p-2'>
                <input type='number' className='border p-2 rounded-2xl' placeholder='Precio' value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div><div className='p-2'>
                <input type="number" className='border p-2 rounded-2xl' placeholder='Stock' value={stock} onChange={(e) => setStock(e.target.value)}/>
            </div>
          </form>
          <div className='flex items-center justify-center p-4'>
            <button type='reset' onClick={handleClick} className='p-2 text-white font-bold bg-[#5a2b80] rounded-xl text-center cursor-pointer w-auto text-2xl'>Agregar</button>
          </div> 
        </div>


        {/* CONTROL DE ORDENES */}

        <div>
          <p className='text-4xl font-bold text-center p-4'>Ordenes</p>
          <div>
            {
              orders.map(order => <Order key={order.id} order={order} id={order.id} setorder={setOrders}/>)
            }
          </div>
        </div>


    </div>
  )
}

export default AdminPage