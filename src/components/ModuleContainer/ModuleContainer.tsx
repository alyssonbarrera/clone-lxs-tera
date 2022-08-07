import { useRouter } from "next/router";
import { Element } from "react-scroll";
import { LessonCard } from "../LessonCard";
import { LiveLesson } from "../LiveLesson";

type LessonContent = {
    id: string;
    slug: string;
    title: string;
    video: {
        url: string;
    }
    duration: number;
    courseAcronym: string;
    numberOfVideos: number;
}

type Lessons = {
    id: string;
    slug: string;
    title: string;
    video: {
        url: string;
    };
    duration: number;
    courseAcronym: string;
    numberOfVideos: number;
    lessons: LessonContent[];
}

type LiveLessons = {
    slug: string;
    key: string;
    id: string;
    date: string;
    courseAcronym: string;
    teacherImage?: string;
    teacherBio?: string;
    teacherLinkedin?: string;
    title: string;
    about: string;
    objectives: string;
    day: string;
    month: string;
    startTime: number;
    endTime: number;
    teacher?: {
        name: string;
        image: {
            url: string;
        };
        bio: string;
        linkedin: string;
    }
}

interface ModuleProps {
    lessons: Lessons[];
    liveLessons: LiveLessons[];
    number: number;
    title: string;
}

export function ModuleContainer({ number, title, lessons, liveLessons }: ModuleProps) {
    const router = useRouter()
    const routerPath = router.query.courseSlug

    return (
        <Element name={`module-${number}`}>
            <section data-section={number} className="max-w-3xl px-5 mx-auto last:mb-4">
                <div className="pt-14 mr-7 flex gap-2 text-3xl uppercase mb-5">
                    <span className="font-extrabold">{number}</span>
                    <b>|</b>
                    <h3 className="font-light">{title}</h3>
                </div>
                <div className="flex flex-col gap-5 mx-6">
                    {
                        lessons.map((lesson) => {
                            return (
                            <LessonCard
                                key={lesson.id}
                                id={lesson.id}
                                slug={`/course/${routerPath}/lesson/${lesson.slug}`}
                                title={lesson.title}
                                duration={lesson.duration}
                                numberOfVideos={lesson.lessons.map(lesson => lesson.video).length}
                            />
                            )
                        })
                    }
                    {
                        liveLessons?.map((liveLesson) => (
                            <LiveLesson
                                slug={`/course/${routerPath}/class/${liveLesson.slug}`}
                                key={liveLesson.title}
                                teacherImage={liveLesson.teacher.image.url}
                                title={liveLesson.title}
                                day={liveLesson.day}
                                month={liveLesson.month}
                                startTime={liveLesson.startTime}
                                endTime={liveLesson.endTime}
                                teacherName={liveLesson.teacher.name}
                                teacherBio={liveLesson.teacher.bio}
                                teacherLinkedin={liveLesson.teacher.linkedin}
                            />
                        ))
                    }
                </div>
            </section>
        </Element>
    )
}