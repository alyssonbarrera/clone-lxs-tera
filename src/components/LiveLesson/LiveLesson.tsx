import Link from "next/link";

interface LiveLessonProps {
    slug: string;
    title: string;
    day: string;
    month: string;
    startTime: number;
    endTime: number;
    teacherBio?: string;
    teacherLinkedin?: string;
    teacherImage?: string;
    teacherName?: string;
}

export function LiveLesson({ slug, teacherImage, title, day, month, startTime, endTime, teacherName }: LiveLessonProps) {

    return (
        <Link href={slug}>
            <a data-testid="test-liveLesson" className="md:flex md:flex-row-reverse">
                {
                    teacherImage &&
                    <img className="w-full md:h-56 md:w-56" src={teacherImage} alt="imagem do professor" />
                }
                <div className="flex bg-gray-50 text-black h-60 py-4 pl-3 md:h-56">
                    <div className='flex flex-col mr-2'>
                        <span className="text-2xl font-light" >{day}</span>
                        <span className="uppercase">{month}</span>
                    </div>
                    <div className='flex flex-col px-2'>
                        <h3 className="uppercase font-bold md:text-2xl">{title}</h3>
                        <p className="flex-grow">Com: {teacherName}</p>
                        <span className='text-gray-600'>{`${startTime}h - ${endTime}h`}</span>
                    </div>
                </div>
            </a>
        </Link>
    )
}