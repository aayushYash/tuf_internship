import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const ActionCard = ({text, key, onClick}) => {
    const [icon,setIcon] = useState(text == 'Add' ? faAdd : text == 'Delete' ?faTrash : faPenToSquare)
    
    return <div key={key} onClick={onClick} className="container py-10  px-4 flex flex-col justify-center items-center gap-2 bg-[#191919] w-40 h-44 rounded-md text-white hover:bg-[#d41f30] transition-colors cursor-pointer sm:flex-col" >
        {/* icon */}
        <FontAwesomeIcon className="hover:colo-[#d41f30]" icon ={icon} color="white"  />
        {/* Text */}
        <h2 className="font-bold  text-[22px] text-center uppercase group">{text}</h2>

    </div>
}


export default ActionCard;