import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Nodejs Express Typescript Boilerplate",
        path: req.originalUrl
    });
});

// Handle 404 - Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: "Not Found - The requested resource does not exist",
        path: req.originalUrl
    });
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});