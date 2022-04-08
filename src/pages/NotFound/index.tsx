import { Button } from '@mui/material';
import { Container } from '@Src/styles/common';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container>
      <div>존재하지 않는 URL입니다.</div>
      <Button
        variant="contained"
        component={Link}
        to={'/login'}
        sx={{ mt: 3 }}>홈으로</Button>
    </Container>
  )
}

export default NotFound;