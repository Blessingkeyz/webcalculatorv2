import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (

        <Flex
            height={'100%'}
            justify={'center'}
            bgColor={'green'} >

            <Text
                fontSize={'1.5em'}
                color={'white'}>
                copyright Blessingkeyz 2002

            </Text>
        </Flex >
    )
}

export default Footer