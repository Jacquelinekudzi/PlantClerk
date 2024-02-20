import Topbar from './Topbar';
import Sidebar from './Sidebar';
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
        <Topbar />
        <Outlet />
        <Sidebar />
        </>
    )
}

export default Layout