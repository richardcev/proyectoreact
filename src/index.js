import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/header/header';
import Login from './Components/users/Login';
import Register from './Components/users/Register';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header/>
  <Routes>
      <Route path='/' element={ <App />}></Route>
      <Route path='/login' element= {<Login />}></Route>
      <Route path='/register' element= {<Register />}></Route>
  </Routes>
  </BrowserRouter>
  
);
