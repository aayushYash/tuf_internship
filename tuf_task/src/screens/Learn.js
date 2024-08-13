import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import ActionCard from "../components/ActionCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Learn  = () => {

    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const navigate = useNavigate();

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


    return <div className="flex flex-col h-fit min-h-full w-full items-center">
    {/* <Header /> */}

    <Title>Course To Learn</Title>
    <div className="container gap-5 flex flex-col justify-evenly place-items-center w-[1024px] flex-wrap sm:flex-row">
      {topic.map((top, index) => (
        <ActionCard key={index} text={top} onClick={() => {navigate(`/learn/${top}`)}} />
      ))}
    </div>
    
  </div>
}


export default Learn;