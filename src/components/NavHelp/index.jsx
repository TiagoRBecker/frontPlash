"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const NavHelp = () => {
    const path = usePathname()
   useEffect(()=>{},[path])
  return (
   <h1></h1>
  );
};

export default NavHelp;
