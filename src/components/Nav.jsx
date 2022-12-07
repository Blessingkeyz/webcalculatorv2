import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import Logo from '../assets/images/logo.png'
import React from 'react'

const Nav = () => {
    // drawer
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex justifyContent={'space-between'}
            bgColor={'red.100'} >
            <Flex>
                <Image src={Logo} h={10} w={10} alt={'logo'} />
                < Text
                    fontSize={'1.5em'}
                    color={'white'}
                    p={'2px 5px'}
                    bgColor={'green.700'}
                    border={'solid 2px white'}>
                    Todo HANDLER
                </Text>
            </Flex>

            {/* drawer */}
            <Button
                backgroundColor={'green'}
                color={'white'}
                onClick={onOpen}>
                Menu
            </Button>

            <Drawer
                placement='right'
                onClose={onClose}
                isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader
                        borderBottomWidth='1px'>
                        Basic Drawer
                    </DrawerHeader>
                    <DrawerBody>
                        <p>hwfr</p>
                        <p>hwfr</p>
                        <p>hwfr</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </Flex>
    )
}

export default Nav