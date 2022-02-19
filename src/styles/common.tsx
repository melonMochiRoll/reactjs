import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  padding: 30px;
`;

export const Form = styled.form`
  text-align: center;
`;

export const Input = styled.input`
  margin: 5px;
  padding: 10px;
  border: 1px solid #8c8c8c;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 18px;

  &::placeholder {
    color: #8c8c8c;
  }
`;

export const Button = styled.button`
  width: 100px;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-weight: 400;
  font-size: 17px;
  border: none;
  border-radius: 14px;
  background-color: #005aff;
  color: #fff;

  &:hover {
    background-color: #2471ff;
  }
`;