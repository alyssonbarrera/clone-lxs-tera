import React from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useRouter } from 'next/router';
import classNames from 'classnames';

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

export function LessonMenu({ title, activeContent, currentContent = (content) => {}, items }: LessonMenuProps) {

    const router = useRouter()

    return (
        <aside className='hidden lg:flex flex-col w-64 fixed top-0 h-[100vh]'>
            <header className='bg-black text-white p-6 font-bold uppercase'>
                <h4>{title}</h4>
            </header>
            <nav className='bg-gray-700 py-4 px-6 h-full'>
                    {
                        items?.map(item => {
                            return (
                                <ul key={item.presentation} className='text-gray-100 text-xs uppercase flex flex-col gap-6'>
                                    <li
                                        onClick={() => {currentContent("introduction")}}
                                        className={classNames('flex gap-3 items-center cursor-pointer', {
                                            'text-white': activeContent === 'introduction'
                                        })}
                                    >
                                        <FaRegCircle size={20} strokeWidth={20} />
                                        {item.presentation}
                                    </li>
                                    {item.lessons.map((lesson) => {
                                        return (
                                            <li
                                                data-testid={lesson}
                                                key={Math.random()}
                                                onClick={() => currentContent(items[0].lessons)}
                                                className={classNames('flex gap-3 items-center cursor-pointer', {
                                                    'text-white': activeContent == lesson
                                                })}
                                            >
                                                <FaRegCircle size={20} strokeWidth={20} />
                                                {lesson}
                                            </li>
                                        )
                                    })}
                                    {
                                        item.quiz &&
                                        <li
                                            onClick={() => currentContent('practice')}
                                            className={classNames('flex gap-3 items-center cursor-pointer', {
                                                'text-white': activeContent === 'quiz'
                                            })}
                                        >
                                            <FaRegCircle size={20} strokeWidth={20} />
                                            {item.quiz}
                                        </li>
                                    }
                                    {
                                        item.practice &&
                                        <li
                                            onClick={() => currentContent('practice')}
                                            className={classNames('flex gap-3 items-center cursor-pointer', {
                                                'text-white': activeContent === 'practice'
                                            })}
                                        >
                                            <FaRegCircle size={20} strokeWidth={20} />
                                            {item.practice}
                                        </li>
                                    }
                                    <li
                                        onClick={() => currentContent('conclusion')}
                                        className={classNames('flex gap-3 items-center cursor-pointer', {
                                            'text-white': activeContent === 'conclusion'
                                        })}
                                    >
                                        <FaRegCircle size={20} strokeWidth={20} />
                                        {item.conclusion}
                                    </li>
                                </ul>
                            )                       
                        })
                    }
            </nav>
            <footer className='bg-gray-700 text-gray-100 py-4 px-6'>
                <div className='pt-3 flex justify-center border-t border-gray-100'>
                    <button 
                        type='button'
                        className='flex items-center justify-center text-sm md:text-xs'
                        onClick={() => router.back()}
                        >
                        <MdOutlineKeyboardArrowLeft size={22} />
                        <span className='uppercase'>Voltar para o curso</span>
                    </button>
                </div>
            </footer>
        </aside>
    )
}