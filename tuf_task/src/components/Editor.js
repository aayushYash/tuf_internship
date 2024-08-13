import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import Toast from "./Toast";
import { toast } from 'react-toastify';

const Editor = ({  }) => {
  const [topic, setTopic] = useState();
  const [cat, setCategory] = useState();
  const [def, setDefinition] = useState();
  const [id,setId] = useState();
  const { pathname, state } = useLocation();

  
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const clickHandler = () => {
    if (pathname.includes("edit")) {
      axios({
        method: "put",
        maxBodyLength: Infinity,
        url: `${BASE_URL}learn/edit`,
        headers: {
          "x-auth-token": localStorage.getItem("x-auth-token"),
          "Content-Type": "application/json",
        },
        data: {
          id: id,
          topic: topic,
          explanation: def,
          category: cat,
        },
      }).then(() => {
        navigate(-1);
    }).catch((err) => toast(err.toString().split(":")[1]));
    } else {
      axios({
        method: "post",
        maxBodyLength: Infinity,
        url: `${BASE_URL}learn/create`,
        headers: {
          "x-auth-token": localStorage.getItem("x-auth-token"),
        },
        data: {
          topic: topic,
          explanation: def,
          category: cat,
        },
      }).then(() => {
        navigate(-1);
    }).catch((err) => toast(err.toString().split(":")[1]))
    }
  };

  useEffect(() => {
    if(state?.question) {
        const { question, explanation, category, id } = state;
        setCategory(category);
        setTopic(question);
        setDefinition(explanation);
        setId(id);
    }
  } ,[])

  return (

    <div className="flex flex-col w-[1024px] min-w-[340px] gap-4 relative mx-auto">
        <Toast />
      <div className="flex gap-4">
        <input
          className="flex-[7] bg-transparent border rounded-lg py-2 px-6 text-white"
          placeholder="T O P I C"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <input
          className="flex-[3] bg-transparent border rounded-lg py-2 px-6 text-white"
          placeholder="C A T E G O R Y"
          value={cat}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <textarea
        className="bg-transparent border rounded-lg py-2 px-6 text-white"
        placeholder="E X P L A N A T I O N"
        rows={8}
        value={def}
        onChange={(e) => setDefinition(e.target.value)}
      />
      <div className="flex flex-row w-full justify-evenly">
        <button
          class="text-md rounded-lg relative inline-flex items-center justify-center px-4 py-2.5 m-1 cursor-pointer border-b-2 border-l-2 border-r-2  active:border-red-700 active:shadow-none shadow-lg bg-gradient-to-tr from-red-600 to-red-500 hover:from-red-500 hover:to-red-500  border-red-700 text-white"
          onClick={() => navigate(-1)}
        >
          C A N C E L
        </button>

        <button
          class="text-md rounded-lg relative inline-flex items-center justify-center px-4 py-2.5 m-1 cursor-pointer border-b-2 border-l-2 border-r-2  active:border-red-700 active:shadow-none shadow-lg bg-gradient-to-tr from-red-600 to-red-500 hover:from-red-500 hover:to-red-500  border-red-700 text-white"
          onClick={clickHandler}
        >
          {" "}
          {pathname.includes("edit") ? "E D I T" : "A D D"}{" "}
        </button>
      </div>
    </div>
  );
};

export default Editor;
