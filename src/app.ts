import express, { type Request, type Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("PH Tour Management Backend is running");
});

export default app;
