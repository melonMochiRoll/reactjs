import styled from "@emotion/styled";

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