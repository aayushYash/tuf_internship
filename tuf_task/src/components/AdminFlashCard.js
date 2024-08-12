import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const AdminFlashCard = ({key , body,del, topic,edit}) => {
  const [isFlipped, setIsFlipped] = useState(false);

 

  return (
    <ReactCardFlip key={key} isFlipped={isFlipped} flipDirection="horizontal">
      {/* front side */}
      <div className="overflow-hidden relative h-[450px] w-[350px] rounded-lg border-zinc-800 bg-[#191919] grid place-items-center group">
        {/* top for buttons to edit and delete */}
        <div className="container w-full h-3 p-2 flex flex-row justify-evenly absolute -top-10 group-hover:top-0 transition-all">
          <div className="size-3 border-gray-400" onClick={del}>
            <FontAwesomeIcon className="cursor-pointer" icon={faTrash} color="red" font-size="22px" />
          </div>
          <div>
            <FontAwesomeIcon className="cursor-pointer" icon={faPenToSquare} color="orange" font-size="22px" />
          </div>
        </div>
        {/* question */}
        <p className="font-bold text-white text-[24px]">{topic}</p>
        {/* button for flip */}
        <button className="-bottom-16 w-full my-4 px-4 py-3 text-[#fff] bg-red-700 mx-8 absolute rounded-lg group-hover:bottom-0 transition-all" onClick={() => setIsFlipped(state => !state)}>Flip to Reveal</button>
      </div>
      <div>
      <div className="overflow-hidden relative h-[450px] w-[350px] rounded-lg border-zinc-800 bg-[#191919] grid place-items-center group">
        {/* top for buttons to edit and delete */}
        <div className="container w-full h-3 p-2 flex flex-row justify-evenly absolute -top-10 group-hover:top-0 transition-all">
          <div className="size-3 border-gray-400" onClick={del}>
            <FontAwesomeIcon className="cursor-pointer" icon={faTrash} color="red" font-size="22px" />
          </div>
          <div>
            <FontAwesomeIcon className="cursor-pointer" icon={faPenToSquare} color="orange" font-size="22px" />
          </div>
        </div>
        {/* Explanation */}
        <p className="font-bold text-white text-[24px]">{body}</p>
        {/* button for flip */}
        <button className="-bottom-16 w-full my-4 px-4 py-3 text-[#fff] bg-red-700 mx-8 absolute rounded-lg group-hover:bottom-0 transition-all" onClick={() => setIsFlipped(state => !state)}>Flip To Reveal</button>
      </div>
      </div>
    </ReactCardFlip>
  );
};


export default AdminFlashCard;
