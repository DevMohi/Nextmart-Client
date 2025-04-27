//Will create a schema

import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string({
      required_error: "First name is required",
    })
    .min(2, "Firstt names must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long"),

  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),

  password: z
    .string({
      required_error: "Password Confirmation is required",
    })
    .min(8, "Password must be at least 8 characters long"),

  passwordConfirm: z
    .string({
      required_error: "Password is required",
    })
    .min(1),
});
