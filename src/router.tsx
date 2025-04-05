import {Routes, Route} from 'react-router-dom'
import IndexPage from './Views/IndexPage'
import Layout from './layouts/Layout'
import TopPage from './Views/TopPage'
import PinesPage from './Views/PinesPage'
import LlaverosPage from './Views/LlaverosPage'
import LoginPage from './Views/LoginPage'
import RegistroPage from './Views/RegistroPage'
import CarritoPage from './Views/CarritoPage'
import ProtectedRoute from './components/ProtectedRoute'
import BlogPage from './Views/BlogPage'
import CompraPage from './Views/CompraPage'
import DetallesPage from './Views/DetallesPage'
import PagoExitoso from './Views/PagoExitoso'

export default function AppRouter() {
  return (
    
      <Routes>
        <Route path="/Login" element={ <LoginPage />} />
        <Route path="/Registro" element={<RegistroPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage /> } index />
          <Route path="/Top" element={<TopPage />} />
          <Route path="/Pines" element={<PinesPage />} />
          <Route path="/Llaveros" element={<LlaverosPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Carrito" element={<CarritoPage />} />
          <Route path="/Compra" element={<CompraPage />} />
          <Route path="/Detalles/:id" element={<DetallesPage />} />
          <Route path="/pago-exitoso" element={<PagoExitoso />} />
          <Route path="/pago-error" element={<PagoExitoso />} />
          <Route path="/pago-pendiente" element={<PagoExitoso />} />
        </Route>
      </Routes>
  )
}