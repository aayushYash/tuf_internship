import React, { useEffect, useState } from "react";
import AdminFlashCard from "../components/AdminFlashCard";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



import Title from "../components/Title";

const Course = () => {

    const [content, setContent] = useState([]);

    const { course } = useParams();

    const BASE_URL = process.env.REACT_APP_BASE_URL
 
    const handleDelete = (id) => {
        console.log(localStorage.getItem('x-auth-token'));
        axios({
            headers: {
                "x-auth-token": localStorage.getItem('x-auth-token'),
            },
            method: 'delete',
            url: `${BASE_URL}learn/${id}`,
        }).then((res) => {
            
        }).catch(err => console.log("dele error: ",err));
    }
    const handleEdit =() => {}

    useEffect(() => {
        axios({
            url: `${BASE_URL}learn/${course}`
        }).then((res) => {
            setContent(state => [...res.data]);
        }).catch((err) => console.log(err));
    } ,[content])


    return <div className="flex flex-col">    <Title>{course.toUpperCase()}</Title>
    <div className="flex flex-row gap-2 bg-[090909] flex-wrap container max-w-full justify-center">

        {content.map((con, index) => <AdminFlashCard key={index} del={() => handleDelete(con.id)} edit={handleEdit} topic={con.topic} body={con.explanation} />)}
    </div>
    </div>
}

export default Course;