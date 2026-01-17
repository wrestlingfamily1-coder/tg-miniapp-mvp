import express from "express";

const app = express();

// Чтобы принимать JSON из Mini App
app.use(express.json());

// Простейший маршрут для проверки
app.get("/", (req, res) => {
  res.send("Mini App работает!");
});

// Порт для Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
