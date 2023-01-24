import { ContainerBenefits, ContentBenefits, CardBenefits } from './styles'
export function Benefits() {
  return (
    <ContainerBenefits>
      <ContentBenefits>
        <CardBenefits variante={true}>
          <p>
            Pagamento rápido e seguro <br />
            Com cartão
          </p>
        </CardBenefits>
        <CardBenefits>
          <p>
            Pagamento rápido e seguro <br />
            Com cartão
          </p>
        </CardBenefits>
        <CardBenefits>
          <p>
            Pagamento rápido e seguro <br />
            Com cartão
          </p>
        </CardBenefits>
        <CardBenefits>
          <p>
            Pagamento rápido e seguro <br />
            Com cartão
          </p>
        </CardBenefits>
      </ContentBenefits>
    </ContainerBenefits>
  )
}
