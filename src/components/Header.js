import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'
import './Header.css'


function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  useEffect(
      ()=>{
          if(location.pathname==="/")
          {
              setActiveTab("Home")
          }
          else if(location.pathname==="/add")
          {
              setActiveTab("AddContact")
          }
          else if(location.pathname==="/about")
          {
              setActiveTab("About")
          }
      }
      ,[location]);
  return (
    <div className='d-flex justify-content-between px-4 pt-2 header'>
        <p className='title'>Contact Manager</p>
        <div className='d-flex'>
            <Link to='/' className='links' style={{textDecoration:"none"}}>
                <button className={`${activeTab==="Home" ? "active": "inactive"}`} onClick={()=>setActiveTab("Home")}>Home</button>
            </Link>
            <Link to='/add' className='links' style={{textDecoration:"none"}}>
                <button className={`${activeTab==="AddContact" ? "active": "inactive"}`} onClick={()=>setActiveTab("AddContact")}>Add Contact</button>
            </Link>
            <Link to='/about' className='links' style={{textDecoration:"none"}}>
                <button className={`${activeTab==="About" ? "active": "inactive"}`} onClick={()=>setActiveTab("About")}>About</button>
            </Link>
        </div>
    </div>
  )
}

export default Header