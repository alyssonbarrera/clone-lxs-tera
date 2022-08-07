import { FaLinkedinIn } from "react-icons/fa";

interface TeacherCardProps {
    teacherImage: string;
    teacherName: string;
    teacherBio: string;
    teacherLinkedin: string;
}

export function TeacherCard({ teacherName, teacherBio, teacherImage, teacherLinkedin }: TeacherCardProps) {
    return (
        <div className="sm:flex w-4/5 min-h-[500px]sm:justify-between sm:min-h-0 mt-12 mx-auto border-2 border-green-300">
            <div className="flex flex-col h-2/5">
                <img data-testid="test-teacherCard-image" src={teacherImage} alt="imagem do expert" className="sm:w-96" />
            </div>
            <div className="sm:w-full px-4 mt-4  flex justify-between sm:items-start">
                <div className="mb-40 sm:mb-0">                    
                    <h4 className="uppercase text-2xl">{teacherName}</h4>
                    <p className="text-gray-500">{teacherBio}</p>
                </div>
                <a className="sm:mt-2" href={teacherLinkedin} data-testid="test-teacherCard-link" target={"_blank"} rel="noopener noreferrer">
                    <FaLinkedinIn size={25} className="text-blue-200" />
                </a>
            </div>
        </div>
    )
}