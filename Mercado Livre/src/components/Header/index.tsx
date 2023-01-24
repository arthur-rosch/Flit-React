import { ContainerHeader, Navigation, SearchBar } from './styles'
export function Header() {
  return (
    <ContainerHeader>
      <div>
        <SearchBar type="text"></SearchBar>
      </div>

      <Navigation>
        <a href="">Categorias</a>
        <a href="">Oferta do Dia</a>
        <a href="">Histórico</a>
        <a href="">Moda</a>
      </Navigation>
    </ContainerHeader>
  )
}
