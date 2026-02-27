import { Job } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createJob = async (id: string, payload: Omit<Job, 'id' | 'userId'>): Promise<Job> => {
    const job = await prisma.job.create({
        data: {
            userId: id,
            ...payload
        }
    });
    return job;
}

const getAllJob = async (): Promise<Job[]> => {
    const result = await prisma.job.findMany();
    return result
}

const getJobById = async (id: string): Promise<Job | null> => {
    const result = await prisma.job.findUnique({
        where: { id },
    })
    return result
}

const deleteJob = async (id: string): Promise<Job> => {
    const result = await prisma.job.delete({
        where: {
            id
        }
    })
    return result
}

const updateJob = async (id: string, payload: Job): Promise<Job> => {
    const result = await prisma.job.update({
        where: {
            id
        },
        data: payload
    })
    return result;
}
export const JobService = {
    createJob,
    getAllJob,
    deleteJob,
    updateJob,
    getJobById
}