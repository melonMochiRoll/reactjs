import LogInContainer from "@Components/logIn/LogInContainer";
import { MainBackground, MainBox } from "@Components/PageTemplate";
import React, { FC } from "react";

const LogInPage: FC = () => {
  return (
    <MainBackground>
      <MainBox>
        <LogInContainer />
      </MainBox>
    </MainBackground>
  );
}

export default LogInPage;