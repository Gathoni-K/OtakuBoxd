import Layout from "../components/layout/Layout";
import HeroSection from "../components/sections/HeroSection";
import Services from "../components/sections/Services";
import Popular from '../components/sections/Popular';


const HomePage = () => {
    return (
        <Layout>
                <HeroSection />
                <Services />
                <Popular />  
        </Layout>
    )
}

export default HomePage