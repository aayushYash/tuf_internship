import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const InputText = ({ value,  placeholder, type, onChange }) => {
  const [icon, setIcon] = useState(
    type == "password" ? faLock : type == "text" ? faUser : ""
  );

  const [inputType, setInputType] = useState(type);

  return (
    <div className="flex flex-row items-center justify-start bg-[#393939] rounded-md p-2 border-solid my-4 ">
      <FontAwesomeIcon
        icon={icon}
        className="text-[#111111] size-5"
        size="30px"
      />
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={inputType}
        className="bg-transparent focus:border-none focus:outline-none w-full text-white ml-2"
      />

      {type == "password" && (
        <ShowPassIcon
          onClick={() =>
            setInputType((state) => (state == "password" ? "text" : "password"))
          }
        />
      )}
    </div>
  );
};

const ShowPassIcon = ({ onClick }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShow = () => {
    setShowPassword((state) => !state);
    onClick();
  };
  return (
    <div className="cursor-pointer">
      <FontAwesomeIcon
        icon={showPassword ? faEye : faEyeSlash}
        onClick={toggleShow}
      />
    </div>
  );
};

export default InputText;
