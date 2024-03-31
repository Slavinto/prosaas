"use client";

import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNav = () => {
    const pathname = usePathname();
    return (
        <nav className='grid items-start gap-2'>
            {navItems.map((i) =>
                i.href !== pathname ? (
                    <li key={i.name}>
                        <Link href={i.href}>
                            <span
                                className={cn(
                                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                                )}
                            >
                                <i.icon className='mr-2 h-4 w-4 text-primary' />{" "}
                                {i.name}
                            </span>
                        </Link>
                    </li>
                ) : (
                    <li key={i.name}>
                        <span
                            className={cn(
                                "group flex items-center rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground"
                            )}
                        >
                            <i.icon className='mr-2 h-4 w-4' /> {i.name}
                        </span>
                    </li>
                )
            )}
        </nav>
    );
};

export default DashboardNav;
