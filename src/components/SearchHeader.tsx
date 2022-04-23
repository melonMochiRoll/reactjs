import React, { FC } from "react";
import styled from '@emotion/styled';

const SearchHeader: FC = () => {
  return (
    <Box>

    </Box>
  )
}

export default SearchHeader;

const Box = styled.div`
  display: inline-block;
  margin-top: 80px;
  width: 600px;
  max-width: 700px;
  height: 60px;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  background-color: #fffcf9;
`;