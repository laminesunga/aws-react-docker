import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import {Link,useNavigate} from 'react-router-dom';


import axios from "axios";

import { AccountContext } from './Accounts';

export default function Status() {
  

  const { getSession, logout , curentUser} = useContext(AccountContext);
  const navigate = useNavigate();
  const user = curentUser()
  console.log("current user from status",user)
  const apiUrl = process.env.REACT_APP_APIURL
  
  const [data, setData] = useState(null);
  

  useEffect(() => {

       const loadData = async () =>{
    
        await axios.get(apiUrl+"/data")
        .then( res =>{
          console.log("data from server ",res)
          setData(res.data)
        })
        .catch (err => {
          console.log("error message",err)
          setData( [{ id: 2, userName: 'sunga', other: 'user from json object' }])
        })
  
        }
       
       loadData()

  }, []);
  
  

  return (
    <div >
      
        <Container>
        <div>
          <h3>Welcome User Name: </h3>
          
          <p>{!data ? "Loading..." : 
          (
           <table  className='table'>
            <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>user groupe</th>
            </tr>
            </thead>
            <tbody>

              {data && data.map((data,index)=>(
                <tr key = {index}>
                  <td>{data.id}</td>
                  <td>{data.userName}</td>
                  <td>{data.other}</td>
                </tr>
              ))}
            </tbody>
           </table>
          )
          
          
          }
          </p>

          
        </div>
        </Container>

      
    </div>
  );
};