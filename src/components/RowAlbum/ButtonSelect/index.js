import React from 'react';
import { Button } from '@chakra-ui/react';

export const ButtonSelect = ({ isSelected, onClick, id }) => {
  return (
    <Button
      colorScheme={isSelected ? 'red' : 'green'}
      size="sm"
      height="30px"
      width="80px"
      textAlign='center'
      onClick={onClick}
      id={id}
    >
      {isSelected ? 'Unselect' : 'Select'}
    </Button>
  );
};
