import React from 'react'
import '../src/App.css'
import { Route, Routes } from 'react-router-dom'
import Movies from './layouts/Movies'
import SignIn from './components/SignIn'
import Home from './layouts/Home'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App