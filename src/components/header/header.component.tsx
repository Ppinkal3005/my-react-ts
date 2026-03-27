import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../sidebar/sidebar.component";
import './header.css';

function HeaderComponent() {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} closeMenu={() => setIsSidebarOpen(false)} />

            <header className="main-header">
                <div className="header-logo">
                    <h1>My App</h1>
                </div>

                <nav className="desktop-nav">
                    <button onClick={() => handleNavigation('/home')}>Home</button>
                    <button onClick={() => handleNavigation('/about')}>About</button>
                    <button onClick={() => handleNavigation('/contact')}>Contact</button>
                    <button onClick={() => handleNavigation('/')}>Logout</button>
                </nav>

                <button className="hamburger-btn" onClick={toggleSidebar}>
                    <div className="hamburger-icon"></div>
                </button>
            </header>
        </>
    );
}

export default HeaderComponent;