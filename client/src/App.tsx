import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

import Navigation from './Navigation';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';

import { IUser } from './react-app-env';

const App: React.FC = () => {
  const [ user, setUser ] = useState<IUser>({} as IUser);
  const [ token, setToken ] = useState<string>('');

  function logout(): void {
    localStorage.removeItem('mernToken');
    setToken('');
    setUser({} as IUser);
  }

  // check for token
  useEffect(() => {
    var token = localStorage.getItem('mernToken');
    if (!token || token === 'undefined' || token === '') {
      localStorage.removeItem('mernToken');
      setToken('');
      setUser({} as IUser);
    } else {
      axios.post('/auth/me/from/token', {token})
        .then(res => {
          if (res.data.type === 'error') {
            localStorage.removeItem('mernToken');
            setToken('');
            setUser({} as IUser);
          } else {
            localStorage.setItem('mernToken', res.data.token);
            setToken(res.data.token);
            setUser(res.data.user);
          }
        })
    }
  }, [token])

  return (
    <Router>
      { token.length > 0 ? <>
        <Navigation logout={logout}/>
        <Route path='/' render={() => <Profile userId={user._id} /> } />
      </> : <>
        <Route exact path='/' render={(props) => <Login setToken={setToken} {...props} /> } />
        <Route path='/signup' render={(props) => <Signup setToken={setToken} {...props} /> } />
      </> }
    </Router>
  );
}

export default App;
