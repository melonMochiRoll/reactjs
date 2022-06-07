import PageTemplate from '@Components/PageTemplate';
import SearchResultPage from '@Components/search/SearchResultPage';
import React, { FC } from 'react';

const SearchPage: FC = () => {
  return (
    <PageTemplate>
      <SearchResultPage />
    </PageTemplate>
  );
}

export default SearchPage;