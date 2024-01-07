import React, { useEffect, useState } from 'react'
import Navbar from './layout/header/Navbar'
import './assets/styles/Main.scss'
import { Route, Routes } from 'react-router-dom'
import { routes } from './helpers/routes'
import { ThreeDots } from 'react-loader-spinner'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  },[])

  return (
    
    <div className='wrapper'>
      {

        loading ? 
        <div className='loader'>
          <ThreeDots 
            height="90" 
            width="90" 
            radius="9"
            color="#FFD700" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />

        </div>
        :
      <div className="">
        <Navbar/>
        <Routes>
          {
          routes.map((item) => (
            <Route path={item.path} element={item.element} key={item.path}/>
          ))
          }
        </Routes>
      </div>
      }
    </div>
    
  )
}

export default App