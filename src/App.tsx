import './App.css'
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Anime from "./pages/Anime";



function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                 <BrowserRouter>
                 <Routes>
                   <Route path="/login" element={<Login />} />
                   <Route path="/signup" element={<SignUp />} />
                  <Route path="/" element={<HomePage />} /> 
                  <Route path="/anime" element={<Anime />} />
                </Routes>
                 </BrowserRouter>

                 
                
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;