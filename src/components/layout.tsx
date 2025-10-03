import Sidebar from "./sidebar"
import { Outlet } from "react-router"

const Layout = () => {
    return (
        <div>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
