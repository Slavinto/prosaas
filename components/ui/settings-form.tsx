"use client";

import ButtonForm from "@/components/ui/button-form";
import CancelButton from "@/components/ui/cancel-button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getUser } from "@/lib/prisma-crud";
import { DbUser } from "@/lib/types";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { submitSettingsForm } from "@/lib/actions";

const SettingsForm = () => {
    const { data: session } = useSession();
    const [dbUser, setDbUser] = useState<DbUser>();
    const [username, setUsername] = useState("");
    const [colorScheme, setColorScheme] = useState("");

    useEffect(() => {
        const fetchDbUser = async () => {
            try {
                if (
                    !session ||
                    !session.user ||
                    !session.user.email ||
                    !session.user.name
                ) {
                    throw new Error("Error. Failed to get user session.");
                } else {
                    const dbUser = (await getUser({
                        email: session.user.email,
                    })) as DbUser;
                    console.log(dbUser);
                    if (!dbUser) {
                        throw new Error("Error. User not found in database.");
                    } else {
                        setDbUser(dbUser);
                        setUsername(dbUser.name);
                        setColorScheme(dbUser.colorScheme);
                    }
                }
            } catch (error) {
                console.error(JSON.stringify(error));
                redirect("/");
            }
        };

        fetchDbUser();
    }, [session]);
    const formResetHandler = () => {
        setUsername(dbUser?.name ?? "");
        setColorScheme(dbUser?.colorScheme || "theme-purple");
    };

    const submitSettingsFormWithEmail = submitSettingsForm.bind(
        null,
        dbUser?.email || ""
    );

    return (
        <Suspense>
            <Card>
                <form action={submitSettingsFormWithEmail}>
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>
                            please provide information about yourself
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='space-y-2'>
                            <div className='space-y-1'>
                                <Label>Name</Label>
                                <Input
                                    name='name'
                                    type='text'
                                    id='name'
                                    placeholder='Enter your name'
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </div>
                            <div className='space-y-1'>
                                <Label>Email</Label>
                                <Input
                                    name='email'
                                    value={dbUser?.email}
                                    type='email'
                                    id='email'
                                    placeholder='Enter your name'
                                    disabled
                                />
                            </div>
                            <div className='space-y-1'>
                                <Label>Color Scheme</Label>
                                <Select
                                    name='color'
                                    value={colorScheme}
                                    onValueChange={(theme) =>
                                        setColorScheme(theme)
                                    }
                                >
                                    <SelectTrigger className='w-full'>
                                        <SelectValue placeholder='Select a color' />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Colors</SelectLabel>
                                            <DropdownMenuSeparator />
                                            <SelectItem
                                                className='cursor-pointer'
                                                value='theme-red'
                                            >
                                                Red
                                            </SelectItem>
                                            <SelectItem
                                                className='cursor-pointer'
                                                value='theme-green'
                                            >
                                                Green
                                            </SelectItem>
                                            <SelectItem
                                                className='cursor-pointer'
                                                value='theme-blue'
                                            >
                                                Blue
                                            </SelectItem>
                                            <SelectItem
                                                className='cursor-pointer'
                                                value='theme-purple'
                                            >
                                                Purple
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className='flex gap-4'>
                        <ButtonForm title='Submit' classNames='theme-button' />

                        <CancelButton
                            title='Reset'
                            formResetHandler={formResetHandler}
                        />
                    </CardFooter>
                </form>
            </Card>
        </Suspense>
    );
};

export default SettingsForm;
