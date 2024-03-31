"use client";

import AvatarCustom from "./avatar-custom";
import { Button } from "./button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./dropdown-menu";
import { signIn, signOut, useSession } from "next-auth/react";
const AuthButton = () => {
    const { data: session } = useSession();

    return (
        <>
            {session ? (
                // <Button
                //     className='theme-button flex items-center'
                //     onClick={() => signOut()}
                // >
                //     <AvatarCustom />
                //     <span className='pr-2'>Sign Out</span>
                // </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"} className='flex gap-1'>
                            <AvatarCustom />
                            <span className='mr-2'>My Account</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <>
                    <Button className='theme-button' onClick={() => signIn()}>
                        Sign In
                    </Button>
                    <Button variant={"secondary"}>Sign Up</Button>
                </>
            )}
        </>
    );
};

export default AuthButton;
