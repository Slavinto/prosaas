"use client";

import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarCustom = () => {
    const { data: session } = useSession();
    const imgUrl = session
        ? session.user?.image
        : "https://github.com/shadcn.png";
    return (
        <Avatar className='flex justify-center items-center'>
            <AvatarImage className='p-2 rounded-full' src={imgUrl || ""} />
            <AvatarFallback>
                {session?.user?.name?.toUpperCase().slice(0, 2)}
            </AvatarFallback>
        </Avatar>
    );
};

export default AvatarCustom;
