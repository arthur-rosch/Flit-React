import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { MLContextProvider } from './Context/context'

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MLContextProvider>
        <Router />
      </MLContextProvider>
    </BrowserRouter>
  )
}
