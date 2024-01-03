import express from "express";
import cors from "cors"
import pool from "./db.cjs"
import testApi from './testApi.js'
// require("dotenv").config();
// import dotenv from 'dotenv'
// dotenv.config();
// console.log(process.env.DB_HOST);
const app = express();
const port = process.env.PORT || 4000;
const allowedOrigins = ["http://localhost:3333"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  // 其他CORS配置...
};

app.use(cors(corsOptions));
app.use("/api", testApi);
app.listen(port, () => console.log(`listening at ${port} . 開啟監聽`));
