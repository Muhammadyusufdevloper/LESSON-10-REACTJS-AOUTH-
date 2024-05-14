import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Single from './pages/single'
import Login from './pages/login'
import Auth from './pages/auth'
import Header from './layout/header'
import Footer from './layout/footer'
import Admin from './pages/admin'
import NotFound from './pages/notFound'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/single/:id' element={<Single/>} />
          <Route path='/' element={<Auth/>}>
            <Route path='/admin' element={<Admin/>} />
          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App