"use client";
import { usePathname } from "next/navigation";
import Navbar, { UserProps } from "./Navbar";

const NavbarWrapper = ({ user }:{ user :UserProps}) => {
  const pathname = usePathname();
  const hideNavbar = pathname.startsWith("/dashboard");
  return !hideNavbar ? <Navbar user={user} /> : null;
};

export default NavbarWrapper;
