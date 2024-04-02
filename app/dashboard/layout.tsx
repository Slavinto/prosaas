import DashboardNav from "@/components/ui/dashboard-nav";
import { auth } from "@/lib/auth";
import { createUser, getUser } from "@/lib/prisma-crud";
import { redirect } from "next/navigation";

const DashboardLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const session = await auth();
    if (
        !session ||
        !session.user ||
        !session.user.email ||
        !session.user.name
    ) {
        redirect("/");
    }

    const userData = {
        email: session.user.email,
        name: session.user.name.trim(),
        profileImage: session.user.image || "",
    };
    const dbuser = await getUser(userData);
    console.log({ dbuser });
    if (!dbuser) {
        const dbuser = await createUser(userData);
        console.log({ dbuser });
    }
    return (
        <div className='flex flex-col space-y-6 mt-10'>
            <div className='container grid flex-1 gap-12 md:grid-cols-[200px_1fr]'>
                <aside className='hidden w-[200px] flex-col md:flex'>
                    <DashboardNav />
                </aside>
                <main className=''>{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
