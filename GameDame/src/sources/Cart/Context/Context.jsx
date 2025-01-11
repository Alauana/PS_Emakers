import React, { createContext, useContext, useState } from 'react'

// Armazena e fornece algum valor para a árvore de componentes
const Context = createContext()

// Fornece o conteúdo para os outros componentes
export const CartProvider = ({ children }) => {
  // Acessa o estado do carrinho e o total
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  // Adicionar ao carrinho
  const addToCart = (item) => {
    // Verificar se o item já existe
    const exists = cart.some(
      (cartItem) =>
        cartItem.title === item.title && cartItem.platform === item.platform
    )

    // Se não existir, adiciona o item o total é atualizado somando o valor do mesmo
    if (!exists) {
      setCart([...cart, item])
      setTotal(prevTotal => prevTotal + parseFloat(item.price.replace('R$', '').replace(',', '.')))
    }
  }

  // Disponibiliza os valores do context pra todos os componentes filhos
  return (
    <Context.Provider value={{ cart, total, addToCart }}>
      {children}
    </Context.Provider>
  )
}

export const useCart = () => useContext(Context)
