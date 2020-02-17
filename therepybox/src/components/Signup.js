import React from 'react'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div className="signup-comp generic-comp">
      <div className="bg"></div>
      <h2>Hackathon</h2>
      <form>
        <div className="usr-pass-container">
          <input type="text" placeholder="Username"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input type="password" placeholder="Confirm password"/>
        </div>
        <input id="add-picture" type="file" accept="image/*"/>
        <label htmlFor="add-picture" className="add-picture-label">Add picture</label>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Signup