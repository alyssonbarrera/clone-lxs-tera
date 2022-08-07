import Link from 'next/link';
import { CircularProgress } from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa';
interface LessonProps {
    slug: string;
    title: string;
    duration: number;
    numberOfVideos: number;
    id: string;
}

export function LessonCard({ slug, id, title, duration, numberOfVideos }: LessonProps) {
    return (
        <Link href={slug}>
            <a data-testid="test-card">
                <div className="flex bg-black text-white h-36 py-4 pl-3">
                    <div className='px-2 max-w-lg flex gap-5'>
                        <div className='relative'>
                            <CircularProgress trackColor={'gray'} value={0} color={"rgb(153, 251, 140)"} size={10} mt={1} />
                            <FaPlay size={15} className='absolute top-4 left-[14px]' />
                        </div>
                        <div>
                            <h3 className="uppercase text-white font-bold md:text-2xl">{title}</h3>
                            <span className='text-gray-100'>{duration} min</span>  <b className='text-gray-100'>•</b> <span className='text-gray-100'>{numberOfVideos} {numberOfVideos <= 1 ? "vídeo" : "vídeos"} </span>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}