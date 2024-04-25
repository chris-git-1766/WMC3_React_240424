import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/impressum">Impressum</Link>
                    </li>

                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
