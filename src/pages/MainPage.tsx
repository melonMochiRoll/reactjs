import React, { FC } from "react";
import Header from "@Components/Header";
import MainLayout from "@Components/MainLayout";
import { MainBackground } from "@Styles/common";

const MainPage: FC = () => {
  return (
    <MainBackground>
      <Header />
      <MainLayout />
    </MainBackground>
  )
}

export default MainPage;