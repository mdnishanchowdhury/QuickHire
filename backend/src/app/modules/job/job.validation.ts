import { z } from "zod";

export const createJobZodSchema = z.object({
    title: z
        .string()
        .min(2, "Title must be at least 2 characters")
        .max(100, "Title must be at most 100 characters"),

    company: z
        .string()
        .min(2, "Company name must be at least 2 characters")
        .max(100, "Company name must be at most 100 characters"),

    location: z
        .string()
        .min(2, "Location must be at least 2 characters")
        .max(100, "Location must be at most 100 characters"),

    category: z
        .string()
        .min(2, "Category must be at least 2 characters")
        .max(50, "Category must be at most 50 characters"),

    description: z
        .string()
        .min(10, "Description must be at least 10 characters")
        .max(2000, "Description must be at most 2000 characters"),

    employmentType: z
        .string()
        .max(50, "Employment type must be at most 50 characters")
        .optional(),

    salaryRange: z
        .string()
        .max(50, "Salary range must be at most 50 characters")
        .optional(),
});