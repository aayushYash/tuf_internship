import React, { useEffect, useState } from "react";
import Header from "../components/Headers";
import ActionCard from "../components/ActionCard";
import Title from "../components/Title";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [topic, setTopic] = useState([]);

    const [problems, setProblems] = useState([]);

    const BASE_URL = process.env.REACT_APP_BASE_URL;
    
    useEffect(() => {
            axios({
                url: `${BASE_URL}learn/`,
            }).then((res) => {
                console.log(res);
                if(topic.length == 0) setTopic((state) => [...res.data]);
            }).catch((err) => console.log("error occurred: "+err))

            axios({
              url: `${BASE_URL}quiz/`,
          }).then((res) => {
              console.log(res);
              if(problems.length == 0) setProblems((state) => [...res.data]);
          }).catch((err) => console.log("error occurred: "+err))
        
    } ,[topic])

    const navigate = useNavigate();

    const handleClick = (topic) => {
        navigate(`/course/${topic}`)
    }

  return (
    <div className="flex flex-col h-fit min-h-full w-full items-center">
      {/* <Header /> */}

      <Title>Add Course Flash Cards</Title>
      <div className="container gap-3 flex flex-col justify-evenly place-items-center w-[1024px] flex-wrap sm:flex-row">
       
        
        {topic.map((top,index) => <ActionCard key={index} text={top} onClick={() => handleClick(top)} />)}

      </div>
      <Title>Add Problem Flash Cards</Title>
      <div className="container flex flex-col justify-evenly place-items-center w-[1024px] flex-wrap gap-3 sm:flex-row">
      {problems.map((top,index) => <ActionCard key={index} text={top} onClick={() => handleClick(top)} />)}
      </div>
    </div>
  );
};

export default AdminDashboard;
