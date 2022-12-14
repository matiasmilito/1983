import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';




const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState('')
    const [productFilter, setProductFilter] = useState([])
    const [categorias, setCategorias] = useState([])

    const {productType} = useParams();

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);  
        }, 1000);
    }, [])

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
            if (productType) {
            const queryFilter = query(queryCollection, where('categoryId', '==', productType))
            getDocs(queryFilter)
            .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
        } else {
            getDocs(queryCollection)
            .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
    }, [productType])


    useEffect(() => {    
    const filteredProducts = () => {
            const filteredItems = products.filter((product)=> {
                if(product.materia === filter){
                    return true;
                }
                return false
            })
            setProductFilter(filteredItems)
    }
    filteredProducts()
    }, [filter, productType])


    // useEffect(() => {
    //     filterCategorias()
    // }, [products])

    // const filterCategorias = () => {
    //     for(let i = 0; i < products.length; i++){
    //         if(categorias.includes(products[i].materia)){
                
    //         } else {
    //             categorias.push(products[i].materia)
    //         }
    //     }
    //     console.log(categorias)
    // }   

    useEffect(() => {
        if (productType === 'primero'){
            setCategorias(['Historia Constitucional Argentina', 'Derecho Constitucional','Derecho Privado', 'Introduccion al Derecho', 'Introduccion a la Filosofia', 'Taller de acceso a la info. Jur??dica'])
        } else if (productType === 'segundo'){
            setCategorias(['Historia del Derecho', 'Econom??a Politica', 'Derechos de las Obligaciones', 'Derechos de Da??os', 'Derechos Humanos', 'Derechos Reales', 'Finanzas y Derecho Financiero'])
        } else if (productType === 'tercero'){
            setCategorias(['Derecho Pol??tico', 'Derecho de los Contratos', 'Derecho Penal I', 'Derecho Tributario', 'Derecho de la Empresa y el Mercado', 'Derecho Procesal I', 'Derecho Agrario'])
        } else if (productType === 'cuarto'){
            setCategorias(['Sociolog??a General y del Derecho', 'Derecho Penal II', 'Derecho Procesal II', 'Derecho de las Familias', 'Derecho del Trabajo y Seguridad Social', 'Derecho de las Personas Jur??dicas', 'Derecho del Consumidor', 'Derecho Ambiental' ])
        } else if (productType === 'quinto'){
            setCategorias(['Derecho Administrativo I', 'Derecho Procesal III', 'Pol??ticas Dem??craticas de Seguridad Ciudadana', 'T??tulos Valores', 'Pr??ctica Profesional II', 'Derecho Administrativo II', 'Derecho Internacional P??blico', 'Derecho de la Insolvencia', 'Derecho del Transporte y de la Navegaci??n'])
        } else if (productType === 'sexto'){
            setCategorias(['Filosof??a del Derecho', 'Derecho de las sucesiones', 'Derecho Internacional Privado', 'Derecho de la Integraci??n', 'Idioma', 'Pr??ctica Profesional III'])
        } else if (productType === 'codigos'){
            setCategorias(['C??digo Civil y Comercial', 'Constituci??n Nacional'])
        } else if (productType === 'editorial') {
            setCategorias(['Editorial'])
        }
    },[productType])


    if (!loading){
        return <div className='flex items-center justify-center p-20 h-screen'><ClipLoader /></div>
    }

    return (
        <div className='pt-[100px]'>
            {/* <div className='capitalize font-bold text-4xl text-center'>{productType}</div> */}
            <div className='flex justify-center'>
                <div className='text-center w-auto pb-2'>
                    <select 
                    className='p-1 text-center'
                    onChange={(e) =>setFilter(e.target.value)}
                    >
                        <option disabled selected>Filtra por materia</option>
                        {categorias.map(materia => {
                            return (
                            <option>{materia}</option>
                        )})}
                    </select>

                </div>
            </div>
            
            {
                filter? <ItemList products={productFilter} /> : <ItemList products={products}/>
            }
            
        </div>
  )
}

export default ItemListContainer