import Link from "next/link";

import { Home, Folder, FileText, MessageCircle } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },    {
    title: "Projects",
    url: "/dashboard/projects",
    icon: Folder, // Changed to Folder icon
  },
  {
    title: "Blogs",
    url: "/dashboard/blogs",
    icon: FileText, // Changed to FileText icon
  },
  {
    title: "Messages",
    url: "/dashboard/messages",
    icon: MessageCircle, // Changed to MessageCircle icon
  },
];

const Sidebar = () => {
  return (
    <div className="min-h-screen p-4 rounded-xl">
      <ul className="space-y-4">
        <li>
          {items?.map((item) => (
            <Link
            key={item?.title}
              href={item?.url}
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
            >
            <item.icon />
              <span>{item?.title}</span>
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
