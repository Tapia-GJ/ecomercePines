import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexPage from './Views/IndexPage'
import Layout from './layouts/Layout'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}