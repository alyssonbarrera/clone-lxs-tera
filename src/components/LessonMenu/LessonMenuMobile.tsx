import React, { useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegCircle } from 'react-icons/fa';
import { IconButton, useMediaQuery } from '@chakra-ui/react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useRouter } from 'next/router';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, List, ListItem } from '@chakra-ui/react'

type items = {
    presentation: string,
    presentationId: string,
    lessons: string[],
    quiz?: string,
    conclusion: string,
    practice: string,
}

interface LessonMenuProps {
    items: items[];
    currentContent?: (content: any) => void | (() => React.Dispatch<React.SetStateAction<string>>);
    activeContent?: string;
    title: string;
}

export function LessonMenuMobile({ title, activeContent, currentContent = (content) => {}, items }: LessonMenuProps) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLargerLg] = useMediaQuery('(max-width: 1024px)')
    const btnRef = useRef()

    const router = useRouter()

    return (
        <>
            {
                isLargerLg &&
                <>
                    <IconButton colorScheme={"black"} position={"fixed"} top={3} right={4} aria-label='Abrir menu' ref={btnRef} onClick={onOpen}>
                        <AiOutlineMenu size={24} />
                    </IconButton>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton top={4} right={5} width={8} fontSize={15} color={"white"} />
                        <DrawerHeader bgColor={'black'} color={"white"} fontSize={'1xl'} py={5} textTransform={'uppercase'}>{title}</DrawerHeader>

                        <DrawerBody textColor={"gray.50"} bgColor={"gray.700"}>
                                {
                                    items?.map((item) => {
                                        return (
                                            <List key={item.presentationId} spacing={5}>
                                                <ListItem
                                                    onClick={() => {
                                                        currentContent("introduction"); onClose()
                                                    }}
                                                    cursor={"pointer"}
                                                    mt={5} fontSize={14}
                                                    textTransform={"uppercase"}
                                                    display={"flex"}
                                                    gap={2}
                                                    alignItems={"center"}
                                                    textColor={activeContent === "introduction" ? "gray.50" : "gray.100"}
                                                >
                                                    <FaRegCircle size={20} color={ activeContent ? "gray.50" : "gray.100" } />
                                                    {item.presentation}
                                                </ListItem>
                                                {
                                                    item.lessons.map((lesson) => {
                                                        return (
                                                            <ListItem
                                                                key={lesson}
                                                                onClick={() => {
                                                                    currentContent(items[0].lessons); onClose()
                                                                }}
                                                                cursor={"pointer"}
                                                                fontSize={14}
                                                                textTransform={"uppercase"}
                                                                display={"flex"}
                                                                gap={2}
                                                                alignItems={"center"}
                                                                textColor={activeContent == lesson ? "gray.50" : "gray.100"}
                                                            >
                                                                <FaRegCircle size={20} color={ activeContent ? "gray.50" : "gray.100" } />
                                                                {lesson}
                                                            </ListItem>
                                                        )
                                                    })
                                                }
                                                {
                                                    item.quiz &&
                                                    <ListItem
                                                        onClick={() => {
                                                            currentContent('quiz'); onClose()
                                                        }}
                                                        cursor={"pointer"}
                                                        fontSize={14}
                                                        textTransform={"uppercase"}
                                                        display={"flex"}
                                                        gap={2}
                                                        alignItems={"center"}
                                                        textColor={activeContent == "quiz" ? "gray.50" : "gray.100"}
                                                    >
                                                        <FaRegCircle size={20}color={ activeContent ? "gray.50" : "gray.100" } />
                                                        {item.quiz}
                                                    </ListItem>
                                                }
                                                {
                                                    item.practice &&
                                                    <ListItem
                                                        onClick={() => {
                                                            currentContent('practice'); onClose()
                                                        }}
                                                        cursor={"pointer"}
                                                        fontSize={14}
                                                        textTransform={"uppercase"}
                                                        display={"flex"}
                                                        gap={2}
                                                        alignItems={"center"}
                                                        textColor={activeContent == "practice" ? "gray.50" : "gray.100"}
                                                    >
                                                        <FaRegCircle size={20} color={"gray"} />
                                                        {item.practice}
                                                    </ListItem>
                                                }
                                                <ListItem
                                                    onClick={() => {
                                                        currentContent('conclusion'); onClose()
                                                    }}
                                                    cursor={"pointer"}
                                                    fontSize={14}
                                                    textTransform={"uppercase"}
                                                    display={"flex"}
                                                    gap={2}
                                                    alignItems={"center"}
                                                    textColor={activeContent == "conclusion" ? "gray.50" : "gray.100"}
                                                >
                                                    <FaRegCircle size={20} color={"gray"} />
                                                    {item.conclusion}
                                                </ListItem>
                                            </List>
                                        )
                                    })
                                }
                        </DrawerBody>

                        <DrawerFooter justifyContent={"center"} bgColor={"gray.700"}>
                            <div className='pt-3 flex justify-center border-t border-gray-100 w-full'>
                                <button 
                                    type='button'
                                    className='uppercase flex text-gray-100 items-center justify-center text-sm md:text-xs'
                                    onClick={() => router.back()}
                                    >
                                    <MdOutlineKeyboardArrowLeft size={22} />
                                    Voltar para o curso
                                </button>
                            </div>
                        </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </>
            }
        </>
    )
}