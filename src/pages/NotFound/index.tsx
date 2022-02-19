import { Button, Container } from '@Src/styles/common';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container>
      <div>존재하지 않는 URL입니다.</div><br/>
      <Link to={'/'}>
        <Button>홈으로</Button>
      </Link>
    </Container>
  )
}

export default NotFound;