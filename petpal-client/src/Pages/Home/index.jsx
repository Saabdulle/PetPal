import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import "./style.css";

const Home = () => {
  const { username } = useAuth();

  return (
    <div className="home-page">
      <div className="backg-dog">
        <div className="welcome-and-image">
          {/* <h1 className='welcome'>Welcome</h1>  */}
          <h1 className="pet-pal">
            Pet{" "}
            <img src="../../../paw.png" alt="paw" className="welcome-image" />{" "}
            Pal
          </h1>
        </div>
        <div className="line"></div>
        <em>All your pet needs in one convenient place</em>

        {!username ? (
          <div className="buttons-home">
            <Link
              style={{ color: "#1746a2", textDecoration: "none" }}
              to="/login"
            >
              <button className="signup-home">Login</button>
            </Link>
            <Link
              style={{ color: "#1746a2", textDecoration: "none" }}
              to="/signup"
            >
              <button className="signup-home">Signup</button>
            </Link>
          </div>
        ) : (
          <h2 className="welcome">Welcome {username}</h2>
        )}

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

        {!username ? (
          <div className="descriptions">
            <div className="owners">
              <h3>Owners</h3>
              <p className="description">
                Browse pet services by location, contact services and view top
                tips for caring for your pet{" "}
              </p>
            </div>
            <div className="providers">
              <h3>Service Providers</h3>
              <p className="description">
                Connect with new potential customers and show your availability
              </p>
            </div>
          </div>
        ) : null}

        {/* <div className='message-button-div'><Link 
                style={{ color: 'white', textDecoration: "none"}}
                to="/services"
              > <h2>Chats</h2>
                <img src="../../../chat.png" alt="chat" className='message-button'/>
                
              </Link>
          
            
        </div> */}

        <div className="link-and-dog">
          <Link
            style={{ color: "#1746a2", textDecoration: "none" }}
            to="/services/filter/all"
          >
            <button className="home-links">Explore Services</button>
          </Link>
          <Link
            style={{ color: "#1746a2", textDecoration: "none" }}
            to="/pet-profile"
          >
            <button className="home-links">Create Pet Profile</button>
          </Link>
          <img src="../../Subject.png" alt="dog" className="dog-pic" />
        </div>
      </div>

      <div className="services">
        <Link
          style={{ color: "#070707", textDecoration: "none" }}
          to="/services/filter/1"
        >
          <div className="service">
            Sitters
            <img src={"../../dog_sitter3.png"} className="service-icon" />
          </div>
        </Link>
        <Link
          style={{ color: "#070707", textDecoration: "none" }}
          to="/services/filter/2"
        >
          <div className="service">
            Walkers
            <img src={"../../dog_walker.png"} className="service-icon" />
          </div>
        </Link>
        <Link
          style={{ color: "#070707", textDecoration: "none" }}
          to="/services/filter/4"
        >
          <div className="service">
            Vets
            <img src={"../../vet.png"} className="service-icon" />
          </div>
        </Link>
        <Link
          style={{ color: "#070707", textDecoration: "none" }}
          to="/services/filter/3"
        >
          <div className="service">
            Groomers
            <img src={"../../dog_groomer.png"} className="service-icon" />
          </div>
        </Link>

        <Link
          style={{ color: "#070707", textDecoration: "none" }}
          to="/services/filter/5"
        >
          <div className="service">
            Trainers
            <img src={"../../dog_trainer.png"} className="service-icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
