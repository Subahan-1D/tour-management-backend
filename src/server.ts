import { Server } from "http";

import mongoose from "mongoose";
import app from "./app.js";



let server: Server;

const startServer = async () => {
  // await mongoose.connect(process.env.MONGO_URI || "", {})
  try {
    await mongoose.connect(
      "mongodb+srv://PhTourManagement:vwJ290BHUqNMkKAw@cluster0.yqmtelq.mongodb.net/tour-management-backend?appName=Cluster0"
    );
    console.log("Connected to DB");
    server = app.listen(8000, () => {
      console.log("Server is running port 8000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

process.on("unhandledRejection", (err) => {
  console.log("unhandled Rejection detected... Server shuting down..", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// process.on("uncaughtException", (err) => {
//   console.log("uncaught exception detected... Server shuting down..", err);
//   if (server) {
//     server.close(() => {
//       process.exit(1);
//     });
//   }
//   process.exit(1);
// });
