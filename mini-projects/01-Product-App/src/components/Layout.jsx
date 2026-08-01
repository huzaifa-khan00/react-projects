import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {

    return (
        <>
            <Navbar />
            <Outlet />
            <footer>I Am Footer Content Here</footer>
        </>    
    )
}

export default Layout;