require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")
const authRoute = require("./Routes/authRoute")
const contactRoute = require("./Routes/contactRoute")
const serviceRoute = require("./Routes/serviceRoute")
const adminRoute = require("./Routes/adminRoute")
const connectDb = require("./Utils/database");
const errorMiddleWare = require("./Middlewares/errorMiddleware");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PATCH,DELETE,UPDATE,PUT,HEAD ",
  credentials: true,
};
app.use(cors(corsOptions));


app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)
app.use("/api/data", serviceRoute)
app.use("/api/admin", adminRoute)

app.use(errorMiddleWare)


const PORT = 5000

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})

