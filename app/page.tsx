import { Button } from "@/components/ui/button";
import { ToggleThemeButton } from "@/components/ui/toggle-theme-button";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Home = async () => {
    const session = await auth();
    if (session) {
        redirect("/dashboard");
    }
    return (
        <section className='bg-background flex items-center justify-center h-[90vh]'>
            <div className='relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12'>
                <div className='max-w-3xl mx-auto text-center'>
                    <div className=''>
                        <span className='w-auto px-6 py-3 rounded-full bg-primary'>
                            <span className='text-sm font-medium'>
                                Sort your notes easily
                            </span>
                        </span>
                        <h1 className='mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl'>
                            Create Notes with ease
                        </h1>
                        <p className='max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum consequuntur quod laborum iure omnis, a,
                            itaque aliquid esse, suscipit repellendus aut
                            officiis inventore rerum! Necessitatibus obcaecati
                            placeat mollitia exercitationem ut!
                        </p>
                    </div>
                    <div className='flex justify-center max-w-sm mx-auto mt-10'>
                        <Button size={"lg"} className='theme-button w-full'>
                            Sign Up for free
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
