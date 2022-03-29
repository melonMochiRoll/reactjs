import styled from "@emotion/styled";

interface ButtonProps {
  long?: boolean,
}

export const Container = styled.div`
  margin: 0 auto;
  padding: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Input = styled.input`
  margin: 5px;
  padding: 10px;
  border: 1px solid #8c8c8c;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 18px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #8c8c8c;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: ${props => props.long ? '200px' : '100px'};
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-weight: 400;
  font-size: 17px;
  border: none;
  background-color: #005aff;
  color: #fff;

  &:hover {
    background-color: #2471ff;
  }
`;

export const SuccessMessage = styled.span`
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #07a400;
`;

export const ErrorMessage = styled.span`
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #cd002a;
`;