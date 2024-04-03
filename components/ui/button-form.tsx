"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

const ButtonForm = ({
    title,
    variant,
    classNames,
}: {
    title: string;
    variant?:
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost"
        | "link"
        | null
        | undefined;
    classNames?: string;
}) => {
    const status = useFormStatus();
    // console.log({ status });
    return !status.pending ? (
        <Button className={classNames} variant={variant}>
            {title}
        </Button>
    ) : (
        <Button className={classNames} variant={variant} disabled>
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            Please wait
        </Button>
    );
};

export default ButtonForm;
