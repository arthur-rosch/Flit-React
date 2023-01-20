import styled from 'styled-components'

export const ContainerBox = styled.div`
  width: 20rem;
  height: 20rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: white;
  background: black;
`

export const ContainerInputs = styled.div`
  p{
    font-size:26px;
  }
`

const BaseInput = styled.div`
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;

  label{
    color:white;  
  }

`

export const UserInput  = styled(BaseInput)``


export const PasswordInput  = styled(BaseInput)``

export const ButtonLink = styled.button`
  width: 15rem;
  height: 1.5rem;

  color: black;
`