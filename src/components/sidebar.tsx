import { HouseIcon } from "lucide-react";

type Item = {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    path: string;
}
const Sidebar = ( ) => {

    const items: Item[] = [ { name: "Dashboard",
                    icon: HouseIcon,
                    path: "/"
                },
                 {
                    name: "Home",
                    icon: HouseIcon,
                    path: "/home"
                },
            ]

    return (
        <div>
            <aside>
                <ul>
                {items.map((item, index) => (
                        <li key={index} className="">
                            <a href={item.path}>
                            <item.icon />
                            {item.name}
                            </a>
                        </li>
                ))}
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar
