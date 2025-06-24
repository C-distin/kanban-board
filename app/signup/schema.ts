import { z } from "zod/v4"

export const signupSchema = z
  .object({
    username: z.string().min(3, "Username too short"),
    email: z.email("Email is invalid"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one letter, one number, and one special character"
      ),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
    acceptTerms: z.boolean().refine((v) => v === true, "You must accept the terms and conditions"),
  })
  .refine((data) => data.password === data.confirmPassword, "Passwords do not match")

export type signUpData = z.infer<typeof signupSchema>
