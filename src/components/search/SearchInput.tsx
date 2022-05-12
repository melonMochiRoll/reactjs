import React, { FC, useEffect, useState } from "react";
import { InputTextField } from "../InputTextField";
import { debounce } from 'lodash';
import useInput from "@Src/hooks/useInput";

interface Props {
  onSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput: FC<Props> = ({ onSearch }) => {
  const [ keyword, onChangeKeyword ] = useInput('');

  const debouncedSearch = debounce(
    (value: string) => {
      onSearch(value);
    }, 300);

  useEffect(() => {
    debouncedSearch(keyword);
  }, [ debouncedSearch, keyword ]);

  return (
    <InputTextField
      label='검색'
      name='mainSearch'
      value={keyword}
      onChange={onChangeKeyword}>
    </InputTextField>
  )
}

export default SearchInput;