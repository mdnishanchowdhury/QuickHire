import { Request, Response } from "express";
import { JobService } from "./job.server";

const createJob = async (req: Request, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const userId = req.user.id;

        const payload = req.body;
        const result = await JobService.createJob(userId as string, payload)
        res.status(201).json({
            success: true,
            message: "Job created successfully",
            data: result
        })

    } catch (error: any) {
        console.error(error),
            res.status(500).json({
                success: false,
                message: "Job created Failed",
                error: error.message
            })
    }
}

const getALlJob = async (req: Request, res: Response) => {
    try {
        const result = await JobService.getAllJob()
        res.status(201).json({
            success: true,
            message: "Job fetch successfully",
            data: result
        })

    } catch (error: any) {
        console.error(error),
            res.status(500).json({
                success: false,
                message: "Job fetch Failed",
                error: error.message
            })
    }
}


const getJobById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await JobService.getJobById(id as string)
        res.status(201).json({
            success: true,
            message: "Job fetch successfully",
            data: result
        })

    } catch (error: any) {
        console.error(error),
            res.status(500).json({
                success: false,
                message: "Job fetch Failed",
                error: error.message
            })
    }
}

const deleteJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await JobService.deleteJob(id as string)
        res.status(201).json({
            success: true,
            message: "Job deleted successfully",
            data: result
        })

    } catch (error: any) {
        console.error(error),
            res.status(500).json({
                success: false,
                message: "Job deleted Failed",
                error: error.message
            })
    }
}

const updateJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = await JobService.updateJob(id as string, payload)
        res.status(201).json({
            success: true,
            message: "Job updated successfully",
            data: result
        })

    } catch (error: any) {
        console.error(error),
            res.status(500).json({
                success: false,
                message: "Job updated Failed",
                error: error.message
            })
    }
}
export const JobController = {
    createJob,
    getALlJob,
    getJobById,
    deleteJob,
    updateJob
}