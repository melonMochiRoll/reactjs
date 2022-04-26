import { Box, Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth='sm' sx={{
      width: 300,
      p: 10,
      mx: 'auto',
      my: 0
      }}>
        <Box sx={{
          textAlign: 'center'
        }}>
          <div>존재하지 않는 URL입니다.</div>
          <Button
            variant="contained"
            component={Link}
            to={'/'}
            sx={{ mt: 3 }}>홈으로</Button>
        </Box>
    </Container>
  )
}

export default NotFound;