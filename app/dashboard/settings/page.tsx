import SettingsForm from "@/components/ui/settings-form";
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/prisma-crud";
import type { DbUser } from "@/lib/types";

const SettingsPage = () => {
    // let session = undefined;
    // let dbUser = undefined;

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
            <SettingsForm />
        </div>
    );
};

export default SettingsPage;
