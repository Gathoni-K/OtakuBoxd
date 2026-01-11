import NavBar from "./NavBar";
import Footer from "./Footer";
import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="">
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;