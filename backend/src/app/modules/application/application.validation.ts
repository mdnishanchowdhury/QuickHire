import { z } from "zod";

export const createApplicationZodSchema = z.object({
  jobId: z
    .string()
    .uuid("Job ID must be a valid UUID"),

  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  resumeLink: z
    .string()
    .url("Resume link must be a valid URL"),

  coverNote: z
    .string()
    .min(10, "Cover note must be at least 10 characters")
    .max(1000, "Cover note must be at most 1000 characters"),
});