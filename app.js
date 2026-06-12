const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const BlogRoute = require('./routes/blogRoutes');
const LoginRoute = require('./routes/loginRoutes');
const UserRoute = require('./routes/userRoutes');
const statisticRouter = require("./routes/statisticRouter");
const PartnerRoute = require('./routes/partnerRoutes');

const middlewareLog = require('./middlewares/middleware');

require("dotenv").config();

const url = process.env.URL;
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(middlewareLog);

mongoose
  .connect(url)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/statistics", statisticRouter);
app.use("/blogs",BlogRoute);
app.use("/login",LoginRoute);
app.use("/users",UserRoute);
app.use("/partners",PartnerRoute);
