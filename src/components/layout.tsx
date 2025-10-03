import Sidebar from "./sidebar"
import { Outlet } from "react-router"

const Layout = () => {
    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <main className="flex flex-1 justify-center items-center">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
