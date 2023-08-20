import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import httpClient from "../../httpClient";
import { useAuth } from "../../context";
import "./style.css";

const Login = () => {
  const [userChoice, setUserChoice] = useState(false);
  const [serviceChoice, setServiceChoice] = useState(false);
  const { user } = useAuth;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [serviceName, setServiceName] = useState("");
  const [servicePassword, setServicePassword] = useState("");
  const [serviceEmail, setServiceEmail] = useState("");

  const handleUserRegister = () => {
    console.log("user register");
    serviceChoice ? setServiceChoice(!serviceChoice) : "";
    setUserChoice(!userChoice);
  };

  const handleServiceRegister = () => {
    console.log("service register");
    userChoice ? setUserChoice(!userChoice) : "";
    setServiceChoice(!serviceChoice);
  };

  const handleSubmitUser = async () => {
    try {
      const resp = await httpClient.post("http://localhost:5000/login", {
        userName,
        password,
      });
      window.location.href = "/";
    } catch (error) {
      if (error.response.status == 401) {
        alert("Invalid credintals");
      }
    }
  };

  const handleSubmitService = async () => {
    try {
      const resp = await httpClient.post(
        "http://localhost:5000/services/service-login",
        {
          serviceName,
          serviceEmail,
          servicePassword,
        }
      );
      console.log("done");

      // const id = await user.id
      // console.log(user.id)
      window.location.href = "/service-profile";
      // console.log(user.id)
    } catch (error) {}
  };
  return (
    <>
      <div className="which-signup">
        <h1>Login as ...</h1>
        <button
          onClick={handleUserRegister}
          className={userChoice ? "clicked" : "not-clicked"}
        >
          Pet owner
        </button>
        <button
          onClick={handleServiceRegister}
          className={serviceChoice ? "clicked" : "not-clicked"}
        >
          Service provider
        </button>
      </div>
      {serviceChoice || userChoice ? null : (
        <div className="paw-prints">
          <div className="paw-print-1">
            <img className="pad" src="../../../paw.png" alt="paw" />
          </div>

          <div className="paw-print-2">
            <img src="../../../paw.png" alt="paw" className="pad" />
          </div>

          <div className="paw-print-3">
            <img src="../../../paw.png" alt="paw" className="pad" />
          </div>

          <div className="paw-print-4">
            <img src="../../../paw.png" alt="paw" className="pad" />
          </div>

          <div className="paw-print-5">
            <img src="../../../paw.png" alt="paw" className="pad" />
          </div>

          <div className="paw-print-6">
            <img src="../../../paw.png" alt="paw" className="pad" />
          </div>

          <div className="paw-print-7">
            <img src="../../../paw.png" alt="paw" className="pad" />
          </div>

          <div className="paw-print-8">
            <img src="../../../paw.png" alt="paw" className="pad" />
          </div>
        </div>
      )}

      {serviceChoice ? (
        <>
          <div className="signup-service">
            {/* <h2>
            Login
        </h2> */}
            <form className="signup-form">
              <input
                className="signup-form-element"
                placeholder="Username"
                type="text"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                name="service-username-form"
                required
              />
              <input
                className="signup-form-element"
                placeholder="Password"
                type="password"
                value={servicePassword}
                onChange={(e) => setServicePassword(e.target.value)}
                name="service-password-form"
                required
              />
              <input
                className="signup-form-element"
                placeholder="Email"
                type="email"
                value={serviceEmail}
                onChange={(e) => setServiceEmail(e.target.value)}
                name="service-password-form"
                required
              />
              <button
                className="singup-button"
                type="button"
                onClick={() => handleSubmitService()}
              >
                Login
              </button>
              {error && <p>{error}</p>}
            </form>
            <div className="signup-link">
              {" "}
              Don't have an account?{" "}
              <Link to="/signup" style={{ color: "#3fa1a9" }}>
                Sign up
              </Link>
            </div>
          </div>
        </>
      ) : userChoice ? (
        <>
          <div className="signup-service">
            {/* <h2>
            Login
        </h2> */}
            <form className="signup-form">
              <input
                className="signup-form-element"
                placeholder="Username"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="username-form"
                required
              />
              <input
                className="signup-form-element"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password-form"
                required
              />
              <button
                className="singup-button"
                type="button"
                onClick={() => handleSubmitUser()}
              >
                Login
              </button>

              {error && <p>{error}</p>}
            </form>
            <div className="signup-link">
              Don't have an account?{" "}
              <Link to="/signup" style={{ color: "#3fa1a9" }}>
                Sign up
              </Link>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Login;
