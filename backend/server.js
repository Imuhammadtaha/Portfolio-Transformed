import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

// dotenv configuration
dotenv.config();
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/portfolio-f", contactRoutes);

// Resolve the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, "./build")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "./build/index.html"));
});

app.get("/", (req, res) => {
  res.send({
    succcess: true,
    message: "Server Running Hurray",
  });
});

// port
const PORT = process.env.PORT || 8080;

// listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
