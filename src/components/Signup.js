import React, { useState } from 'react';
import UserPool from '../UserPool';
import {Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {console.error(err)};
      console.log(data);
      navigate('/login')

    });
  };

  return (

    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={onSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign UP</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email} onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"

              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register 
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
          <label className="label">
                 Already Registered? <Link className="label-text-alt link link-hover" to={'/login'}> Login</Link>
          </label>
          </p>
        </div>
      </form>
    </div>




    // <div>
    //   <Container>
    //   <h3> Register as user </h3>
    //   <form onSubmit={onSubmit}>
    //     <input
    //       value={email}
    //       onChange={event => setEmail(event.target.value)}
    //     />

    //     <input
    //       value={password}
    //       onChange={event => setPassword(event.target.value)}
    //     />

    //     <button type='submit'>Signup</button>
    //   </form>
    //   <label className="label">
    //               <Link className="label-text-alt link link-hover" to={'/'}> sign up</Link>
    //   </label>

    //   </Container>
    // </div>
    
  );
};