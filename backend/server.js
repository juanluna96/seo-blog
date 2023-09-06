const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const router = require("./routes");

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("\x1b[32m%s\x1b[0m", "✅ DB connected"))
  .catch((err) =>
    console.log("\x1b[31m%s\x1b[0m", "❌ DB connection error: ", err)
  );

// middlewares
app.use(morgan("dev"));

app.use(bodyParser.json());

app.use(cookieParser());

// cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes
app.use(router);

// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  // Green console log
  console.log("\x1b[32m%s\x1b[0m", `✅ Server is running on port ${port}`);
});
