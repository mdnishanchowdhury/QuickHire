import { Application } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";



const createApplication = async (id: string, payload: Omit<Application, 'id'>): Promise<Application> => {
    const application = await prisma.application.create({
        data: {
            id,
            ...payload
        }
    });
    return application;
}


export const ApplicationService = {
    createApplication,
}