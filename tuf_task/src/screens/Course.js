import React, { useEffect, useState } from "react";
import AdminFlashCard from "../components/AdminFlashCard";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Title from "../components/Title";
import ReactModal from "react-modal";
import Editor from "../components/Editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Course = () => {
  const [content, setContent] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [question, setQuestion] = useState("");
  const [definition, setDifinition] = useState("");

  const { course } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleDelete = (id) => {
    console.log(localStorage.getItem("x-auth-token"));
    axios({
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
      method: "delete",
      url: `${BASE_URL}learn/${id}`,
    })
      .then((res) => {})
      .catch((err) => console.log("dele error: ", err));
  };
  const handleEdit = (topic, explanation) => {
    setQuestion(topic);
    setDifinition(explanation);
    setIsOpen(true);
  };

  useEffect(() => {
    axios({
      url: `${BASE_URL}learn/${course}`,
    })
      .then((res) => {
        setContent((state) => [...res.data]);
      })
      .catch((err) => console.log(err));
  }, [content]);

  return (
    <div className="flex flex-col">
      
      <Title>{course.toUpperCase()}</Title>
      <div className="flex flex-row gap-2 bg-[090909] flex-wrap container max-w-full justify-center">
        {content.map((con, index) => (
          <AdminFlashCard
            viewOnly={pathname.includes("learn")}
            key={index}
            del={() => handleDelete(con.id)}
            edit={() => {
              navigate("/edit/", {state : {id: con.id, question: con.topic, explanation: con.explanation, category: con.category}});
            }}
            topic={con.topic}
            body={con.explanation}
          />
        ))}
      </div>
    </div>
  );
};

export default Course;
