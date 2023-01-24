import styled from 'styled-components'

export const ContainerHeader = styled.header`
  height: 10rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    width: 100%;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  background: yellow;
`
export const SearchBar = styled.input``
export const Navigation = styled.div`
  gap: 1rem;
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 2px solid black;
  border-bottom: 2px solid black;
`
