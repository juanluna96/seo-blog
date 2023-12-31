const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require("dotenv").config();

// app
const app = express();

// middlewares
app.use(morgan("dev"));

app.use(bodyParser.json());

app.use(cookieParser());

// cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes
app.get("/api", (req, res) => {
  res.json({ time: Date().toString() });
});

// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  // Green console log
  console.log("\x1b[32m%s\x1b[0m", `Server is running on port ${port}`);
});
