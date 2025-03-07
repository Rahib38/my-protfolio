"use client";
import Link from "next/link";
import Modal from "./Modal";
import { useState } from "react";

import { usePathname } from "next/navigation";
import ProfileDropDown from "./ProfileDropDown ";

export type UserProps = {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
};

const Navbar = ({ user }: { user: UserProps }) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  return (
    <>
      <header className="top-0 z-20 w-full bg-white dark:bg-black border-b shadow-lg shadow-slate-700/5 sticky">
        <div className="relative mx-auto max-w-full lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium max-w-[1200px] mx-auto"
            role="navigation"
          >
            <Link className="flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1" href="/">
              <span className="text-2xl font-semibold">Nadim</span>
            </Link>
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
                  : ""
              }`}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-emerald-500 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                isToggleOpen ? "visible opacity-100 backdrop-blur-sm" : "invisible opacity-0"
              }`}
            >
              {[
                { name: "Home", path: "/" },
                { name: "Projects", path: "/projects" },
                { name: "Blog", path: "/blogs" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path} role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    href={item.path}
                    className={`flex items-center gap-2 py-4 transition-colors duration-300 lg:px-8 ${
                      pathname === item.path ? "text-blue-500 font-bold" : "hover:text-blue-500 focus:text-blue-500"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
              {user?.user ? <ProfileDropDown user={user} /> : <Modal />}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
