import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import AdminDashboard from "./screens/AdminDashboard";
import Login from "./screens/Login";
import Header from "./components/Headers";
import Course from "./screens/Course";


const App = () => {
  
   return <BrowserRouter> 
   <div className="flex flex-col bg-[#0f0f0f] min-h-screen w-screen ">
      
      <Header />
      <Routes>
         <Route path="/" element={<Landing />} />
         <Route path="/admin" element={<AdminDashboard />} />
         <Route path="/login" element={<Login />} />
         <Route path="/course/">
            <Route path=":course" element={<Course />} />
         </Route>
      </Routes>
      {/* <Login /> */}
   </div>
      </BrowserRouter>
}

export default App;