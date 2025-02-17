"use client"
import { useState, useEffect } from "react";
import { Home, Folder, FileText, MessageCircle, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const path = usePathname();
  const [active, setActive] = useState(path);
const [isOpen,setIsOpen]=useState(false)
  useEffect(() => {
    setActive(path);
  }, [path]);

  const items = [
    { id: 1, title: "Home", url: "/", icon: <Home size={20} /> },
    { id: 2, title: "Projects", url: "/dashboard/projects", icon: <Folder size={20} /> },
    { id: 3, title: "Blogs", url: "/dashboard/blogs", icon: <FileText size={20} /> },
    { id: 4, title: "Messages", url: "/dashboard/messages", icon: <MessageCircle size={20} /> },
  ];

  return (
    <div>
      <button
        className="sm:hidden p-3 text-white bg-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>
      <div className={`h-screen  bg-gray-900 z-10 text-white p-5 fixed sm:relative duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}>
        <h2 className="text-2xl font-bold mb-5">Sidebar</h2>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                active === item.url ? "bg-blue-500" : "hover:bg-gray-700"
              }`}
              onClick={() => router.push(item.url)}
            >
              {item.icon} {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
