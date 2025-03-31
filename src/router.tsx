import {Routes, Route} from 'react-router-dom'
import IndexPage from './Views/IndexPage'
import Layout from './layouts/Layout'
import TopPage from './Views/TopPage'
import PinesPage from './Views/PinesPage'
import LlaverosPage from './Views/LlaverosPage'
import LoginPage from './Views/LoginPage'
import RegistroPage from './Views/RegistroPage'
import ProtectedRoute from './components/ProtectedRoute'

export default function AppRouter() {
  return (
    
      <Routes>
        <Route path="/Login" element={ <LoginPage />} />
        <Route path="/Registro" element={<RegistroPage />} />
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/" element={<IndexPage /> } index />
          <Route path="/Top" element={<TopPage />} />
          <Route path="/Pines" element={<PinesPage />} />
          <Route path="/Llaveros" element={<LlaverosPage />} />
        </Route>
      </Routes>
  )
}