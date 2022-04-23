import React, { FC } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Core: FC = () => {
  return (
    <>
      <ToastContainer 
        transition={Bounce}
        position='top-center'
        theme='colored'
        autoClose={2000}
        pauseOnHover
        />
    </>
  )
}

export default Core;