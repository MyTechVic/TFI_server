import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { setCurrentUser, logoutUser } from './actions/authentication';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from './setAuthToken';
import store from './store';
import './App.css';
import Login from './components/Login/Login';  
import Register from './components/Register/Register';	
import Dashboard from './components/Dashboard/Dashboard';	


// if(localStorage.jwtToken) {
//   setAuthToken(localStorage.jwtToken);
//   const decoded = jwt_decode(localStorage.jwtToken);
//   store.dispatch(setCurrentUser(decoded));

//   const currentTime = Date.now() / 1000;
//   if(decoded.exp < currentTime) {
//     store.dispatch(logoutUser);
//     window.location.href = '/'
//   }
// }

class App extends Component {
  render() {
    return (
<Provider store = { store }>
	<div>
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/reg' component={Register}/> 
        <Route exact path='/Dashboard' component={Dashboard}/>
    </Switch>
	</div>
</Provider>
    );
  }
}

export default App;
