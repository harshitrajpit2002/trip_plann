const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./src/Router/auth")
const listingRoutes=require("./src/Router/listing1")
const BookingRoutes=require("./src/Router/Booking")
const UserRoutes=require("./src/Router/User")
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/properties", listingRoutes)
app.use("/bookings",BookingRoutes)
app.use("/users", UserRoutes)
/* MONGOOSE SETUP */

const PORT = 3001;
mongoose
  .connect("mongodb+srv://rajputharshit37:o1a5tlHt4nJBjSOc@cluster1.rfmuxty.mongodb.net/?retryWrites=true&w=majority", {
    dbName: "Dream_Nest",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));