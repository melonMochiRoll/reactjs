import { CircularProgress, Collapse, Typography } from "@mui/material";
import { Tag } from "@Typings/model";
import React, { FC, useEffect } from "react";
import styled from '@emotion/styled';
import SearchTab from "./SearchTab";

interface Props {
  keyword: string;
  data: Tag[];
  loading: boolean;
  onClose: () => void;
}

const SearchResult: FC<Props> = ({
  keyword,
  data,
  loading,
  onClose,
  }) => {
  const open = Boolean(keyword);
  const empty = data?.length === 0;

  return (
    <Collapse
      in={open}>
      <ListBox>
        {data?.map((ele: Tag, i: number) => {
          return <SearchTab key={i} tag={ele} onClose={onClose} />
        })}
        {!data && loading && <CircularProgress />}
        {empty && <Typography>결과를 찾을 수 없습니다.</Typography>}
      </ListBox>
    </Collapse>
  )
};

export default SearchResult;

const ListBox = styled.div`
  position: absolute;
  display: flex;
  left: -50px;
  width: 300px;
  height: 300px;
  padding: 10px 0;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  background-color: #fffcf9;
  overflow: auto;

  a {
    width: 100%;
    color: inherit;
    text-decoration: none;
  }
`;