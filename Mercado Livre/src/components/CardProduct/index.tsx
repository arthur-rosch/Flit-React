import { Product } from '../../Context/context'
import { ContainerProduct, ProductDetails } from './styles'

export function CardProduct({
  id,
  Name,
  UrlImgProduct,
  RegularPrice,
  DiscountPrice,
}: Product) {
  return (
    <ContainerProduct>
      <img height={300} src={UrlImgProduct} alt="" />
      <ProductDetails>
        <h3>{Name}</h3>
        <span>{RegularPrice}</span>
        <span>{DiscountPrice}</span>
      </ProductDetails>
    </ContainerProduct>
  )
}
