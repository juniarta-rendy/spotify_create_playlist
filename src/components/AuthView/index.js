import React from 'react';
import SearchBox from '../SearchBox';
import { Text, Button, Box } from '@chakra-ui/react';
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
      <Box fontSize={'2.5rem'} 
      fontWeight={'bold'} 
      color="white" 
      margin='0 0 20px 0' 
      border='1px solid white' 
      width="180px"
      textAlign='center'
      borderRadius='1rem'
      backgroundColor='#1db954'
      >
            C-Play
          </Box>
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
