import React from 'react';

import {
  Button,
  FormLabel,
  FormControl,
  Text,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';

const FormPlaylist = ({
  handleSubmitPlaylist,
  handleChange,
  title,
  description,
}) => {
  const isError = title === '';
  return (
    <form
      onSubmit={handleSubmitPlaylist}
      style={{
        border: '2px solid black',
        padding: '1.5rem',
        borderRadius: '1rem',
        backgroundColor: '#252836',
        maxWidth: '800px',
      }}
    >
      <FormControl isInvalid={isError}>
        <Text fontSize="3xl" fontWeight="bold">
          Create Playlist
        </Text>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem',
            marginTop: '1rem',
          }}
        >
          <FormLabel fontSize="xl" mb="1rem">
            Title
          </FormLabel>
          <Input
            backgroundColor="gray.800"
            type="text"
            name="title"
            placeholder="Playlist Title..."
            onChange={handleChange}
            value={title}
            border="none"
          />
          {isError && <FormErrorMessage>Title is required</FormErrorMessage>}
        </div>
      </FormControl>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '1rem',
        }}
      >
        <FormLabel fontSize="xl" mb="1rem">
          Description
        </FormLabel>
        <Input
          type="text"
          backgroundColor="gray.800"
          border="none"
          name="description"
          value={description}
          placeholder="Playlist Description..."
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        className="btn-logout"
        colorScheme="green"
        size="md"
        height="35px"
        width="100px"
        mt="1.5rem"
      >
        Save
      </Button>
    </form>
  );
};

export default FormPlaylist;
