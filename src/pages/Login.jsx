import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
  const [value, setValue] = useState()
  const [pasword, setPasword] = useState()
  const [page, setPage] = useState(false)

  const login = (e) => {
    if(e.target.value === 'gold'){
      setPage(true)
    } else if(e.target.value === ''){
      setPage(false)
    } else{
      setPage(false)

    }
  }  

  const paswordRender = (e) => {
    if(e.target.value === 'burger'){
      setPasword(true)
    } else{
      setPasword(false)
    }
  }  
  return (
    <div className='login'>
      <div className="login-content">
        <h1 className="login-logo">Gold Burger</h1>
        <div className="login-inputs">
          <input type="text" onChange={login} required value={value} className='login-input' placeholder='login'/>
          <input type="password" onChange={paswordRender} required className='login-input' placeholder='parolingiz'/>
        </div>
        <div className="login-btn">
          <Link to="/admin" className={page & pasword ? 'login-enter active' : "login-enter"}>Kirish</Link>
        </div>
      </div>
    </div>
  )
}

export default Login