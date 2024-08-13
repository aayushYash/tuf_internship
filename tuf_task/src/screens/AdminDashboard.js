import React, { useEffect, useState } from "react";
import Header from "../components/Headers";
import ActionCard from "../components/ActionCard";
import Title from "../components/Title";


import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  
  const [problems, setProblems] = useState([]);
  
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    axios({
      url: `${BASE_URL}learn/`,
    })
      .then((res) => {
        console.log(res);
        if (topic.length == 0) setTopic((state) => [...res.data]);
      })
      .catch((err) => console.log("error occurred: " + err));


  }, [topic]);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleClick = (topic) => {
    navigate(`/course/${topic}`);
  };

  return (
    <div className="flex flex-col h-fit min-h-full w-full items-center">
      {/* <Header /> */}
      {/* <ToastContainer /> */}


      <Title>Add Course Flash Cards</Title>
      <div className="container gap-5 flex flex-col justify-evenly place-items-center w-[1024px] flex-wrap sm:flex-row mb-4">
        {topic.map((top, index) => (
          <ActionCard key={index} text={top} onClick={() => handleClick(top)} />
        ))}
      </div>
      {!pathname.includes('learn') && <div className="bg-[#0909090] border border-[#e11d48] rounded-lg justify-center items-center flex px-4 py-2 m-4 cursor-pointer" onClick={() => {
              navigate("/add");
            }}>
          <FontAwesomeIcon
            icon={faPlus}
            className="text-[#e11d48] text-[26px] mx-4"
            
          />{" "}
        <button className="">
          <span className="text-[#e11d48] text-[22px] align-middle">ADD</span>
        </button>
      </div>}

      {/*  */}
    </div>
  );
};

export default AdminDashboard;
