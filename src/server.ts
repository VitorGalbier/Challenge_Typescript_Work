import "reflect-metadata";
import express from "express";
import "./database/index"

const app = express();

app.use(express.json())


app.listen(3306, () => console.log("OK!"))