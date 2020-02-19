import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Login extends Component {
  
  login = () => {
    this.props.auth.login()
  }
  
  render() {
    return (
      <div className="login-comp generic-comp">
        <div className="bg"></div>
        <h2>Hackathon</h2>
        <div className="usr-pass-container">
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
        </div>
        <button onClick={this.login}>Login</button>
        <div className="signup-caption">New to the hackathon? <Link to='/signup'>Sign up</Link></div>
      </div>
    )
  }
}
export default Login