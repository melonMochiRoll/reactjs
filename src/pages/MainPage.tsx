import { Box } from "@mui/material";
import React, { FC } from "react";
import { MainBackground } from "@Src/components/MainLayout";
import Header from "@Src/components/Header";

const MainPage: FC = () => {
  return (
    <MainBackground>
      <Header />

      <Box sx={{
        display: 'flex',
        maxWidth: 700,
        height: 500,
        marginX: 'auto',
        marginY: 0,
        mt: 3,
        backgroundColor: '#fffcf9',
        }}>
          MainBox
      </Box>
    </MainBackground>
  )
}

export default MainPage;