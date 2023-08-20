import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Conversation from "../../Components/Conversation";
import { useAuth } from "../../context";
import Cookies from 'js-cookie';
import "./style.css";

function NavBar() {
  const { username, logout } = useAuth();
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // const { user_id } = useAuth()
  // const [conversations, setConversations] = useState([]);
  // const [selectedConversation, setSelectedConversation] = useState(null);

  // async function getConversationsByUser(userId) {
  //   const response = await fetch(`http://localhost:5000/conversations?user_id=${userId}`);
  //   const data = await response.json();
  //   setConversations(data.conversations);
  // }

  // function handleCloseConversation() { 
  //   setSelectedConversation(null);
  // }

  // useEffect(() => {
  //   // getConversationsByUser(user.id);
  //   getConversationsByUser(user_id);
  // }, []);

  const handleLogout = () => {
    // Remove the cookie with the authentication token
    Cookies.remove('authToken');

    // Call the logout function to clear the user state
    logout();
  };

  const activeStyle = {
    // textDecoration: "underline",
    color: "white", 
    textShadow: "2px 2px black",
  };
  function openMenu() {
    setHamburgerClicked(!hamburgerClicked);
  }
  function closeMenu() {
    setHamburgerClicked(false)
  }

  // function openMessages(){
  //   setIsOpen(!isOpen)
  //   console.log('open')
  // }
  // function closeMessages(){
  //   setIsOpen(!isOpen)
  //   console.log('close')
  // }

  // const handleButtonClick = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <nav className="navbar">
        <div className="desktop">
          <div className="nav-logo">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              <img src="../../../paw.png" alt="paw" className="nav-image" />
            </NavLink>
          </div>
          {/* <h1 className="pet-pal">PetPal</h1> */}
          {
            username ? <ul className="nav-links">
              <li className="navbar-list-item">
              <NavLink 
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/services/filter/all"
              >
                  Explore Services
              </NavLink>
            </li>
            
            <li className="navbar-list-item"> 
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/pet"
              >
                My Pet Profile
              </NavLink>
            </li>
            <li className="navbar-list-item" onClick={handleLogout}> 
              Logout
            </li>
            {/* <li className="navbar-list-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/petinfo"
              >
                Pet Tips
              </NavLink>
            </li> */}
            
          </ul> : null
          }
          
        </div>
        <div className="mobile-display">
          <div className="nav-section">

          <div className="nav-logo">
          <NavLink 
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/'
          >
            <img src="../../../paw.png" alt="paw" className="nav-image"/>
            
            
          </NavLink>
          
        </div>

            {
              username ? <div
              className={hamburgerClicked ? "clicked" : "container"}
              onClick={openMenu}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div> : null
            }
            
            
          </div>

          {hamburgerClicked ? <div className="menu-list">
            <ul className="nav-links-menu">
              <li className='menu-list-item' onClick={closeMenu}>
              <NavLink 
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/services/filter/all"
              >
                  Explore Services
              </NavLink>
              </li>
              <li className='menu-list-item' onClick={closeMenu}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/pet-profile"
                >
                  My Pet Profile
                </NavLink>
              </li>
             
              
            </ul>
          </div> : null}
        </div>
      </nav>
      <Outlet />
      {/* <div className={isOpen ? "messages" : "closed"}>
        <div className={isOpen ? "close-button-div" : "no-image"}>
          <h2 className="messages-heading">Messages</h2>
          <button onClick={closeMessages} className={isOpen ? "close-button" : "no-image"}>X</button>
        </div>
        <div className={isOpen ? "messages-holder" : "no-image"}>
        {conversations.map((conversation) => (
        <div
          className='conversation-box'
          key={conversation.conversation.id}
          onClick={() => setSelectedConversation(conversation.conversation.id)}
        >
          <p className="conversation-box-username">{conversation.service.username}</p>
        </div>
      ))}
      {selectedConversation && (
          <Conversation conversationId={selectedConversation} handleCloseConversation={handleCloseConversation} />
      )}
        </div>
            
            <img src="../../../chat.png" alt="chat" onClick={openMessages} className={isOpen ? "no-image" : "yes-image"}/>
      </div>  */}
    </>
  );
}

export default NavBar;
