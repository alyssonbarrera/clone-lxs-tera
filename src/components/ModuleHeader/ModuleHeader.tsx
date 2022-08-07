import React, { memo, useState } from "react";
import classNames from "classnames";
import isEqual from "lodash.isequal";

interface ModuleHeaderProps {
    title: String;
    variant: String;
    day?: String;
    month?: String;
    startTime?: Number;
    endTime?: Number;
    year?: Number;
}

function ModuleHeaderComponent( {title, variant, day, month, year, startTime, endTime }: ModuleHeaderProps) {

    if(variant == "class") {
        return (
            <section>
                <div className='bg-black pt-5 md:flex md:flex-col md:items-center'>
                    <div className='h-full ml-10 mr-8 pt-3 max-w-3xl'>
                        <h1 className='border-l-8 border-white mb-4 pl-2 max-w-xs md:max-w-none lg:max-w-none text-white uppercase font-extrabold text-3xl md:text-6xl'>
                            {title}
                        </h1>
                        <div className="ml-4">
                            <h2 className='text-white uppercase font-bold'>{`${day} de ${month} de ${year} ${startTime}h - ${endTime}h`}</h2>
                            <span className="text-white">Aula Online: <a href="" className="text-cyan-400 break-words">--Link--</a></span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section>
            <div className='bg-black pt-5 md:flex md:flex-col md:items-center'>
                <div className='h-44 ml-10 pt-3 max-w-3xl'>
                    <h1 className='md:pr-8 lg:max-w-none text-white uppercase font-extrabold text-3xl md:text-6xl'>
                        {title}
                    </h1>
                    <h2 className='text-white uppercase font-bold'>{`Remoto (part-time)`}</h2>
                </div>
            </div>
        </section>
    )
}

export const ModuleHeader = memo(ModuleHeaderComponent, (prevProps, nextProps) => {
    return isEqual(prevProps.title, nextProps.title)
});