import { Outlet, Link } from "react-router-dom";
import '../nav.css';

const Layout = () => {
    return (
        <header >
            <nav >
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/newEvent">NEW EVENT</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </header>

        
    )
};



export default Layout;