import React from "react";
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
      <ToastContainer position="top-center"/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/add' element={<AddEdit/>}/>
        <Route path='/update/:id' element={<AddEdit/>}/>
        <Route path='/view/:id' element={<View/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
