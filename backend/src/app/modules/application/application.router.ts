import { Router } from "express";
import { ApplicationController } from "./application.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createApplicationZodSchema } from "./application.validation";

const route = Router();

route.post("/applications", validateRequest(createApplicationZodSchema), ApplicationController.createApplication)

export const ApplicationsRoutes = route;