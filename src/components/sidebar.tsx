import { MenuIcon ,DollarSignIcon, HouseIcon } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
type Item = {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    path: string;
}
const Sidebar = ( ) => {
    const [open, setOpen] = useState(false);

    const items: Item[] = [ { name: "Dashboard",
                    icon: HouseIcon,
                    path: "/"
                },
                 {
                    name: "Income",
                    icon: DollarSignIcon,
                    path: "/income"
                },
                {
                    name: "Budget",
                    icon: DollarSignIcon,
                    path: "/budget"
                },
                {
                    name: "Expenses",
                    icon: DollarSignIcon,
                    path: "/expenses"
                }
            ]


    return (
        
            <aside className={open ? "h-screen w-64 bg-slate-800 transition-all duration-300" : "h-screen w-16 bg-slate-800 transition-all duration-300"}>
                <div className="border-b border-gray-600 p-4 flex justify-between items-center h-[64px]">
                    <h1 className={!open ? "text-2xl font-bold text-white hidden" : "text-2xl font-bold text-white"}>Sidebar</h1>
                    <MenuIcon className={open ? "w-6 h-6 text-white cursor-pointer" : "w-6 h-6 text-white cursor-pointer"} onClick={() => {setOpen(!open)}}/>
                </div>
                <ul className="flex flex-col">
                {items.map((item, index) => (
                    <li key={index} className="border-b border-gray-600 p-2 bg-slate-600 hover:bg-slate-700 transition-all duration-900">
                        <Link to={item.path} className="flex items-center gap-2">
                            <item.icon className="w-[24px] h-[24px] transition-all duration-900"/>
                            {open ? item.name : ""}
                        </Link>
                    </li> 
                ))}
                </ul>
            </aside>
    )
}

export default Sidebar
