import Link from "next/link";

interface CardCourseProps {
    slug?: string;
    alternativeSlug?: string;
    title: string;
    period: string;
    image: string;
    progress?: number;
    userHasCourse?: boolean;
}

export function CourseCard({ alternativeSlug, slug, title, period, image, progress, userHasCourse }: CardCourseProps) {

    if (userHasCourse) {
        return (            
            <div className="max-w-sm mt-2 basis-72 flex-shrink flex-grow">
                <Link href={`course/${slug}`}>
                    <a data-testid="test-link">
                        <div className="flex flex-col gap-20 bg-black">
                            <picture>
                                <source srcSet={image} type="image/web" />
                                <img className="ml-8 mt-8" src={image} alt="logo do curso" />
                            </picture>
                            <div className="text-gray-50">
                                <div className="max-w-[365px] pr-6 ml-6">
                                    <div className="bg-gray-700 w-full h-1 mb-4">
                                        <div className={`bg-gradient h-1 w-0`}></div>
                                    </div>
                                    <h2 className="text-3xl uppercase leading-8 min-h-[65px]">{title}</h2>
                                </div>
                                <footer className="px-6 pt-2 pb-6">
                                    <p className="capitalize">{`Remoto (${period})`}</p>
                                </footer>
                            </div>
                        </div>
                    </a>            
                </Link>
            </div>
        )
    }

    return (
        <div className="max-w-sm mt-2 basis-72 flex-shrink flex-grow">
            <a href={alternativeSlug} target="_blank" rel="noopener noreferrer" data-testid="test-link">
                <div className="flex flex-col gap-20 bg-gray-50">
                    <picture>
                        <source srcSet={image} type="image/web" />
                        <img className="ml-8 mt-8" src={image} alt="logo do curso" />
                    </picture>
                    <div className="text-gray-900">
                        <div className="max-w-[365px] pr-6 ml-6">
                            <h2 className="text-3xl uppercase leading-8 min-h-[65px]">{title}</h2>
                        </div>
                        <footer className="px-6 pt-2 pb-6">
                            <p className="capitalize">{`Remoto (${period})`}</p>
                        </footer>
                    </div>
                </div>
            </a>            
        </div>
    )
}