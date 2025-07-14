const express = require("express");
const cookieParser = require("cookie-parser"); //cookie parser
const cors = require("cors");
const webRoutes = require("./routes/webRoutes");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const { checkForToken } = require("./middlewares/auth.js");
const {GetDataUsingURL} = require('./utils/Cheerio.js')

const CLIENT_PORT = process.env.CLIENT_PORT;

// Initialize express app
const app = express();
const PORT = 3000;




app.use(cors({
  origin: [
    `http://localhost:${CLIENT_PORT}`,
    'https://mwk85l3b-5173.inc1.devtunnels.ms',
    'https://mwk85l3b-3000.inc1.devtunnels.ms'
  ],
  credentials: true
}));


//connect to database
connectDB();

// installed MIDDLEWAREs
dotenv.config();
app.use(express.json());
app.use(cookieParser());



// CUSTOM middleware
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Web Hunter API",
    status: "active",
  });
})

app.use("/api", checkForToken, webRoutes);
app.use("/admin", checkForToken, authRoutes);

// routes
app.post("/authorize-admin", checkForToken, (req, res) => {
  if (req.admin) {
    res.json({
      message: "Current User is a Admin",
      isAdmin: true,
    });
  } else {
    res.json({
      message: "Current User is NOT a Admin",
      isAdmin: false,
    });
  }
});

app.post('/generate', async (req,res) =>{
  const {url} = req.body
  const result = await GetDataUsingURL(url)
  console.log(result)
  res.json(result)
});



app.listen(PORT, () => {
  console.log(`Server is active at ${PORT}`);
});
