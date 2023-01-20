import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={"So pode ser acessada apos login"} />
    </Routes>
  )
}