import styled, { css } from 'styled-components'

export const ContainerBenefits = styled.div`
  width: 80%;
  height: 15vh;
  margin: 0 auto;

  background: white;
`
export const ContentBenefits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
interface ContentBenefitsProps {
  variante?: true | false
}

export const CardBenefits = styled.div<ContentBenefitsProps>`
  width: 20vw;
  height: 15vh;
  text-align: start;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;

  ${(props) =>
    props.variante === true &&
    css`
      border-right: solid rgb(146, 144, 144) 2px;
    `}
`
