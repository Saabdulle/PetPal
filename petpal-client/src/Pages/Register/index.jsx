import React, { useState } from "react";
import { Link } from "react-router-dom";
import httpClient from "../../httpClient";
import "./style.css";

const Register = () => {
  const [userChoice, setUserChoice] = useState(false);
  const [serviceChoice, setServiceChoice] = useState(false);

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
      const resp = await httpClient.post("http://localhost:5000/register", {
        userName,
        password,
      });
      window.location.href = "/login";
    } catch (error) {
      if (error.response.status == 401) {
        alert("Invalid credintals");
      }
    }
  };

  const handleSubmitService = async () => {
    try {
      const resp = await httpClient.post(
        "http://localhost:5000/service-register",
        {
          serviceName,
          servicePassword,
          serviceEmail,
        }
      );
      window.location.href = "/login";
    } catch (error) {
      if (error.response.status == 401) {
        alert("Invalid credintals");
      }
    }
  };
  return (
    <>
      <div className="which-signup">
        <h1>Sign up as ...</h1>
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
            Register
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
                Register
              </button>
              {error && <p>{error}</p>}
            </form>
            <div className="signup-link">
              {" "}
              Already have an account?
              <Link to="/login" style={{ color: "#3fa1a9" }}>
                Login
              </Link>
            </div>
          </div>
        </>
      ) : userChoice ? (
        <>
          <div className="signup-page">
            <div className="signup-service">
              {/* <h2 className='signup-heading'>
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
                  Register
                </button>
                {error && <p>{error}</p>}
              </form>
              <div className="signup-link">
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#3fa1a9" }}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Register;
