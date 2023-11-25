'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: string
  quantity: number
}

interface CarContextType {
  items: CartItem[]
  addToCart: (productId: string) => void
}

const CartContext = createContext({} as CarContextType)

interface CardProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CardProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: string) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)