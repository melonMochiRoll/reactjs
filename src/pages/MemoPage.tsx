import MemoList from "@Components/memo/MemoList";
import PageTemplate from "@Components/PageTemplate";
import React, { FC } from "react";

const MemoPage: FC = () => {
  return (
    <PageTemplate>
      <MemoList />
    </PageTemplate>
  );
}

export default MemoPage;