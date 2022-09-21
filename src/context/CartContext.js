import React, { useContext, useEffect, useState } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
      if (JSON.parse(localStorage.getItem('cart'))) {
        setCart(JSON.parse(localStorage.getItem('cart')))
      }
    }, [])

    const addItem = (item, newQuantity, anilladoPrice) => {
      const newCart = cart.filter(prod => prod.id !== item.id);
      newCart.push({...item, quantity: newQuantity, estadoAnillado : anilladoPrice});
      setCart(newCart);
    }    

    const clear = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    const totalCount = () => cart.reduce((acumulador, producto) => acumulador + producto.quantity, 0);

    const totalPrice = () => { return cart.reduce((prev, act) => prev + act.quantity * act.price + act.quantity * act.estadoAnillado, 0)}


  return (
    <CartContext.Provider value={{addItem, clear, isInCart, removeItem, totalCount, totalPrice, cart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider