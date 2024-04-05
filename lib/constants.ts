import { CreditCard, Home, Settings } from "lucide-react";

export const navItems = [
    {
        name: "Home",
        href: "/dashboard",
        icon: Home,
    },
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
    {
        name: "Billing",
        href: "/dashboard/billing",
        icon: CreditCard,
    },
];

export const billingPlans = [
    {
        title: "Basic",
        price: "5",
        planFeatures: ["Automated Recurring Billing", "Automated Invoicing"],
    },
    {
        title: "Standard",
        price: "15",

        planFeatures: [
            "Automated Recurring Billing",
            "Automated Invoicing",
            "Product Catalog Access",
        ],
    },
    {
        title: "Extended",
        price: "25",
        planFeatures: [
            "Automated Recurring Billing",
            "Automated Invoicing",
            "Product Catalog Access",
            "Seamless Checkout",
        ],
    },
    {
        title: "Platinum",
        price: "35",
        planFeatures: [
            "Automated Recurring Billing",
            "Automated Invoicing",
            "Product Catalog Access",
            "Seamless Checkout",
            "Flexible Payment Options",
            "Plug Revenue Leaks",
        ],
    },
    {
        title: "VIP",
        price: "55",
        planFeatures: [
            "Automated Recurring Billing",
            "Automated Invoicing",
            "Product Catalog Access",
            "Seamless Checkout",
            "Flexible Payment Options",
            "Plug Revenue Leaks",
            "Effortless Accounting",
            "A Single Source of Truth",
            "Subscription Analytics",
        ],
    },
];
