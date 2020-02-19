import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  
  login = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/users', this.state)
    .then(result => {
      if(result.data) this.props.auth.login()
    })
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    return (
      <div className="login-comp generic-comp">
        <div className="bg"></div>
        <h2>Hackathon</h2>
        <div className="usr-pass-container">
          <input name="username" value={this.state.username} type="text" placeholder="Username" onChange={this.onChange}/>
          <input name="password" value={this.state.password} type="password" placeholder="Password" onChange={this.onChange}/>
        </div>
        <button onClick={this.login}>Login</button>
        <div className="signup-caption">New to the hackathon? <Link to='/signup'>Sign up</Link></div>
      </div>
    )
  }
}
export default Login