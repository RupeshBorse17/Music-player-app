// // import express from "express";
// // import dotenv from "dotenv";

// // dotenv.config(".env");
// // const PORT = process.env.PORT || 5001;

// // const app = express();

// // app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));


// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/connectDB.js";
// import router from "./routes/authRoutes.js";
// import songRouter from "./routes/songRoutes.js";



// dotenv.config();
// const PORT = process.env.PORT || 5001;

// console.log("MAILTRAP HOST:", process.env.MAILTRAP_HOST);
// console.log("MAILTRAP PORT:", process.env.MAILTRAP_PORT);

// // const app = express();
// // app.use(cors({
// //     origin:"http://localhost:5173",
// //     credentials:true,
// // }));
// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "https://music-player-app-f9sz-7vhe5i5nr-rupesh-borses-projects.vercel.app"
//   ],
//   credentials: true
// }));

// app.use(express.json());

// //Connect your Database
// connectDB();

// app.use("/api/auth",router);

// app.use("/api/songs",songRouter);

// // app.get("/",(req,res)=>{
// //     res.status(200).json({message:"server is working"});
// // })



// app.listen(PORT, () => {
//   console.log(`✅ Server is running on port ${PORT}`);
// });



import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import router from "./routes/authRoutes.js";
import songRouter from "./routes/songRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express(); // ✅ MUST be here

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://music-player-app-f9sz-git-main-rupesh-borses-projects.vercel.app",
    "https://music-player-app-f9sz-7vhe5i5nr-rupesh-borses-projects.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());

//Connect DB
connectDB();

app.use("/api/auth", router);
app.use("/api/songs", songRouter);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
