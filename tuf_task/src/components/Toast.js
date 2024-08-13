import React from "react";
import { ToastContainer } from "react-toastify";


const Toast = () => <ToastContainer

toastClassName={"right-4 mr-10 bottom-16 absolute w-fit cursor-pointer"}
bodyClassName={"flex justify-center items-center sans-sarif text-[22px] py-4 px-6 w-fit h-10 rounded-lg bg-[#e11d48]"}
newestOnTop={true}
position="top-right"
stacked={true}
className="text-white"
autoClose={100}
closeOnClick={true}
/>

export default Toast;