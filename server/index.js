import express from "express";
import cors from "cors";
import testApi from "./testApi.js";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import "dotenv/config.js";
// dotenv.config({path:'../.env'});
// dotenv.config({ path: `../.env` });
import { config } from "dotenv";
// config({path:'../.env'})
config();
const app = express();
const port = process.env.API_PORT || 5000;
const allowedOrigins = [process.env.NUXT_PORT, "http://127.0.0.1:3000"];
console.log(process.env.NUXT_PORT, "FROM ENV");
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    // 其他CORS配置...
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", testApi);
app.get("/test", async (req, res) => {
    try {
        //     const { id } = req.body;
        //     console.log("進到post", id);

        //     const sql = "INSERT INTO user (name) VALUES (?)";
        //     connection.query(sql, [id], function (err, result) {
        //         if (err) throw err;

        //         console.log("1 record inserted");
        res.send("1 record inserted OKOKOKOKOKOKOKOKOK");
        //     });
    } catch (error) {
        // console.error('Error occurred:', error);
        res.status(500).send("An error occurred");
    }
});

app.listen(port, () => console.log(`listening at ${port} . 開啟監聽`));
