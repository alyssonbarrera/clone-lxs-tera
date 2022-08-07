import { CourseCard } from "./CourseCard";
import { useSession } from "next-auth/react";

interface CoursesProps {
    title: string
    slug?: string
    alternativeSlug?: string
    courseImage: {
        url: string
    }
    courseName: string
    coursePeriod: string
    id: string
}

type CoursesData = {
    userCourses: CoursesProps[]
    otherCourses: CoursesProps[]
}

export function CourseContainer({ userCourses, otherCourses}: CoursesData) {

    const { data: session } = useSession()

    return (
        <main className="max-w-[1136px] mx-auto px-8 xl:p-0 mb-16">
            <h2 className="text-3xl mt-14 mb-6 uppercase font-light">
                Olá, {session?.user?.name}
            </h2>
            <section className="mb-16">
                <h4 className="uppercase font-bold">Seus cursos</h4>
                <div className="flex justify-start gap-3 flex-wrap">
                    {
                        userCourses && userCourses.map(course => (
                            <CourseCard
                                key={course.id}
                                slug={course.slug}
                                alternativeSlug={course.alternativeSlug}
                                image={course.courseImage.url}
                                title={course.courseName}
                                period={course.coursePeriod}
                                progress={50}
                                userHasCourse={true}
                            />
                        ))
                    }
                </div>
            </section>
                    {
                        otherCourses && otherCourses.map(course => (
                            <section key={course.courseName}>
                                <h4 className="uppercase font-bold">Outros cursos da tera</h4>
                                <div className="flex justify-start gap-3 flex-wrap">
                                <CourseCard
                                    key={course.id}
                                    alternativeSlug={course.alternativeSlug}
                                    image={course.courseImage.url}
                                    title={course.courseName}
                                    period={course.coursePeriod}
                                    progress={50}
                                    userHasCourse={false}
                                />
                                </div>
                            </section>
                        ))
                    }
        </main>
    )
}