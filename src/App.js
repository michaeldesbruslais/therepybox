import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import auth from './components/auth'

const ProtectedRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => {
    if(auth.isAuthenticated) return <Component {... props} />
    else return <Redirect to='/login' />
  }} />
)

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Switch>
          <Route exact path="/login" render={()=><Login auth={auth}/>} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path='/protected' component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App