"use client";
import { redirect, useRouter } from "next/navigation";
import { Button } from "./button";
import Link from "next/link";

const CancelButton = ({
    title,
    formResetHandler,
}: // action,
{
    title: string;
    formResetHandler: () => void;
    // action: () => void;
}) => {
    const router = useRouter();
    return (
        <Link href={"#"} onClick={() => formResetHandler()}>
            Cancel
        </Link>

        // <Button type='reset' onClick={() => {}}>
        //     {title}
        // </Button>
    );
};

export default CancelButton;
