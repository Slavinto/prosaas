"use client";

import AccountDropdownMenu from "./account-dropdown-menu";
import { Button } from "./button";
import { signIn, signOut, useSession } from "next-auth/react";
const AuthButton = () => {
    const { data: session } = useSession();

    return (
        <>
            {session ? (
                <AccountDropdownMenu />
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
