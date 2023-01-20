import { NavLink } from 'react-router-dom'
import { ContainerBox, ContainerInputs, UserInput, PasswordInput, ButtonLink } from './styles'
export function Home() {
  return (
    <ContainerBox>
      <p>LOGIN</p>
      <ContainerInputs>
        <UserInput>
          <label htmlFor="">User</label>
          <input type="text" />
        </UserInput>
        <PasswordInput>
          <label htmlFor="">Password</label>
          <input type="password" />
        </PasswordInput>
        <NavLink to={'/perfil'}>
          <ButtonLink type="button">Login</ButtonLink>
        </NavLink>
      </ContainerInputs>
    </ContainerBox>
  )
}