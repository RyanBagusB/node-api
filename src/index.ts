import express, { Application } from "express";

const app: Application = express();
const port: Number = 3000;

app.listen(port, () => console.log(`Server is running on port:${port}`));