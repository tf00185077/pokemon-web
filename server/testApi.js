// searchRoutes.js
import express from "express";
import pool from "./db.cjs";

const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    // 获取查询参数
    const { query } = req.query;

    // 执行数据库查询
    const [rows] = await pool.query(
      "SELECT * FROM user",
      [`%${query}%`]
    );

    // 发送响应
    res.json(rows);
  } catch (error) {
    console.error("搜索时发生错误:", error);
    res.status(500).send("服务器内部错误");
  }
});
export default router;
