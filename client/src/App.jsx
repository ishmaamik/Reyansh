import { useState } from 'react'
import Sidebar from './components/Sidebar'
import "./index.css"
import Footer from './components/Footer'
import MainPage from './components/MainPage'
function App() {
  

  return (
    <>
    <div className='App'>
      <Sidebar/>
      <MainPage/>
      <Footer/>
      </div>
    </>
  )
}

export default App
