import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import AxiosClient from "../../Common";
// import AxiosClient from "../../Common";

const Login = () => {
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Email, Password, ":: :: ::");
    AxiosClient.post("user/login", { email: Email, password: Password }).then(
      (res) => {
        console.log(res);
      }
    );
  };
  return (
    <div className="container">
      <h1 className="font-bold text-xl ">Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id  ">Id</label>
        <input
          type="text"
          name="id"
          id="id"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          // value={Password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
