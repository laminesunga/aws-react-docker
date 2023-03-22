import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import {Link,useNavigate} from 'react-router-dom';

import { AccountContext } from './Accounts';

export default function Status() {
  const [status, setStatus] = useState(false);

  const { getSession, logout , curentUser} = useContext(AccountContext);
  const navigate = useNavigate();
  const user = curentUser()
  console.log("current user from status",user)
  
  
    
  

  return (
    <div >
      
        <Container>
        <div>
          <h3>Welcome User Name </h3>
          
        </div>
        </Container>

      
    </div>
  );
};