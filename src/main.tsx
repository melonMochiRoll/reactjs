import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import LogIn from '@Pages/LogIn';
import Join from '@Pages/Join';
import NotFound from '@Pages/NotFound';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3005";

render(
<BrowserRouter>
  <Routes>
    <Route path="/login" element={<LogIn />}/>
    <Route path="/join" element={<Join />}/>
    <Route path="/*" element={<NotFound />}/>
  </Routes>
</BrowserRouter>,
document.querySelector('#app'));