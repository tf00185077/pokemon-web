import express from "express";
import cors from "cors";
import testApi from "./testApi.js";
const app = express();
const port = process.env.PORT || 4000;
const allowedOrigins = [process.env.NUXT_HOST];

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

app.post("/search", async (req, res) => {
    try {
        const { id } = req.body;
        console.log("進到post", id);

        const sql = "INSERT INTO user (name) VALUES (?)";
        connection.query(sql, [id], function (err, result) {
            if (err) throw err;

            console.log("1 record inserted");
            res.send("1 record inserted");
        });
    } catch (error) {
        // console.error('Error occurred:', error);
        // res.status(500).send('An error occurred');
    }
});

app.listen(port, () => console.log(`listening at ${port} . 開啟監聽`));
