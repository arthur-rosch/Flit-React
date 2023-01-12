import { ChangeEvent, useState, MouseEvent, useEffect, InvalidEvent } from 'react'
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
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo e obrigatório");
  }

  useEffect(() => {
    setLista([...lista, total])
  }, [total])

  return (
    <main>
      <form action="">
        <div>
          <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPrimeiroValor(e.target.value)} onInvalid={handleNewCommentInvalid} required />
          <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSegundoValor(e.target.value)} onInvalid={handleNewCommentInvalid} required />
        </div>
        <div>
          <Button operador='+' onClick={calcular} />
          <Button operador='-' onClick={calcular} />
          <Button operador='x' onClick={calcular} />
          <Button operador='/' onClick={calcular} />
        </div>
        <Result Result={lista} />
      </form>
    </main>
  )
}

export default App