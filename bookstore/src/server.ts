import express from "express";
import bookRoutes from "./routes/bookRoutes";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import cors from 'cors';


const app = express();
app.use(express.json());

app.use(
  cors({
    methods: "GET,OPTIONS,POST,PUT,DELETE",
    origin: "*",
  }),
);
app.use("/books", bookRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
