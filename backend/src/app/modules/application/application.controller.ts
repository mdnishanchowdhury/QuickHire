import { Request, Response } from "express";
import { ApplicationService } from "./application.server";

const createApplication = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = await ApplicationService.createApplication(id as string, payload)
        res.status(201).json({
            success: true,
            message: "Application submitted successfully",
            data: result
        })

    } catch (error: any) {
        console.error(error),
            res.status(500).json({
                success: false,
                message: "Application submitted Failed",
                error: error.message
            })
    }
}







export const ApplicationController = {
    createApplication,
}