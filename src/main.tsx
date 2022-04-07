import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from '@Pages/LogIn';
import Join from '@Pages/Join/JoinContainer';
import NotFound from '@Pages/NotFound';

render(
<BrowserRouter>
  <Routes>
    <Route path="/login" element={<LogIn />}/>
    <Route path="/join" element={<Join />}/>
    <Route element={<NotFound />}/>
  </Routes>
</BrowserRouter>,
document.querySelector('#app'));