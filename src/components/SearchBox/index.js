import React from 'react';
import './style.css';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBox = ({ handleChange, handleSubmit, searchInput }) => {
  return (
    <InputGroup size="lg" mt="4rem">
      <InputLeftElement
        pointerEvents="true"
        onClick={handleSubmit}
        children={
          <button onClick={handleSubmit}>
            <SearchIcon color="#6C5ECf" />
          </button>
        }
      />
      <Input
        value={searchInput}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        name="searchInput"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        backgroundColor="gray.800"
        border="none"
        width='500px'
      />
    </InputGroup>
  );
};

export default SearchBox;
