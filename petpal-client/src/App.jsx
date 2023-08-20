import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
// import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
// import SignUp from "./Signup";
import { NavBar } from "./layout";
import Services from "./Services";
import { PetProfile, Message, Register, Login, UserProfile } from "./Pages";
import CardProfile from "./Components/PetProfileForm";
import { AuthProvider } from "./context"
import { ProviderPage, ServiceProfile, ServiceProfilePage, PetInfo} from "./Pages"
import './App.css'


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home/>}/>
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/services/filter/:id" element={<Services/>} />
            <Route path="/user" element={<PrivateRoute><UserProfile/></PrivateRoute>} />
            <Route path="/pet" element={<PrivateRoute><PetProfile/></PrivateRoute>} />
            <Route path="/services/:id" element={<PrivateRoute><ProviderPage/></PrivateRoute>} />
            <Route path="/service-profile" element = {<PrivateRoute><ServiceProfile/></PrivateRoute>}/>
            <Route path="/service/profile/:userId" element = {<ServiceProfilePage/>}/>
            <Route path="/pet-profile" element={<PrivateRoute><CardProfile/></PrivateRoute>} />
            <Route path="/Message" element={<PrivateRoute><Message /></PrivateRoute>} />
          </Route>
        </Routes>
      </AuthProvider>
      
    </div>
  );
}

export default App;
