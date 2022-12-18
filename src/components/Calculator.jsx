import { Box, HStack, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import BgAnimation from './BackgroundAnimation'
import Button from './Button'
import lighton from '../assets/images/lighton.png'
import lightoff from '../assets/images/lightoff.png'
import evaluator from 'evaluator.js'

const Calculator = () => {

    const [calcval, setCalcval] = useState(
        {
            question: '',
            answer: ''
        }
    );
    console.log(calcval);
    const handleClick = (event) => {
        const value = event.target.innerText;
        console.log(value);
        switch (value) {
            case '=': {
                if (calcval.question !== '') {
                    var ans = '0';
                    console.log(ans);
                    try {
                        ans = evaluator(calcval.question)
                    }
                    catch (err) {
                        setCalcval({ answer: "Math Error" });
                    }
                    if (ans === undefined)
                        setCalcval({ answer: "Math Error" });
                    else
                        setCalcval({ answer: ans, question: '' });
                    break;

                }
                break;
            }
            case 'C': {
                setCalcval({ question: '', answer: '' });
                break;
            }
            case 'DEL': {
                var str = calcval.question;
                str = str.substr(0, str.length - 1);
                setCalcval({ question: str });
                break;
            }
            default: {
                setCalcval({ question: calcval.question += value })
                break;
            }
        }
    }

    // color codes
    const [dark, setDark] = useState(false);
    const bgcol = () => dark ? '#4E505F' : '#D2D3DA';
    const bgcol2 = () => dark ? '#2E2F38' : '#FFFFFF';
    const fontcol = () => !dark ? '#000000' : '#FFFFFF';
    const darkmode = () => setDark((prev) => !prev)

    return (
        <Box
            w={'100%'}
            h={'100%'}
            background={!dark ? '#FFFFFF' : ' #2E2F38'}
        >
            <Box
                pos={'relative'}
                w={['375px', '768px']}
                h={['812px', '812px']}
                alignContent='center'
                justifyContent={'center'}
                justifyItems='center'
                display={'flex'}
                mx={"auto"}
                background={!dark ? '#F1F2F3' : ' #17171C'}
                cursor='pointer'
            >
                <Box w={['375px', '768px']} mx='auto'>
                    {/* <BgAnimation /> */}
                </Box>

                <Box
                    pos={'absolute'}
                    w={'72px'}
                    h={'32px'}
                    borderRadius={'16px'}
                    alignContent='center'
                    justifyContent={'center'}
                    justifyItems='center'
                    display={'flex'}
                    mt={'60px'}
                    mx={"auto"}
                >
                    <Image
                        src={dark ? lightoff : lighton}
                        alt='eye'
                        onClick={darkmode}
                    />
                </Box>

                <Box
                    pos={'absolute'}
                    w={['335px', '728px']}
                    h={['599px', '599px']}
                    alignContent='center'
                    justifyContent={'center'}
                    justifyItems='center'
                    display={'flex'}
                    mt={['147px', '147px']}
                    mx={"auto"}
                >
                    <Box
                        pos={'absolute'}
                        w={['335px', '728px']}
                        h={'47px'}
                        alignContent='center'
                        justifyContent={'right'}
                        justifyItems='center'
                        display={'flex'}
                        mx={"auto"}
                    >
                        <Input
                            w={['335px', '728px']}
                            h={'47px'}
                            fontFamily={'poppins'}
                            fontWeight={"300"}
                            border='none'
                            display={'flex'}
                            fontSize={"40px"}
                            lineHeight={"47px"}
                            color={fontcol}
                            opacity='0.4'
                            textAlign={'right'}
                            type="text" readOnly value={calcval.question}
                        />
                    </Box>
                    <Box
                        pos={'absolute'}
                        w={['335px', '728px']}
                        h={'96px'}
                        alignContent='center'
                        justifyContent={'right'}
                        justifyItems='center'
                        display={'flex'}
                        mt={'63px'}
                        mx={"auto"}
                    >
                        <Input
                            w={['335px', '728px']}
                            h={'96px'}
                            border='none'
                            fontFamily={'poppins'}
                            fontWeight={"300"}
                            display={'flex'}
                            fontSize={"96px"}
                            lineHeight={"96px"}
                            color={fontcol}
                            textAlign={'right'}
                            type="text" readOnly value={calcval.answer}
                        />
                    </Box>

                    {/* row1 */}
                    <HStack
                        pos={'absolute'}
                        w={['335px', '728px']}
                        h={'72px'}
                        justifyContent={'space-between'}
                        display={'flex'}
                        mt={'175px'}
                    >
                        <Button
                            handleClick={handleClick}
                            text='C'
                            color={fontcol}
                            bgcolor={bgcol}
                        />
                        <Button
                            handleClick={handleClick}
                            text='/'
                            color={fontcol}
                            bgcolor={bgcol}
                        />
                        <Button
                            handleClick={handleClick}
                            text='%'
                            color={fontcol}
                            bgcolor={bgcol}
                        />
                        <Button
                            handleClick={handleClick}
                            text='+'
                            color={'#FFFFFF'}
                            bgcolor='#4B5EFC'
                        />
                    </HStack>

                    {/* row2 */}
                    <HStack
                        pos={'absolute'}
                        w={['335px', '728px']}
                        h={'72px'}
                        justifyContent={'space-between'}
                        display={'flex'}
                        mt={'263px'}
                    >
                        <Button
                            handleClick={handleClick}
                            text='7'
                            label={'7'}
                            color={fontcol}
                            bgcolor={bgcol2}
                        />
                        <Button
                            handleClick={handleClick}
                            text='8'
                            color={fontcol}
                            bgcolor={bgcol2}
                        />
                        <Button
                            handleClick={handleClick}
                            text='9'
                            color={fontcol}
                            bgcolor={bgcol2}
                        />
                        <Button
                            handleClick={handleClick}
                            text='*'
                            color={'#FFFFFF'}
                            bgcolor='#4B5EFC'
                        />
                    </HStack>

                    {/* row3 */}
                    <HStack
                        pos={'absolute'}
                        w={['335px', '728px']}
                        h={'72px'}
                        justifyContent={'space-between'}
                        display={'flex'}
                        mt={'351px'}
                    >
                        <Button
                            handleClick={handleClick}
                            text='4'
                            color={fontcol}
                            bgcolor={bgcol2}
                        />
                        <Button
                            handleClick={handleClick}
                            text='5'
                            color={fontcol}
                            bgcolor={bgcol2}
                        />
                        <Button
                            handleClick={handleClick}
                            text='6'
                            color={fontcol}
                            bgcolor={bgcol2}
                        />
                        <Button
                            handleClick={handleClick}
                            text='-'
                            color={'#FFFFFF'}
                            bgcolor='#4B5EFC'
                        />
                    </HStack>

                    {/* row4 */}
                    <HStack
                        pos={'absolute'}
                        w={['335px', '728px']}
                        h={'72px'}
                        justifyContent={'space-between'}
                        display={'flex'}
                        mt={'439px'}
                    >
                        <Button
                            handleClick={handleClick}
                            text='1'
                            color={fontcol}
                            bgcolor={bgcol2}
                        />
                        <Button
                            handleClick={handleClick}
                            text='2'
                            color={fontcol}
                            bgcolor={bgcol2}
                        />
                        <Button
                            handleClick={handleClick}
                            text='3'
                            color={fontcol}
                            bgcolor={bgcol2}
                        />
                        <Button
                            handleClick={handleClick}
                            text='+'
                            color={'#FFFFFF'}
                            bgcolor='#4B5EFC'
                        />
                    </HStack>

                    {/* row 5 */}
                    <HStack
                        pos={'absolute'}
                        w={['335px', '728px']}
                        h={'72px'}
                        justifyContent={'space-between'}
                        display={'flex'}
                        mt={'527px'}
                    >
                        <Button
                            handleClick={handleClick}
                            text='.'
                            color={fontcol}
                            bgcolor={bgcol2}
                        />
                        <Button
                            handleClick={handleClick}
                            text='0'
                            color={fontcol}
                            bgcolor={bgcol2}
                        />
                        <Button
                            handleClick={handleClick}
                            text='DEL'
                            color={fontcol}
                            bgcolor={bgcol2}
                        />
                        <Button
                            handleClick={handleClick}
                            text='='
                            color={'#FFFFFF'}
                            bgcolor='#4B5EFC'
                        />
                    </HStack>
                </Box>
            </Box>
        </Box>
    )
}

export default Calculator