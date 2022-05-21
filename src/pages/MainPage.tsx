import React, { FC } from "react";
import PageTemplate from "@Components/PageTemplate";
import FolderList from "@Components/folder/FolderList";

const MainPage: FC = () => {
  return (
    <PageTemplate>
      <FolderList />
    </PageTemplate>
  )
}

export default MainPage;