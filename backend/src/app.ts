import express, { Application, Request, Response } from "express";
import { JobRoutes } from "./app/modules/job/job.router";
import cors from 'cors';
import { ApplicationsRoutes } from "./app/modules/application/application.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./app/lib/auth";


const app: Application = express();

app.use(cors({
    origin: process.env.APP_URL,
    credentials: true
}))


app.all('/api/auth/*splat', toNodeHandler(auth));
// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());
app.use("/api", JobRoutes)
app.use("/api", ApplicationsRoutes)



// Basic route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript + Express!');
});

export default app;