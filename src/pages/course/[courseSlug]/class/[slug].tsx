import { useState } from "react";
import { ClassNavContent } from "../../../../components/ClassNavContent/";
import { CourseNavHeader } from "../../../../components/CourseNavHeader";
import { ModuleHeader } from "../../../../components/ModuleHeader";
import { TeacherCard } from "../../../../components/TeacherCard";
import { ClassContentCard } from "../../../../components/ClassContentCard";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { GetModulesAndChaptersDocument } from "../../../../graphql/generated";
import { useRouter } from "next/router";
import { CourseCustomLayout } from "../../../../components/CourseCustomLayout";
import { Flex, Spinner } from "@chakra-ui/react";

import styles from "./style.module.css";
import client from "../../../../services/apollo";

export default function Class({ data }) {

    const router = useRouter();

    const [currentContent, setCurrentContent] = useState('sobre');
    
    let filteredModules = data?.course.modules.filter(module => module.liveLessons.map(liveLesson => liveLesson.slug == router.query.slug));
    const { liveLessons } = filteredModules[0];

    if(!data) {
        return (
            <Flex justifyContent={"center"} alignItems={"center"} h={"3xl"}>
                <Spinner size={"lg"} />
            </Flex>
        )
    }

    return (
        <>
            <CourseNavHeader course={"Full Stack Development"} />
            <ModuleHeader
                title={filteredModules && liveLessons[0].title}
                variant={"class"}
                day={filteredModules && liveLessons[0].date.split('-')[2]}
                month={filteredModules && Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(new Date(liveLessons[0].date))}
                year={filteredModules && liveLessons[0].date.split('-')[0]}
                startTime={filteredModules && liveLessons[0].startTime}
                endTime={filteredModules && liveLessons[0].endTime}
            />
            <ClassNavContent contentSection={setCurrentContent} />

            <section className={`${styles.content} max-w-[952px] mx-auto`}>
                { 
                    currentContent == 'sobre' &&
                    <TeacherCard
                        teacherImage={filteredModules && liveLessons[0].teacher.image.url}
                        teacherName={filteredModules && liveLessons[0].teacher.name}
                        teacherBio={filteredModules && liveLessons[0].teacher.bio}
                        teacherLinkedin={filteredModules && liveLessons[0].teacher.linkedin}
                    /> 
                }
                {
                    currentContent == 'sobre' &&

                    <article className="w-4/5 mx-auto mt-12 mb-12">
                        <h2 className="uppercase font-bold mb-2">Sobre a aula</h2>
                        <div
                            className="mb-8"
                            dangerouslySetInnerHTML={filteredModules && {__html: liveLessons[0].about.html}}
                        />
                        <h3 className="uppercase font-bold mb-2 mt-12">Objetivos</h3>
                        <div
                            dangerouslySetInnerHTML={filteredModules && {__html: liveLessons[0].objectives.html}}
                        />
                    </article>
                } {
                    currentContent == 'conteudo' &&
                    <section className="my-12 flex flex-col gap-4 lg:flex-row">
                        <ClassContentCard title={"aula 1"} type={"pdf"} size={3} />
                        <ClassContentCard title={"Aula gravada"} type={"video"} size={3} />
                        <ClassContentCard title={"Código"} type={"code"} size={3} />
                    </section>
                }
            </section>
        </>
    )
}

Class.layout = CourseCustomLayout

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const session = await getSession({ req });

    const modulesAndChapters = await client.query({
        query: GetModulesAndChaptersDocument,
        variables: {
            courseAcronym: params.courseSlug as string
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
                data: modulesAndChapters.data
            }
        }
    }
}