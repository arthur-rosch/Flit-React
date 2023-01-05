import { ChangeEvent, useState, MouseEvent } from 'react'
import './App.css'

function App() {
  const [total, setTotal] = useState(0)
  const [primeiroValor, setPrimeiroValor] = useState('')
  const [segundoValor, setSegundoValor] = useState('')
  function calcular(e: MouseEvent<HTMLButtonElement>) {
    const operador = e.currentTarget.textContent
    let resultado = 0

    switch (operador) {
      case '+':
        resultado = (Number(primeiroValor)) + (Number(segundoValor))
        break
      case '-':
        resultado = (Number(primeiroValor)) - (Number(segundoValor))
        break
      case 'x':
        resultado = (Number(primeiroValor)) * (Number(segundoValor))
        break
      case '/':
        resultado = (Number(primeiroValor)) / (Number(segundoValor))
        break
    }

    setTotal(resultado)
  }
  return (
    <main>
      <div>
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setPrimeiroValor(e.target.value)} />
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setSegundoValor(e.target.value)} />
      </div>
      <div>
        <button type="button" onClick={calcular}>+</button>
        <button type="button" onClick={calcular}>-</button>
        <button type="button" onClick={calcular}>x</button>
        <button type="button" onClick={calcular}>/</button>
      </div>
      <h1>{total}</h1>
    </main>
  )
}

export default App
