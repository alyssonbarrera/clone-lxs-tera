import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { CourseCustomLayout } from "../../../components/CourseCustomLayout";
import { CourseNavHeader } from "../../../components/CourseNavHeader";
import { ModuleContainer } from "../../../components/ModuleContainer";
import { ModuleHeader } from "../../../components/ModuleHeader";
import { ModuleNavSection } from "../../../components/ModuleNavSection";
import { GetModulesAndChaptersDocument } from "../../../graphql/generated";
import client from "../../../services/apollo";

export default function CoursePage({ data }) {

    const [modules, setModules] = useState([]);

    useEffect(() => {
        setModules(data?.course.modules.map((module) => module));
    }, [data])

    const [currentSection, setCurrentSection] = useState(1);

    return (
        <>
            <CourseNavHeader course={data.course.courseName} />
            <main className="pb-14">
                <ModuleHeader title={data.course.courseName} variant={"course"} />
                <ModuleNavSection activeSection={setCurrentSection} currentSection={currentSection} modulesQuantity={modules?.length} />
                {
                    modules?.sort((a, b) => a.moduleNumber - b.moduleNumber).map((module) => {
                        return (
                            <ModuleContainer
                                key={module.id}
                                title={module?.moduleTitle}
                                number={module?.moduleNumber}
                                lessons={module?.chapters}
                                liveLessons={module?.liveLessons}
                            />
                        )
                    })
                }
            </main>
        </>
    )
}

CoursePage.layout = CourseCustomLayout

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const session = await getSession({ req });

    const data = await client.query({
        query: GetModulesAndChaptersDocument,
        variables: {
            courseAcronym: params.courseSlug
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