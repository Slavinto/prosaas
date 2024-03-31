"use client";

import { Button } from "./button";
import { signIn, signOut, useSession } from "next-auth/react";
const AuthButton = () => {
    const { data: session } = useSession();

    return (
        <>
            {session ? (
                <Button className='theme-button' onClick={() => signOut()}>
                    Sign Out
                </Button>
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
