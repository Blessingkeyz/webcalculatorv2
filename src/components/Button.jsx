import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Button = ({ text, bgcolor, color, label, handleClick }) => {
    return (
        <Box
            w={['71.75px', '170px']}
            h={'72px'}
            bgColor={bgcolor}
            borderRadius={'24px'}
            label={label}
            display={'flex'}
            onClick={handleClick}
        // _hover={{ opacity: '0.7' }}
        ><Text
            pos='relative'
            justifyContent={'center'}
            alignItems={'center'}
            w={'48px'}
            h={'48px'}
            fontFamily={'poppins'}
            mx='auto'
            my='auto'
            fontWeight={"400"}
            display={'flex'}
            fontSize={"32px"}
            lineHeight={"40px"}
            color={color}
            textAlign={'Center'}
        >{text}</Text></Box>
    )
}

export default Button