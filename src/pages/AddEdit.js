import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fireDb from "../firebase.js";
import { toast } from "react-toastify";
import './AddEdit.css'

const initialState = {
  name: "",
  email: "",
  contact: "",
};

function AddEdit() {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const { name, email, contact } = state;

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(()=>{
    fireDb.child("contacts").on("value", (snapshot)=>{
      if(snapshot.val() !== null)
      {
        setData({...snapshot.val()});
      }
      else
      {
        setData({});
      }
    });
    return () => {
      setData({})
    };
  }, [id]);

  useEffect(()=>{
    if(id)
    {
      setState({...data[id]})
    }
    else{
      setState({...initialState})
    }
    return()=>{
      setState({...initialState})
    }
  }, [id, data])

  function handleInputChange(e) {
      const {name, value} = e.target;
      setState({...state, [name]:value});
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(!name || !email || !contact)
    {
        toast.error("Please provide value in each input field");
    }
    else{
        if(!id)
        {
          fireDb.child("contacts").push(state, (error) =>{
            if(error)
            {
                toast.error(error);
            }
            else{
                toast.success("Contact added successfully")
            }
        });
        }
        else{
          fireDb.child(`contacts/${id}`).set(state, (error) =>{
            if(error)
            {
                toast.error(error);
            }
            else{
                toast.success("Contact updated successfully")
            }
        });
        }
        setTimeout(() => navigate("/"), 500)
    }
  }
  return (
    <div style={{ marginTop: "50px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <center><label htmlFor="name">Name</label></center>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          value={name || ""}
          onChange={handleInputChange}
        />

        <center><label htmlFor="email">Email</label></center>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={email || ""}
          onChange={handleInputChange}
        />

        <center><label htmlFor="contact">Contact</label></center>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Enter contact"
          value={contact || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value={id? "Update" : "Save"} />
      </form>
    </div>
  );
}

export default AddEdit;
