import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ShoppingCartProvider } from './context/shoppingCartContext'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'
import Navbar from './components/Navbar'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <ShoppingCartProvider>
      <Navbar/>
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/store' element={<Store/>}/>
        </Routes>
      </Container>
    </ShoppingCartProvider>
</>
  )
}

export default App
