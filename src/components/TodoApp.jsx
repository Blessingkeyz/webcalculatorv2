import React, { useState } from 'react'
import {
    VStack, FormControl,
    Input, Flex, Button, Heading, Tag
} from '@chakra-ui/react'
import TodoList from './TodoList';

const TodoApp = () => {
    const [todo, setTodo] = useState('');
    const [todoArray, setTodoArray] = useState([]);

    const handleChange = (e) => {
        const todoName = e.target.value;
        setTodo(todoName);
    };

    const handleClick = () => {
        const todoItem = {
            id: new Date().getMilliseconds(),
            todo: todo
        };
        todo
            ? setTodoArray((prev) => [...prev, todoItem])
            : alert('Please fill in a Todo');
        setTodo('')
    };
    const handleDelete = (id) => {
        const newTodoList =
            todoArray.filter((item) => item.id !== id);
        setTodoArray(newTodoList);
    }
    const renderList =
        todoArray?.map((item, index) => (<TodoList
            item={item}
            key={index}
            handleDelete={handleDelete} />));

    return (
        <VStack
            height={'100vh'}
            bgColor={'red.100'}
            justify={'center'}
            align={'center'}
            padding={'200px 20px'} >

            <Heading>
                TODO HANDLER
                <Tag
                    fontSize={{ base: 0, sm: '25%', md: '25%', lg: '50%' }}
                    bgColor={{ base: 'transparent', sm: 'green', md: 'green' }}
                    fontFamily={'cursive'}
                    // bgColor={'green'}
                    color={'white'}>
                    designed by Blessingkeyz
                </Tag>
            </Heading>

            <Flex
                width={'80%'}
                margin={'100px auto'}>
                <FormControl>
                    <Input
                        bgColor={'white'}
                        placeholder={'Add Todo'} value={todo}
                        onChange={(e) => handleChange(e)} />
                </FormControl>
                <Button
                    colorScheme={'facebook'}
                    _hover={{ backgroundColor: "green" }}
                    onClick={handleClick}>
                    Add Todo
                </Button>
            </Flex>

            {renderList}
        </VStack>
    )
}

export default TodoApp;