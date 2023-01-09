import { ChangeEvent, useState, MouseEvent, useEffect } from 'react'
import './App.css'
import { Result } from "../components/Result"
import { Button } from "../components/Button"


function App() {
  const [total, setTotal] = useState(0)
  const [lista, setLista] = useState([])
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
  useEffect(() => {
    setLista([...lista, total])
  }, [total])

  return (
    <main>
      <div>
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setPrimeiroValor(e.target.value)} />
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setSegundoValor(e.target.value)} />
      </div>
      <div>
        <Button operador='+' onClick={calcular} />
        <Button operador='-' onClick={calcular} />
        <Button operador='x' onClick={calcular} />
        <Button operador='/' onClick={calcular} />
      </div>
      <Result Result={lista} />
    </main>
  )
}

export default App
