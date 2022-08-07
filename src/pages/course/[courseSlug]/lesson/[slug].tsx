import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LessonHeader } from "../../../../components/LessonHeader";
import { LessonMenu } from "../../../../components/LessonMenu";
import { LessonMenuMobile } from "../../../../components/LessonMenu";
import { GetLessonsByChapterSlugDocument } from "../../../../graphql/generated";
import client from "../../../../services/apollo";

import style from "./style.module.css";

export default function Lesson({ data }) {

    const [lessons, setLessons] = useState([]);
    const [lessonContent, setLessonContent] = useState(null);
    const [presentation, setPresentation] = useState(null);
    const [filterLessons, setFilterLessons] = useState([]);
    const [conclusion, setConclusion] = useState(null);
    const [currentContent, setCurrentContent] = useState('introduction');
    
    const router = useRouter();

    useEffect(() => {
        
        if(data) {
            const { chapters } = data
            const lessonsByChapter = chapters.map(chapter => chapter.lessons);
            setLessons(lessonsByChapter[0]);
            setPresentation(chapters.map(chapter => chapter.presentation));
            setLessonContent(lessonsByChapter[0][0]);
            setConclusion(chapters.map(chapter => chapter.conclusion));
        }
    }, [data])

    useEffect(() => {
        setFilterLessons(lessons.filter(lesson => lesson.title == currentContent))
    }, [currentContent])

    const navItems = data?.chapters.map((chapter) => {

        return {
            presentation: chapter.presentation?.title,
            presentationId: chapter.presentation?.id,
            lessons: chapter.lessons.map((lesson) => lesson.title),
            conclusion: chapter.conclusion.title,
            conclusionId: chapter.conclusion.id,
            practice: chapter.practice?.title,
            practiceId: chapter.practice?.id

        }
    })

    function nextContent() {
        if(currentContent == 'introduction') {
            setCurrentContent(navItems[0].lessons[0])
        } else if (currentContent == navItems[0].lessons.at(-1)) {
            setCurrentContent('conclusion')
        }
        navItems.forEach((chapter) => {
            if(chapter.lessons.includes(currentContent)) {
                const index = chapter.lessons.indexOf(currentContent);
                if(index < chapter.lessons.length - 1) {
                    setCurrentContent(chapter.lessons[index + 1])
                }
            }
        })           
    }

    return (
        <>
            <LessonHeader title={data.chapters.map((chapter) => chapter.title)} />
            <LessonMenu title={data.chapters.map((chapter) => chapter.title)} activeContent={currentContent} currentContent={setCurrentContent} items={navItems} />
            <LessonMenuMobile title={data.chapters.map((chapter) => chapter.title)} activeContent={currentContent} currentContent={setCurrentContent} items={navItems} />
            <main className="flex lg:pl-64 flex-col px-4 w-4/5 mx-auto mt-10 lg:mt-0 mb-6">
                    {
                        currentContent == 'introduction' &&
                        presentation?.map(presentation => (
                            <section key={presentation?.id}>
                                <article className="flex-shrink lg:w-[560px] lg:mt-12 mx-auto">
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="text-3xl lg:text-5xl font-bold w-full mb-6 uppercase border-l-8 py-2 pl-2 border-green-300">{presentation?.title}</h1>
                                        <div className={`mb-5 ${style.content}`}  dangerouslySetInnerHTML={{__html: presentation?.summary.html}} />
                                        <div className="w-full h-48 bg-black">
                                        </div>
                                        <div
                                            className={style.content}
                                            dangerouslySetInnerHTML={{__html: presentation?.objectives.html}}
                                        />
                                        <p className="w-full my-5 font-bold">{presentation?.dedication}</p>
                                    </div>
                                </article>
                                <footer className="flex flex-col mt-6 items-end lg:w-[560px] lg:mx-auto">
                                    <hr className="bg-gray-50 h-0.5 w-full" />
                                    <button
                                        type="button"
                                        className="mt-6 bg-black text-white w-36 h-12 rounded-lg uppercase font-bold p-2 hover:bg-green-500 hover:text-black transition-all"
                                        onClick={nextContent}>Avançar</button>
                                </footer>
                            </section>
                        
                        ))
                    }
                    {   currentContent != 'content' && currentContent != 'conclusion' &&
                        filterLessons?.map(lesson => (
                            <section key={lesson.id}>
                                <article className="flex-shrink lg:w-[560px] lg:mt-12 mx-auto">
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="text-3xl lg:text-5xl font-bold w-full mb-6 uppercase border-l-8 py-2 pl-2 border-green-300">{lesson.title}</h1>
                                        <div className="mb-5" dangerouslySetInnerHTML={{__html: lessonContent.summary.html}} />
                                        <div className="w-full h-48 bg-black">
                                        </div>
                                        <div
                                            className={style.content}
                                            dangerouslySetInnerHTML={{__html: lessonContent.content.html}}
                                        />
                                    </div>
                                </article>
                                <footer className="flex flex-col mt-6 items-end lg:w-[560px] lg:mx-auto">
                                    <hr className="bg-gray-50 h-0.5 w-full" />
                                    <button 
                                        type="button"
                                        className="mt-6 bg-black text-white w-36 h-12 rounded-lg uppercase font-bold p-2 hover:bg-green-500 hover:text-black transition-all"
                                        onClick={nextContent}>Avançar</button>
                                </footer>

                            </section>
                        ))
                    }
                    {  
                        currentContent == 'conclusion' &&
                        conclusion?.map(conclusion => (
                            <section key={conclusion.id}>
                                <article className="flex-shrink lg:w-[560px] lg:mt-12 mx-auto">
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="text-3xl lg:text-5xl font-bold w-full mb-6 uppercase border-l-8 py-2 pl-2 border-green-300">{conclusion.title}</h1>
                                        <div className={`mb-5 ${style.content}`} dangerouslySetInnerHTML={{__html: conclusion.summary.html}} />
                                        <div className="w-full h-40 bg-black">

                                        </div>
                                    </div>
                                </article>
                                <footer className="flex flex-col mt-6 items-end lg:w-[560px] lg:mx-auto">
                                    <hr className="bg-gray-50 h-0.5 w-full" />
                                    <button
                                        type="button"
                                        className="mt-6 bg-black text-white h-12 rounded-lg uppercase font-bold p-2 hover:bg-green-500 hover:text-black transition-all px-8"
                                        onClick={() => router.back()}>Voltar para o curso</button>
                                </footer>
                            </section>
                        ))
                    }
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const session = await getSession({ req });

    const data = await client.query({
        query: GetLessonsByChapterSlugDocument,
        variables: {
            slug: params.slug
        }
    })

    if(!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    else {
        return {
            props: {
                data: data.data
            }
        }
    }
}