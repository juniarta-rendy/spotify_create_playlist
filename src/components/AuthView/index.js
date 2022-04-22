import React from 'react';
import SearchBox from '../SearchBox';
import { Text, Button } from '@chakra-ui/react';
import './style.css';

const AuthView = ({
  handleChange,
  handleSubmit,
  handleLogout,
  user,
  searchInput,
}) => {
  return (
    <div>
      <div className="search-container">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" flex="1">
          Welcome {user}, Search Your Favorite Songs
        </Text>
        <Button
          colorScheme="red"
          size="lg"
          height="50px"
          width="120px"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>

      <SearchBox
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchInput={searchInput}
      />
    </div>
  );
};

export default AuthView;
