import classNames from "classnames";
import { useState } from "react";

interface classNavContentProps {
    contentSection?: React.Dispatch<React.SetStateAction<String>>;
}

export function ClassNavContent({ contentSection = (content: string) => {} }: classNavContentProps) {

    const [currentContent, setCurrentContent] = useState('sobre');

    function handleContentChange(content: any) {
        setCurrentContent(content);
        contentSection(content)
    }

    return (
        <nav className="bg-black sticky top-28 z-10 pt-5 pb-1 text-white flex justify-center">
            <ul className="flex gap-4 uppercase text-center cursor-pointer">
                <li className={classNames({
                    "text-white after:content-[''] after:bg-gradient after:block after:w-32 after:h-1 after:mt-2": currentContent == 'sobre',
                    "text-gray-100": currentContent != 'sobre'
                })}
                ><button type="button" onClick={() => handleContentChange('sobre')} className="uppercase w-32">Sobre</button></li>
                
                <li className={classNames({
                    "text-white after:content-[''] after:bg-gradient after:block after:w-32 after:h-1 after:mt-2": currentContent == 'conteudo',
                    "text-gray-100": currentContent != 'conteudo'
                })}><button type="button" onClick={() => handleContentChange('conteudo')} className="uppercase w-32">Conteúdo</button></li>
            </ul>
        </nav>
    )
}