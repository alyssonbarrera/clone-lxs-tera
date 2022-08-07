import { useRouter } from 'next/router';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import isEqual from "lodash.isequal";
import { memo } from 'react';

function CourseNavHeaderComponent({ course }) {

    const router = useRouter();
    const { courseSlug } = router.query;
    const { asPath } = router;

    function previewPage() {
        if(asPath == `/course/${courseSlug}`) {
            router.push('/')
        } else {
            router.push(`/course/${courseSlug}`)
        }
    }
    return (
        <>
            <nav className='flex h-16 justify-center sticky top-14 bg-white z-20'>
                <div className='flex items-center max-w-6xl w-full'>
                    <div className='flex'>
                            <button onClick={previewPage}>
                                <MdOutlineKeyboardArrowLeft size={32} />
                            </button>
                            <button>
                                <MdOutlineKeyboardArrowRight onClick={() => console.log('click')} pointerEvents={'none'} size={32} color='#bbbbbb' className="-translate-x-3" />
                            </button>
                    </div>
                    <div>
                        <span>Cursos</span> <span>|</span> <span>{course}</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export const CourseNavHeader = memo(CourseNavHeaderComponent, (prevProps, nextProps) => {
    return isEqual(prevProps.course, nextProps.course)
})