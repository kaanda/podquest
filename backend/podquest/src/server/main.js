import express from "express";
import ViteExpress from "vite-express";
import { podquestRouter } from "./podquest/podquest-router.js";

const app = express();
app.use("/podquest", podquestRouter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
