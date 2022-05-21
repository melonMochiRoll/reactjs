import JoinContainer from "@Components/join/JoinContainer";
import { MainBackground, MainBox } from "@Components/PageTemplate";
import React, { FC } from "react";

const JoinPage: FC = () => {
  return (
    <MainBackground>
      <MainBox>
        <JoinContainer />
      </MainBox>
    </MainBackground>
  );
}

export default JoinPage;