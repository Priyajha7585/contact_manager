import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import fireDb from "../firebase.js";
import './View.css';

function View() {
  const [user, setUser] = useState({});
  const {id} = useParams();

  useEffect(()=>{
    fireDb.child(`contacts/${id}`).get().then((snapshot)=>{
      if(snapshot.exists())
      {
        setUser({...snapshot.val()})
      }
      else{
        setUser({})
      }
    });
  },[id])
    return (
    <div style={{marginTop:"50px"}}>
      <div className='card'>
        <div className='card-header'>
          <b><p>User Contact Detail</p></b>
        </div>
        <center>
        <div className='container'>
          <strong>ID : </strong>
          <span>{id}</span>
          <br/>
          <br/>
          <strong>Name : </strong>
          <span>{user.name}</span>
          <br/>
          <br/>
          <strong>Email : </strong>
          <span>{user.email}</span>
          <br/>
          <br/>
          <strong>Contact : </strong>
          <span>{user.contact}</span>
          <br/>
          <br/>
          <Link to="/">
            <button className='btn-goback'>Go Back</button>
          </Link>
        </div>
      </center>
      </div>
    </div>
  )
}

export default View