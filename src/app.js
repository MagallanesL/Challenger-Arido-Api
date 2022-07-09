import express from "express";
import morgan from "morgan";

//routes
import usersRoutes from "./routes/Users";

const app = express();

//configuraciones
app.set("port", 3000);

//midlewares
app.use(morgan("dev"));
app.use(express.json);

//routes

app.use("/api/users", usersRoutes);

export default app;
