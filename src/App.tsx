import './App.css'
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import HomePage from "./pages/HomePage";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import Services from "./components/sections/Services";
// import Popular from './components/sections/Popular';

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                {/* // <BrowserRouter>
                // <Routes>
                //   <Route path="/login" element={<Login />} />
                //   <Route path="/signup" element={<SignUp />} />
                //   <Route path="/" element={<HomePage />} /> */}
                {/* // </Routes>
                // </BrowserRouter> */}
                <NavBar />
                <HeroSection />
                <Services />
                {/* <Popular /> */}
                <Footer />
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;