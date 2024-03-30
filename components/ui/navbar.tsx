import Link from "next/link";
import React from "react";
import { ToggleThemeButton } from "./toggle-theme-button";

const Navbar = () => {
    return (
        <nav className='border-b h-[10vh] flex items-center'>
            <div className='container flex items-center justify-between'>
                <Link href={"/"}>
                    <h1 className='font-bold text-3xl'>ProSaas</h1>
                </Link>
                <ToggleThemeButton />
            </div>
        </nav>
    );
};

export default Navbar;
