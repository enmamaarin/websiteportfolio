import './index.css'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Certificates from './pages/Certificates'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificates" element={<Certificates />} />
    </Routes>
  )
}

export default App
