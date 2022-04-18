import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from '@Pages/LogIn/LogInContainer';
import Join from '@Pages/Join/JoinContainer';
import NotFound from '@Pages/NotFound';
import { ThemeProvider } from '@mui/material/styles';
import { materialGlobalTheme } from '@Src/styles/materialGlobalTheme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

render(
<BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={materialGlobalTheme}>
      <Routes>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/join" element={<Join />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </ThemeProvider>
  </QueryClientProvider>
</BrowserRouter>,
document.querySelector('#app'));