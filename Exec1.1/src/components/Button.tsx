import { MouseEvent } from 'react'
interface ButtonProps {
  operador: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}
export function Button({ operador, onClick }: ButtonProps) {
  return (
    <button type="button" onClick={onClick}>{operador}</button>
  )
}