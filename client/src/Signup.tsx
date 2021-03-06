import React, { useState } from 'react';
import axios from 'axios';

import { ISetToken } from './react-app-env';

const Signup: React.FC<ISetToken> = ({setToken, history}) => {
  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    axios.post('/auth/signup', {
      name: name,
      email: email,
      password: password
    }).then(res => {
      if (res.data.type === 'error') {
        setName('');
        setEmail('');
        setPassword('');
      } else {
        localStorage.setItem('mernToken', res.data.token);
        setToken(res.data.token);
      }
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      history.push('/')
    })
  }

  return(
    <div className="signup-in">
      <h3>Create a new account:</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name="name"
          placeholder="Enter your name..."
          onChange={handleNameChange}
          value={name} /><br />
        <input type="email"
          name="email"
          placeholder="Enter your email..."
          onChange={handleEmailChange}
          value={email} /><br />
        <input type="password"
          name="password"
          placeholder="Enter your password..."
          onChange={handlePasswordChange}
          value={password} /><br />
        <input type="submit" value="Sign Up!" />
      </form>
    </div>
  )
}

export default Signup;
