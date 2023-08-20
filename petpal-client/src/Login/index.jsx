// import React, { useRef, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../context'

// const Login = () => {

   
//     const [error, setError] = useState('')
//     const [loading, setLoading] = useState(false)
//     const[userForm, setUserForm] = useState(false)
//     const[serviceForm, setServiceForm]= useState(false)
//     const[loginEmail, setloginEmail] = useState('')
//     const[loginPassword, setloginPassword]= useState('')
//     const navigate = useNavigate()
//     const[serviceUser, setServiceUser] = useState({})
//     const usernameRef = useRef()
//     const passwordRef = useRef()
//     const { signin } = useAuth();


// const handleUserLogin = ()=>{
//     console.log("user login")
//     serviceForm?setServiceForm(!serviceForm):''
//     setUserForm(!userForm)
//   }
//   const handleServiceLogin = ()=>{
//     console.log("service login")
//     userForm?setUserForm(!userForm):''
//     setServiceForm(!serviceForm)
//   }

//   function handleUserSubmit(e) {
//     e.preventDefault()

//     try {
//         setError('')
//         // setLoading(true)
//         signin(usernameRef.current.value, passwordRef.current.value)
//         navigate("/pet-profile")    
//     } catch (error) {
//       setError('Failed to signin')  
//     }
    
//     setLoading(false)
// }

//   async  function handleSubmit(e) {
//         e.preventDefault()

//         try {
//             setError('')
//             setLoading(true)
//             const options = {
//                 method:"POST",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     username:loginEmail,
//                     password:loginPassword
//                 })
//             }
//             const response = await fetch("http://localhost:5000/services/service-login", options)
//             if (response.status === 200) {
//                 const data = await response.json()
//                 console.log(data)
//                 // now set user details to user and navigate to main page 
//                 setServiceUser(data)
//                 console.log('user.token', data.token)
//                 localStorage.setItem("token", data.token)
//                 localStorage.setItem("usertype", "service")
//                 const id = data.token
//                 navigate(`/service/profile/${id}`)
//             }
    
//         // signup(usernameRef.current.value, passwordRef.current.value)    
//         } catch (error) {
//           setError('Failed to signin')  
//         }
        
//         setLoading(false)
//     }
    
    
//   return (
   

//     <>
//      <div className='login-choice'>
//     <button onClick={handleUserLogin}>Pet owner</button>
//     <button onClick={handleServiceLogin}>Service provider</button>
//     </div>
//      {userForm?(
//      <div>
//             <h2>
//                 Login
//             </h2>
//             <form onSubmit={handleUserSubmit} className='signup-form'>
//                 <input className='signup-form-element' placeholder='Username' type='text' ref={usernameRef} name='username-form' required/>
//                 <input className='signup-form-element' placeholder='Password' type='password' ref={passwordRef} name='password-form' required/>
//                 <button className='singup-button' disabled={loading} type='submit'>Login</button>
//                 {error && <p>{error}</p>}
//             </form>
//         </div>): serviceForm?(
//         <div>
//             <h2>
//                 Login
//             </h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor='username-form'>
//                     Username: 
//                 </label>
//                 <input type='text' value={loginEmail} onChange={(e) => setloginEmail(e.target.value)} placeholder={"Username or Email"} name='username-form' required/>
//                 <label htmlFor='password-form'>
//                     Password: 
//                 </label>
//                 <input type='password' value={loginPassword} onChange={(e) => setloginPassword(e.target.value)} placeholder={"Enter Password"} name='password-form' required/>
//                 <button disabled={loading} type='submit'>Login</button>
//                 {error && <p>{error}</p>}
//             </form>
//         </div>):''}
        
//         <div>Dont have an account? <Link to='/signup'>Signup</Link></div>
//     </>
//   )
// }

// export default Login