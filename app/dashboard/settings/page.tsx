import {
    Card,
    CardContent,
    CardDescription,
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
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/prisma-crud";
import type { DbUser } from "@/lib/types";

const SettingsPage = async () => {
    let session = undefined;
    let dbUser = undefined;
    try {
        session = await auth();
        if (
            !session ||
            !session.user ||
            !session.user.email ||
            !session.user.name
        ) {
            throw new Error("Error. Failed to get user session.");
        } else {
            dbUser = (await getUser({ email: session.user.email })) as DbUser;
            if (!dbUser) {
                throw new Error("Error. User not found in database.");
            }
        }
    } catch (error) {
        console.error(JSON.stringify(error));
        return (
            <h1>
                {error instanceof Error
                    ? error.message
                    : "Error. Failed to get user data."}
            </h1>
        );
    }
    return (
        <div className='grid items-start gap-8'>
            <div className='flex items-center justify-between px-2'>
                <div className='grid gap-1'>
                    <h1 className='text-3xl md:text-4xl'>Settings</h1>
                    <p className='text-lg text-muted-foreground'>
                        your profile settings
                    </p>
                </div>
            </div>
            <Card>
                <form>
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
                                    defaultValue={dbUser.name}
                                />
                            </div>
                            <div className='space-y-1'>
                                <Label>Email</Label>
                                <Input
                                    name='email'
                                    defaultValue={dbUser.email}
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
                                    defaultValue={dbUser.colorScheme}
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
                                            <SelectItem
                                                className='cursor-pointer'
                                                value='theme-yellow'
                                            >
                                                Yellow
                                            </SelectItem>
                                            <SelectItem
                                                className='cursor-pointer'
                                                value='theme-orange'
                                            >
                                                Orange
                                            </SelectItem>
                                            <SelectItem
                                                className='cursor-pointer'
                                                value='theme-rose'
                                            >
                                                Rose
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </form>
            </Card>
        </div>
    );
};

export default SettingsPage;
