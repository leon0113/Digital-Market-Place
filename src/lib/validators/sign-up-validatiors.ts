import { z } from "zod";

export const AuthCredentialsSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long."
    })
});

export type TAuthCredentialsSchema = z.infer<typeof AuthCredentialsSchema>