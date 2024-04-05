import ButtonForm from "@/components/ui/button-form";
import { Card, CardContent } from "@/components/ui/card";
import { billingPlans } from "@/lib/constants";
import { CheckCircle, CheckCircle2 } from "lucide-react";

const BillingPage = () => {
    return (
        <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 justify-items-stretch'>
            {billingPlans.map((p) => (
                <Card key={p.title} className='max-w-[400px] h-[750px]'>
                    <CardContent className='flex flex-col gap-4 py-8'>
                        <div className='px-6'>
                            <h3 className='inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary'>
                                {p.title}
                            </h3>
                            <div className='mt-4 items-baseline text-6xl font-extrabold'>
                                ${p.price}
                                <span className='ml-1 text-2xl text-muted-foreground'>
                                    /month
                                </span>
                            </div>
                            <p className='text-md font-light text-muted-foreground'>
                                Get all this wonderful features for ${p.price} a
                                month
                            </p>
                        </div>
                        <div className='flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-secondary rounded-lg m-1 space-y-6 sm:p-10 sm:pt-6'>
                            <ul className='space-y-4'>
                                {p.planFeatures.map((f) => (
                                    <li
                                        className='flex items-center gap-2'
                                        key={f}
                                    >
                                        <div className='flex-shrink-0'>
                                            <CheckCircle2 className='h-5 w-5 text-green-500' />
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <form className='w-full px-4' action=''>
                            <ButtonForm
                                classNames='w-full theme-button'
                                title='Get Now'
                                variant={"default"}
                            />
                        </form>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default BillingPage;
