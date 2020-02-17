import React from 'react';
import { Connection } from '../mysql.js'
import {Link} from 'react-router-dom'

export const all = async () => {
  return new Promise((resolve, reject) => {
    Connection.query('SELECT * from users WHERE user = "Michael"',(err, results) => {
      if(err) return reject(err)
      resolve(results)
    })
  })
}

function Login() {
  return (
    <div className="login-comp generic-comp">
      <div className="bg"></div>
      <h2>Hackathon</h2>
      <form>
        <div className="usr-pass-container">
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
        </div>
        <button>Login</button>
        <div className="signup-caption">New to the hackathon? <Link to='/signup'>Sign up</Link></div>
      </form>
    </div>
  )
}
export default Login