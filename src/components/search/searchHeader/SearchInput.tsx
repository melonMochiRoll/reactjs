import React, { FC, useCallback, useEffect } from "react";
import { InputTextField } from "@Components/InputTextField";
import { debounce } from 'throttle-debounce';

interface Props {
  keyword: string;
  onChange: (e: any) => void;
  onSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC<Props> = ({
  keyword,
  onChange,
  onSearch,
  }) => {
  const debouncedSearch = useCallback(
    debounce(500, (keyword: any) => {
      onSearch(keyword);
    }), [onSearch]);

  useEffect(() => {
    if (keyword) {
      debouncedSearch(keyword);
    }
  }, [keyword, debouncedSearch]);

  return (
    <InputTextField
      label='검색'
      name='tagSearch'
      value={keyword}
      onChange={onChange}>
    </InputTextField>
  )
}

export default SearchInput;