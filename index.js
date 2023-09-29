const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

//import Routers
const authRouter = require("./routers/authRouter");
const actionsRouter = require("./routers/actionsRouter");
const employeesRouter = require("./routers/employeesRouter");
const departmentsRouter = require("./routers/departmentsRouter");
const shiftsRouter = require("./routers/shiftsRouter");
const usersRouter = require("./routers/usersRouter");

//connected to projectDB in Mongo
connectDB();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//routers
app.use("/auth", authRouter);
app.use("/actions", actionsRouter);
app.use("/employees", employeesRouter); // DB
app.use("/departments", departmentsRouter); // DB
app.use("/shifts", shiftsRouter); // DB
app.use("/users", usersRouter); // WS

app.listen(PORT, () => {
  console.log(`App is Listening at http://localhost:${PORT}`);
});
