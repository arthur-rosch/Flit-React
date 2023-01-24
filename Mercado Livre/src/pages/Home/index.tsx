import { ContainerHome, ContainerProduct } from './styles'
import { Benefits } from '../../components/Benefits'
import { Header } from '../../components/Header'
import { useContext } from 'react'
import { MLContext } from '../../Context/context'
import { CardProduct } from '../../components/CardProduct'

export function Home() {
  const { product } = useContext(MLContext)
  return (
    <ContainerHome>
      <Header />
      <Benefits />
      <ContainerProduct>
        {product.map((product) => {
          return (
            <CardProduct
              key={product.id}
              id={product.id}
              Name={product.Name}
              RegularPrice={product.RegularPrice}
              UrlImgProduct={product.UrlImgProduct}
              DiscountPrice={product.DiscountPrice}
            />
          )
        })}
      </ContainerProduct>
    </ContainerHome>
  )
}
