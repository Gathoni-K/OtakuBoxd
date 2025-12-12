import { useEffect, useState } from "react";
import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
import NavBar from "./components/layout/NavBar";


function App() {

    const [isDark, setIsDark ] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
      document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);
  
  return (

    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Login />} />
    //   <Route path="/signup" element={<SignUp />} />

      
    // </Routes>
    // </BrowserRouter>

    <NavBar isDark={isDark} setIsDark={setIsDark} 
    isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    
    

  )
}

export default App
