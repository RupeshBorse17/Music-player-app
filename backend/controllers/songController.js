// import axios from "axios";


// const getSongs = async(req,res)=>{

//     try{
//         const response = await axios.get(
//             `https://api.jamendo.com/v3.0/tracks/?client_id=607250f7&format=json&limit=15`

//         );
//         const data = response.data;
//         res.status(200).json(data);
//     }
//     catch(error){

//         console.error(error.message);
//         res.status(500).json({message:"error.message"});

//     }
// };

// const getplayListByTag = async(req,res) =>{

//     try{
 
//         const tag = (req.params.tag || req.query.tag || "").toString().trim();

//         if(!tag) return res.status(400).json({message:"Missing Tag Parameters"});

//         const limit = parseInt(req.query.limit ?? "10",10) || 10;
//         const client_id = "607250f7";
//         const params={
//             client_id:client_id,
//             format:"jsonpretty",
//             tags:tag,
//             limit,
//         }

//         const response = await axios.get("https://api.jamendo.com/v3.0/tracks/",{
//             params,
//         });

//         return res.status(200).json(response.data);
//     }
//     catch(error){
//         console.error(
//             "getPlaylistTag error",
//             error?.response?.data ?? error.message ?? error
//         );
//         return res.status(500).json({message:"Failed to fetch"});
//     }
// };

// const toggleFavourite = async(req,res)=>{


//     try{

//         const user = req.user;
//         const song = req.body.song;

//         const exist = user.favourites.find((fav)=> fav.id === song.id);

//         if(exist){
//             user.favourites = user.favourites.filter((fav) => fav.id !== song.id);
//         }
//         else{
//             user.favourites.push(song);
//         }

//         await user.save();

//         return res.staus(200).json(user.favourites);
        


//     }

//     catch(error){
//         console.error(error.message);
//         return res.status(400).json({message:"Favourites not added . Something went wrong"});
//     }

    
// };


// export{getSongs,getplayListByTag,toggleFavourite};


import axios from "axios";

const getSongs = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.jamendo.com/v3.0/tracks/",
      {
        params: {
          client_id: "607250f7",
          format: "json",
          limit: 15,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getPlayListByTag = async (req, res) => {
  try {
    const tag = (req.params.tag || req.query.tag || "").toString().trim();

    if (!tag) {
      return res.status(400).json({ message: "Missing Tag Parameters" });
    }

    const limit = parseInt(req.query.limit ?? "10", 10) || 10;

    const response = await axios.get("https://api.jamendo.com/v3.0/tracks/", {
      params: {
        client_id: "607250f7",
        format: "jsonpretty",
        tags: tag,
        limit: limit,
      },
    });

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("getPlaylistTag error", error?.response?.data || error.message);
    return res.status(500).json({ message: "Failed to fetch" });
  }
};

const toggleFavourite = async (req, res) => {
  try {
    const user = req.user;
    const song = req.body.song;

    const exist = user.favourites.find((fav) => fav.id === song.id);

    if (exist) {
      user.favourites = user.favourites.filter((fav) => fav.id !== song.id);
    } else {
      user.favourites.push(song);
    }

    await user.save();

    return res.status(200).json(user.favourites);
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ message: "Favourites not added. Something went wrong" });
  }
};

export { getSongs, getPlayListByTag, toggleFavourite };
