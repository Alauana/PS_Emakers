import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const addToCart = (item) => {
    const exists = cart.some(
      (cartItem) =>
        cartItem.title === item.title && cartItem.platform === item.platform
    )

    if (!exists) {
      setCart([...cart, item])
      setTotal(prevTotal => prevTotal + parseFloat(item.price.replace('R$', '').replace(',', '.')))
    }
  }

  return (
    <Context.Provider value={{ cart, total, addToCart }}>
      {children}
    </Context.Provider>
  )
}

export const useCart = () => useContext(Context)
