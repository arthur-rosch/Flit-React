import { createContext, ReactNode, useEffect, useState } from 'react'

export interface Product {
  id: number
  Name: string
  UrlImgProduct: string
  RegularPrice: string
  DiscountPrice: string
}
export interface MLContextType {
  product: Product[]
}

interface MLContextProviderProps {
  children: ReactNode
}

export const MLContext = createContext({} as MLContextType)

export function MLContextProvider({ children }: MLContextProviderProps) {
  const [product, setProduct] = useState<Product[]>([])

  async function loadProduct() {
    const response = await fetch('http://localhost:3000/product')
    const data = await response.json()

    setProduct(data)
  }
  useEffect(() => {
    loadProduct()
  }, [])

  return <MLContext.Provider value={{ product }}>{children}</MLContext.Provider>
}
