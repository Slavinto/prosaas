import DashboardNav from "@/components/ui/dashboard-nav";

const DashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='flex flex-col space-y-6 mt-10'>
            <div className='container grid flex-1 gap-12 md:grid-cols-[200px_1fr]'>
                <aside className='hidden w-[200px] flex-col md:flex'>
                    <DashboardNav />
                </aside>
                <main className=''>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ullam at commodi itaque qui beatae aliquid laborum natus,
                    tempora tenetur quibusdam, asperiores odio, minima in.
                    Officia vitae animi odio quibusdam numquam.
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
