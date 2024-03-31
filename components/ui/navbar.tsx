import Link from "next/link";
import { ToggleThemeButton } from "./toggle-theme-button";
import AuthButton from "./auth-button";

const Navbar = () => {
    return (
        <nav className='bg-background border-b h-[10vh] flex items-center'>
            <div className='container flex items-center justify-between'>
                <Link href={"/"}>
                    <h1 className='font-bold text-3xl'>
                        Pro<span className='text-primary'>Saas</span>
                    </h1>
                </Link>
                <div className='flex items-center gap-x-5'>
                    <AuthButton />
                    <ToggleThemeButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
