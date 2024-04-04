"use server";

import Email from "next-auth/providers/email";
import { getUser, updateUser } from "./prisma-crud";
import { json } from "stream/consumers";

export const submitSettingsForm = async (email: string, formData: FormData) => {
    const name = formData.get("name")?.toString().trim();
    // const email = email.toString().trim();
    const colorScheme = formData.get("color")?.toString();
    console.log(name, email, colorScheme);
    if (!name || !email || !colorScheme) {
        throw new Error("Error. Invalid form data.");
    }

    const rawFormData = {
        email,
        name,
        colorScheme,
    };

    try {
        if (!email) {
            throw new Error("Error. Invalid user email.");
        }
        const dbUser = await getUser({ email });

        if (!dbUser) {
            throw new Error("Error. Can not find user in database.");
        }

        const updatedUser = await updateUser(rawFormData);

        if (!updatedUser) {
            throw new Error("Error. Can not update user record in database.");
        }
        console.log({ updatedUser });
    } catch (error) {
        console.error(
            error instanceof Error
                ? error.message
                : "Error. Invalid user email."
        );
        return JSON.stringify(error);
    }
};