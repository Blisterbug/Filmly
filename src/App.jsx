import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../src/App.css'
import Home from './layouts/Home'
import Movies from './layouts/Movies'
import SignIn from './components/SignIn'
import MobileMovies from './layouts/MobileMovies'
import MobileSignIn from './components/MobileSignIn'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/mobileMovies" element={<MobileMovies />} />
        <Route path="/mobileSignin" element={<MobileSignIn/>} />
      </Routes>

    </>
  )
}

export default App