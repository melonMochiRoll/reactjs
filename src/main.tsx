import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import LogIn from './pages/LogIn';
import Join from './pages/Join';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3005";

render(
<BrowserRouter>
  <Routes>
    <Route path="/login" element={<LogIn />}/>
    <Route path="/join" element={<Join />}/>
  </Routes>
</BrowserRouter>,
document.querySelector('#app'));