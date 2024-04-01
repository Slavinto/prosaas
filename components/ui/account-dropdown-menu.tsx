"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import AvatarCustom from "./avatar-custom";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { navItems } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DoorClosed } from "lucide-react";

const AccountDropdownMenu = () => {
    const { data: session } = useSession();
    const pathname = usePathname();

    if (!session) {
        return <h1>Error. User Not found!</h1>;
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} className='flex gap-1'>
                    <AvatarCustom />
                    <span className='mr-2'>My Account</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='px-4'>
                    <div className='flex flex-col space-y-1'>
                        <p className='text-sm font-medium leading-none'>
                            {session.user?.name}
                        </p>
                        <p className='text-xs leading-none text-muted-foreground'>
                            {session.user?.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {navItems.map((i) =>
                        pathname === i.href ? (
                            <DropdownMenuItem
                                className='hidden'
                                key={i.name}
                                asChild
                            >
                                {/* <span>{i.name}</span> */}
                            </DropdownMenuItem>
                        ) : (
                            <DropdownMenuItem key={i.name} asChild>
                                <Link
                                    className='cursor-pointer w-full flex justify-start gap-2 items-center px-4'
                                    href={i.href}
                                >
                                    <span>
                                        <i.icon className='w-4 h-4' />
                                    </span>
                                    {i.name}
                                </Link>
                            </DropdownMenuItem>
                        )
                    )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className='cursor-pointer w-full flex gap-2 justify-start items-center px-4'
                    onClick={() => signOut()}
                >
                    <DoorClosed className='w-4 h-4' />
                    <span>Sign Out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AccountDropdownMenu;
