const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// إنشاء API بسيط لإرجاع بيانات
app.get("/api/data", (req, res) => {
    res.json({ message: "مرحبًا بك في API الخاص بموقعك!" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
