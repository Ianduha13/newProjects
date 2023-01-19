import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/store' element={<Store/>}/>
      </Routes>
    </Container>
  )
}

export default App
