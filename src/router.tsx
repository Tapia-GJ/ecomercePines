import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexPage from './Views/IndexPage'
import Layout from './layouts/Layout'
import TopPage from './Views/TopPage'
import PinesPage from './Views/PinesPage'
import LlaverosPage from './Views/LlaverosPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/Top" element={<TopPage />} />
          <Route path="/Pines" element={<PinesPage />} />
          <Route path="/Llaveros" element={<LlaverosPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}