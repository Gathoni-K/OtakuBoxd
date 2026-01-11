import './App.css'
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { WatchlistProvider } from './contexts/WatchListContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Anime from "./pages/Anime";
import Lists from "./pages/Lists";
import Journal from './pages/Journal';
import Layout from "./components/layout/Layout"; 

function App() {
    return (
        <ThemeProvider>
        <AuthProvider>
            <WatchlistProvider>
            <BrowserRouter>
            <Routes>
                {/* Wrap pages that need NavBar */}
                <Route path="/" element={<Layout><HomePage /></Layout>} />
                <Route path="/anime" element={<Layout><Anime /></Layout>} />
                <Route path="/lists" element={<Layout><Lists /></Layout>} />
                <Route path="/journal" element={<Layout><Journal /></Layout>} />
                
                {/* Login/Signup without Layout */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            </BrowserRouter>
            </WatchlistProvider>
        </AuthProvider>
        </ThemeProvider>
    );
}

export default App;