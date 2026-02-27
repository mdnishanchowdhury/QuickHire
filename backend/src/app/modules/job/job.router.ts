import { Router } from "express";
import { JobController } from "./job.controller";
import auth, { UserRole } from "../../middleware/auth";

const route = Router();

route.get("/jobs", JobController.getALlJob)
route.post("/jobs", auth(UserRole.ADMIN), JobController.createJob)
route.get("/jobs/:id", JobController.getJobById)
route.delete("/jobs/:id", auth(UserRole.ADMIN), JobController.deleteJob)
route.patch("/jobs/:id", JobController.updateJob)

export const JobRoutes = route;