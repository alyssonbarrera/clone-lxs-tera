import { memo } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";
import { VscFilePdf } from "react-icons/vsc";
import isEqual from "lodash.isequal";

interface LessonContentCardProps {
    title: string;
    type: string;
    size: number
}

function ClassContentCardComponent({ title, type, size }: LessonContentCardProps) {
    return (
        <a href="" className="flex w-4/5 mx-auto min-h-[160px] hover:brightness-125 transition">
            <div className=" bg-gray-700 flex-grow p-4 flex flex-col justify-between">
                <span className="uppercase text-white font-semibold">{title}</span>
                <span className="uppercase text-gray-100">{type == 'pdf' || type == 'code' ? size + 'mb' : size + 'h'}</span>
            </div>
            <div className="bg-gray-500 w-20 flex items-center justify-center">
                {
                    type == 'pdf'
                    ? <VscFilePdf data-testid="test-icon-pdf" size={40} color={"white"} />
                    : type == 'video' ? <BsPlayCircle data-testid="test-icon-video" size={40} color={"white"} />
                    : type == 'code' ? <HiOutlineCode data-testid="test-icon-code" size={40} color={"white"} /> : null
                }
            </div>
        </a>
    )
}

export const ClassContentCard = memo(ClassContentCardComponent, (prevProps, nextProps) => {
    return isEqual(prevProps.title, nextProps.title)
})