import React from "react";


const Title = ({children}) => {
    return <div className="flex flex-row mx-auto my-4 items-center">
    {/* three dots */}
    <div className="flex flex-row gap-x-2 items-center">

        <div className="size-1 bg-white rounded-full" />
        <div className="size-2 bg-white rounded-full" />
        <div className="size-3 bg-white rounded-full" />

    </div>
    {/* title */}
    <h1 className="text-[#d41f30] align-middle pb-1 font-sans font-bold text-[30px] mx-4">{children}</h1>
    {/* three dots */}
    <div className="flex flex-row-reverse gap-x-2 items-center">

        <div className="size-1 bg-white rounded-full" />
        <div className="size-2 bg-white rounded-full" />
        <div className="size-3 bg-white rounded-full" />

    </div>
    </div>
}


export default Title;