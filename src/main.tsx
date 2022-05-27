import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { materialGlobalTheme } from '@Styles/materialGlobalTheme';
import { QueryClient, QueryClientProvider } from 'react-query';
import Core from '@Components/Core';
import MainPage from '@Pages/MainPage';
import LogInPage from '@Pages/LogInPage';
import JoinPage from '@Pages/JoinPage';
import NotFound from '@Pages/NotFound';
import MemoPage from '@Pages/MemoPage';

const queryClient = new QueryClient();

render(
<BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={materialGlobalTheme}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/memo" element={<MemoPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Core />
    </ThemeProvider>
  </QueryClientProvider>
</BrowserRouter>,
document.querySelector('#app'));