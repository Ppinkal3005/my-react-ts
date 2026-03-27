import { useNavigate } from "react-router-dom";
import './sidebar.css';

interface SidebarProps {
    isOpen: boolean;
    closeMenu: () => void;
}

function Sidebar({ isOpen, closeMenu }: SidebarProps) {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
        closeMenu();
    };

    return (
        <>
            {isOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>Menu</h2>
                    <button className="close-btn" onClick={closeMenu}>&times;</button>
                </div>
                <nav className="sidebar-nav">
                    <button onClick={() => handleNavigation('/home')}>Home</button>
                    <button onClick={() => handleNavigation('/about')}>About</button>
                    <button onClick={() => handleNavigation('/contact')}>Contact</button>
                    <button className="logout-btn" onClick={() => handleNavigation('/')}>Logout</button>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;
