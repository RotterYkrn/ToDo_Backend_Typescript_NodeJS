import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());

/**
 * @typedef {object} TodoItem
 * @property {number} id - ToDo アイテムのID
 * @property {string} title - ToDo のタイトル
 * @property {boolean} completed - 完了状態
 */

/**
 * 固定の ToDo アイテムの配列
 * @type {TodoItem[]}
 */
const todos = [
    { id: 1, title: "牛乳を買う", completed: false },
    { id: 2, title: "洗濯物を取り込む", completed: true },
    { id: 3, title: "レポートを完成させる", completed: false },
];

/**
 * ToDo リストを取得する API エンドポイント
 * @route GET /api/todos
 * @returns {Array<TodoItem>} - ToDo アイテムの配列
 */
app.get("/api/todos", (_, res) => {
    res.json(todos);
});

/**
 * 静的ファイル (HTML, CSS, JavaScript) を提供するための設定
 */
app.use(express.static(join(__dirname, "."))); // クライアント側の index.html などがあるディレクトリを指定

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// import { PrismaClient } from "../generated/prisma/index.js";

// const prisma = new PrismaClient();

// async function main() {
//     const allUsers = await prisma.todoList.findMany();
//     console.log(allUsers);
// }

// main()
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//     });
