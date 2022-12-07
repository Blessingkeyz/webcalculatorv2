import { Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const TodoList = ({ item, handleDelete }) => {
  const { id } = item;

  return (
    <VStack>
      <Flex
        gap={5}
        alignContent={'center'}
        justifyItems={'center'}
      >
        <Button
          bgColor={'green'}
          color={'white'}>
          {item.todo}
        </Button>

        <Button
          onClick={() => handleDelete(id)}
          bgColor={'red'}
          color={'white'}>
          Delete
        </Button>
      </Flex>

    </VStack>
  )
}

export default TodoList