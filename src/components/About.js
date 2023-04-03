import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import {Link,useNavigate} from 'react-router-dom';
import logo from "./layout/lam1.png"



export default function About() {
  
  
  
    
  

  return (
    <div >
      
        <Container>
        {/* <div>

          
          <a >
            <img src={logo} width="150" height="100" alt=""/>
            Lamine Geordan Sunga Kouangue
          </a>
          
        </div> */}
        <div>
          <h3>Log in or create a user to visit features.</h3>
          <ul>
          <li>User name: </li>
          <li>Password:</li>
          
          </ul>

        </div>
        </Container>

      
    </div>
  );
};