import express from "express"
import {protect} from "../middleware/authmiddleware.js";

import { getPlayListByTag,getSongs,toggleFavourite} from "../controllers/songController.js";



const songRouter = express.Router();

songRouter.get("/",getSongs);
songRouter.get("/playlistByTag/:tag",getPlayListByTag);
songRouter.post("/favourite",protect,toggleFavourite);
songRouter.get("/favourites",protect,(req,res)=>{
    res.json(req.user.favourites);
})

export  default songRouter;

// import express from "express";
// import { protect } from "../middleware/authmiddleware.js";
// import {
//   getPlayListByTag,
//   getSongs,
//   toggleFavourite,
// } from "../controllers/songController.js";

// const songRouter = express.Router();

// songRouter.get("/", getSongs);
// songRouter.get("/playlistByTag/:tag", getPlayListByTag);
// songRouter.post("/favourite", protect, toggleFavourite);

// songRouter.get("/favourites", protect, (req, res) => {
//   res.json(req.user.favourites);
// });

// export default songRouter;
