import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Components/Layout'
import Food from './Pages/Food'
import Drinks from './Pages/Drinks'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>} />
        <Route path='/food-menu' element={<Layout><Food/></Layout>} />
        <Route path='/drinks-menu' element={<Layout><Drinks/></Layout>} />
    </Routes>
    </>
  )
}

export default App
