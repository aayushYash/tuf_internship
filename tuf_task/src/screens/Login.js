import React, { useState } from "react";
import Header from "../components/Headers";
import InputText from "../components/InputText";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast, ToastTransition } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel } from "@fortawesome/free-solid-svg-icons";
import Toast from "../components/Toast";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  console.log(BASE_URL);

  const loginHandler = (e) => {
    e.preventDefault();
    console.log("login called", username, password);
    axios({
      url: `${BASE_URL}auth/login`,
      method: "POST",
      withCredentials: false,
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data, "||", res);
        localStorage.setItem("x-auth-token", res.data["x-auth-token"]);
        
        navigate("/admin");
      })
      .catch((err) => {
        toast(err.toString().split(":")[1]);
        console.log("Error Occurred: " + err);
      });
  };

  return (
    <div className="flex w-full items-center justify-center flex-col overflow-hidden">
      {/* <Header /> */}
      <div className="min-w-[312px] h-[400px] bg-[#191919] px-8 py-10 rounded-lg">
        <Toast />
        {/* logo */}
        <h1 class="text-[#e11d48] font-amaranth font-bold text-5xl ">
          takeUforward
        </h1>
        {/* form */}
        <form className="mt-3 py-4">
          <InputText
            type={"text"}
            placeholder={"Email"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputText
            type={"password"}
            placeholder={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-right text-[#e11d48] font-bold">
            Forgot Password?
          </p>
          <button
            className="mt-2 container py-2 bg-[#e11d48] rounded font-bold text-white uppercase space-x-1"
            onClick={loginHandler}
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="text-[white]">
        <h1>Testing Credentials</h1>
        <p>Userid: test2</p>
        <p>Password: omg2</p>
      </div>
    </div>
  );
};

export default Login;
