import classNames from "classnames";
import React from "react";
import { Link } from "react-scroll";

interface ModuleNavSectionProps {
    currentSection: number;
    modulesQuantity: number;
    activeSection?: (number: number) => void | (() => React.Dispatch<React.SetStateAction<number>>);
}

export function ModuleNavSection({ activeSection = (number) => {}, currentSection, modulesQuantity } : ModuleNavSectionProps) {

    return (
        <div className='bg-black w-full border-t min-h-[50px] border-gray-700 flex justify-center sticky top-28 z-10'>
            <nav className='max-w-3xl overflow-auto w-full ml-10 mt-1 md:overflow-hidden z-20'>
                <ul className="flex py-1">
                        {
                            Array.from({ length: modulesQuantity }, (_, index) => {
                                return (
                                    <li key={index}>
                                        <Link
                                            className={classNames("block mt-2 text-center w-12 cursor-pointer hover:after:content-[''] hover:after:bg-gray-700 after:block after:w-12 after:h-1 after:mt-2", {
                                                "text-white after:content-[''] after:bg-gradient after:block after:w-12 after:h-1 after:mt-2": currentSection == index + 1,
                                                "text-gray-100": currentSection != index + 1
                                            })}
                                            to={`module-${index + 1}`}
                                            spy={true}
                                            onSetActive={() => {
                                                activeSection(index + 1);
                                            }}
                                            offset={-140}
                                            >
                                            {index < 9 ? `0${index + 1}` : index + 1}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                </ul>
            </nav>
        </div>
    )
}