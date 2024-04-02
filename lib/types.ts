export type DashboardUserData = {
    email: string;
    name: string;
    profileImage?: string | null;
};

export type DbUser = {
    id: string;
    name: string;
    email: string;
    profileImage?: string;
    stripeCustomerId?: string;
    colorScheme: string;
};
