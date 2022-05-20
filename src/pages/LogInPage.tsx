import LogInContainer from "@Components/logIn/LogInContainer";
import { MainBackground } from "@Styles/common";
import React, { FC } from "react";

const LogInPage: FC = () => {
  return (
    <MainBackground>
      <LogInContainer />
    </MainBackground>
  );
}

export default LogInPage;