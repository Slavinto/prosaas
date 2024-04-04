"use server";

import prisma from "@/lib/db";

import type { DashboardUserData } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { join } from "path";

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const getUser = async ({ email }: { email: string }) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
                name: true,
                email: true,
                colorScheme: true,
                stripeCustomerId: true,
            },
        });

        return user ? user : null;
    } catch (error) {
        console.error("Error. Can not get user from database.");
        return error;
    }
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createUser = async (userData: DashboardUserData) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: userData.email,
                name: userData.name,
                profileImage: userData.profileImage || "",
            },
        });
        return user;
    } catch (error) {
        console.error(error instanceof Error ? error?.message : error);
        return error;
    }
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const updateUser = async ({
    email,
    name,
    colorScheme,
}: {
    email: string;
    name: string;
    colorScheme: string;
}) => {
    try {
        const updateUser = await prisma.user.update({
            where: {
                email: email,
            },
            data: {
                name: name,
                colorScheme: colorScheme,
            },
        });

        if (!updateUser) {
            throw new Error("Error. Can not update user record in database.");
        }

        revalidatePath("/", "layout");
        return updateUser;
    } catch (error) {
        console.error(
            error instanceof Error
                ? error.message
                : "Error. Can not update user record in database."
        );
        return JSON.stringify(error);
    }
};
