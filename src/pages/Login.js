import React from 'react'
import './login.module.css'

export default function Login() {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>
        <form>
          <label htmlFor="input-text"></label>
          <input type="text" id='input-text' placeholder='Username or Number' />
          <label htmlFor="input-password"></label>
          <input type="password" placeholder='Your password' id='input-password' />
        </form>
      </div>
    </div>
  )
}
