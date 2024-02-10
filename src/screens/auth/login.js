import React from 'react'
import './login.css'
import { loginEndpoint } from '../../spotify'

export default function Login() {
  return (
    <div className="login-page">
    <img
      src="https://i.postimg.cc/05Bjc9F9/logo.png"
      alt="logo-spotify"
      className="logo"
    />
     <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  )
}
