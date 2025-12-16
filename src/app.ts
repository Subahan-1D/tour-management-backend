import express, { type Request, type Response } from "express";
import { UserRoutes } from "./app/modules/user/user.route";
const app = express();
import cors from "cors";


app.use(express.json());
app.use(cors())

app.use("/api/v1/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("PH Tour Management Backend is running");
});

export default app;
