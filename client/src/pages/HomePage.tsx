import HeroSection from "../components/sections/HeroSection";
import Services from "../components/sections/Services";
import Popular from '../components/sections/Popular';


const HomePage = () => {
    return (
        <div>
                <HeroSection />
                <Services />
                <Popular />  
        </div>
    )
}

export default HomePage