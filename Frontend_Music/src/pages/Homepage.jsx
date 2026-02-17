// // import React, { useState, useEffect } from "react";
// // import { useSelector } from "react-redux";

// // import Footer from "../components/layout/Footer";
// // import SideMenu from "../components/layout/SideMenu";
// // import MainArea from "../components/layout/MainArea";

// // import "../css/pages/HomePage.css";
// // import axios from "axios";
// // import useAudioPlayer from "../hooks/useAudioPlayer";

// // const Homepage = () => {
// //   const [view, setView] = useState("home");
// //   const [songs, setsongs] = useState([]);
// //   const[searchSongs,setSearchSongs] = useState([]);
// //   const[openEditProfile,setopenEditProfile] = useState(false);
// //   const auth = useSelector((state)=>state.auth);
// //   const songToDisplay = view === "search" ? searchSongs:songs;

// //   const {audioRef,currentIndex,currentsong,isPlaying,currentTime,duration,isMuted,loopEnabled,shuffleEnabled,playbackSpeed,volume,playSongAtIndex,handleTogglePlay,handleNext,handlePrev,handleTimeUpdate,handleLoadedMetadata,handleEnded,handleTogglePlayMute,handleToggleLoop,handleToggleshuffle,handleChangeSpeed,handleSeek,handleChangeVolume} = useAudioPlayer(songToDisplay);

// //   const playerState = {
// //     currentsong,
// //     isMuted,
// //     currentTime,
// //     duration,
// //     loopEnabled,
// //     shuffleEnabled,
// //     playbackSpeed,
// //     volume,
// //   };

// //   const playerControls = {
// //     playSongAtIndex,
// //     handleTogglePlay,
// //     handleNext,
// //     handleEnded,

// //   };

// //   const playerFeatures = {
// //     onToggleMute : handleTogglePlayMute,
// //     onToggleLoop: handleToggleLoop,
// //     onToogleShuffle:handleToggleshuffle,
// //     onChangeSpeed:handleChangeSpeed,
// //     onChangeVolume:handleChangeVolume,
// //   };

// //   useEffect(()=>{
// //     const fetchInitialSongs = async()=>{
// //       try{
// //         const res = await axios.get(
// //           `${import.meta.env.VITE_BASE_URL}/api/songs`,
// //         );
// //         setsongs(res.data.results || []);
// //       } catch(error){
// //         console.error("Error while fetching the songs",error);
// //         setsongs([]);
// //       }
// //     };

// //     fetchInitialSongs();
// //   },[]);

// //   const loadPlaylist = async(tag)=>{

// //     if(!tag){
// //       console.warn("No tag is provided");
// //       return;
// //     }

// //     try{
// //       const res = await axios.get(
// //         `${import.meta.env.VITE_BASE_URL}/api/songs/playlistByTag/${tag}`,
// //       );

// //       setsongs(res.data.results || []);
// //     }
// //     catch(error){
// //       console.error("Failed to laod playlist",error);
// //       setsongs([]);
// //     }
// //   };

// //    const handleSelectSong = (index) => {
// //     setView("home");
// //     playSongAtIndex(index);
// //   };

// //   //when user clicks on a song in a table

// //   const handlePlayFavourite = (song)=>{
// //     const favourites = auth.user?.favourites || [];
// //     if(!favourites.length) return;

// //     const index = auth.user.favourites.findIndex((fav)=>fav.setsongs(auth.user.favourites));
// //     setView("home");

// //     setTimeout(()=>{
// //       if(index !== -1){
// //         playSongAtIndex(index);
// //       }
// //     },0);
// //   };





// //   return (
// //     <div className="homepage-root">

// //       <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata}
// //         onEnded={handleEnded}
// //       >

// //         { currentsong &&  <source src={currentsong.audio} type="audio/mpeg" />}
       

// //       </audio>
// //       <div className="homepage-main-wrapper">
// //         {/* Sidebar */}
// //         <div className="homepage-sidebar">
// //           <SideMenu setView={setView} view={view} />
// //         </div>
// //         {/* Main Content */}
// //         <div className="homepage-content">
// //           <MainArea  />
// //         </div>
// //       </div>
// //       {/* Footer Player */}
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Homepage;


// // // import React, { useState, useEffect } from "react";
// // // import { useSelector } from "react-redux";

// // // import Footer from "../components/layout/Footer";
// // // import SideMenu from "../components/layout/SideMenu";
// // // import MainArea from "../components/layout/MainArea";

// // // import "../css/pages/HomePage.css";
// // // import axios from "axios";
// // // import useAudioPlayer from "../hooks/useAudioPlayer";

// // // const Homepage = () => {
// // //   const [view, setView] = useState("home");
// // //   const [songs, setSongs] = useState([]);
// // //   const [searchSongs, setSearchSongs] = useState([]);
// // //   const auth = useSelector((state) => state.auth);

// // //   const songToDisplay = view === "search" ? searchSongs : songs;

// // //   const {
// // //     audioRef,
// // //     currentIndex,
// // //     currentSong,
// // //     isPlaying,
// // //     currentTime,
// // //     duration,
// // //     isMuted,
// // //     loopEnabled,
// // //     shuffleEnabled,
// // //     playbackSpeed,
// // //     volume,
// // //     playSongAtIndex,
// // //     handleTogglePlay,
// // //     handleNext,
// // //     handlePrev,
// // //     handleTimeUpdate,
// // //     handleLoadedMetadata,
// // //     handleEnded,
// // //     handleToggleMute,
// // //     handleToggleLoop,
// // //     handleToggleShuffle,
// // //     handleChangeSpeed,
// // //     handleSeek,
// // //     handleChangeVolume,
// // //   } = useAudioPlayer(songToDisplay);

// // //   useEffect(() => {
// // //     const fetchInitialSongs = async () => {
// // //       try {
// // //         const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/songs`);
// // //         setSongs(res.data.results || []);
// // //       } catch (error) {
// // //         console.error("Error while fetching the songs", error);
// // //         setSongs([]);
// // //       }
// // //     };

// // //     fetchInitialSongs();
// // //   }, []);

// // //   const loadPlaylist = async (tag) => {
// // //     if (!tag) {
// // //       console.warn("No tag is provided");
// // //       return;
// // //     }

// // //     try {
// // //       const res = await axios.get(
// // //         `${import.meta.env.VITE_BASE_URL}/api/songs/playlistByTag/${tag}`
// // //       );

// // //       setSongs(res.data.results || []);
// // //     } catch (error) {
// // //       console.error("Failed to load playlist", error);
// // //       setSongs([]);
// // //     }
// // //   };

// // //   // ✅ FIXED: This function was missing
// // //   const handleSelectSong = (index) => {
// // //     setView("home");
// // //     playSongAtIndex(index);
// // //   };

// // //   // when user clicks favourite song
// // //   const handlePlayFavourite = (song) => {
// // //     const favourites = auth.user?.favourites || [];
// // //     if (!favourites.length) return;

// // //     const index = favourites.findIndex((fav) => fav._id === song._id);

// // //     setView("home");

// // //     setTimeout(() => {
// // //       if (index !== -1) {
// // //         playSongAtIndex(index);
// // //       }
// // //     }, 0);
// // //   };

// // //   return (
// // //     <div className="homepage-root">
// // //       <audio
// // //         ref={audioRef}
// // //         onTimeUpdate={handleTimeUpdate}
// // //         onLoadedMetadata={handleLoadedMetadata}
// // //         onEnded={handleEnded}
// // //       >
// // //         {currentSong && <source src={currentSong.audio} type="audio/mpeg" />}
// // //       </audio>

// // //       <div className="homepage-main-wrapper">
// // //         {/* Sidebar */}
// // //         <div className="homepage-sidebar">
// // //           <SideMenu setView={setView} view={view} />
// // //         </div>

// // //         {/* Main Content */}
// // //         <div className="homepage-content">
// // //           <MainArea
// // //             view={view}
// // //             currentIndex={currentIndex}
// // //             onSelectSong={handleSelectSong}
// // //             onSelectfavourite={handlePlayFavourite}
// // //             onSelectTag={loadPlaylist}
// // //             songToDisplay={songToDisplay}
// // //             setSearchSongs={setSearchSongs}
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* Footer Player */}
// // //       <Footer
// // //         currentSong={currentSong}
// // //         isPlaying={isPlaying}
// // //         currentTime={currentTime}
// // //         duration={duration}
// // //         isMuted={isMuted}
// // //         loopEnabled={loopEnabled}
// // //         shuffleEnabled={shuffleEnabled}
// // //         playbackSpeed={playbackSpeed}
// // //         volume={volume}
// // //         onPlayPause={handleTogglePlay}
// // //         onNext={handleNext}
// // //         onPrev={handlePrev}
// // //         onMute={handleToggleMute}
// // //         onLoop={handleToggleLoop}
// // //         onShuffle={handleToggleShuffle}
// // //         onSpeedChange={handleChangeSpeed}
// // //         onSeek={handleSeek}
// // //         onVolumeChange={handleChangeVolume}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default Homepage;


// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// import Footer from "../components/layout/Footer";
// import SideMenu from "../components/layout/SideMenu";
// import MainArea from "../components/layout/MainArea";

// import "../css/pages/HomePage.css";
// import axios from "axios";
// import useAudioPlayer from "../hooks/useAudioPlayer";

// const Homepage = () => {
//   const [view, setView] = useState("home");
//   const [songs, setSongs] = useState([]);
//   const [searchSongs, setSearchSongs] = useState([]); // ✅ fixed
//   const auth = useSelector((state) => state.auth);

//   const songToDisplay = view === "search" ? searchSongs : songs;

//   const {
//     audioRef,
//     currentIndex,
//     currentSong,
//     isPlaying,
//     currentTime,
//     duration,
//     isMuted,
//     loopEnabled,
//     shuffleEnabled,
//     playbackSpeed,
//     volume,
//     playSongAtIndex,
//     handleTogglePlay,
//     handleNext,
//     handlePrev,
//     handleTimeUpdate,
//     handleLoadedMetadata,
//     handleEnded,
//     handleToggleMute,
//     handleToggleLoop,
//     handleToggleShuffle,
//     handleChangeSpeed,
//     handleSeek,
//     handleChangeVolume,
//   } = useAudioPlayer(songToDisplay);

//   useEffect(() => {
//     const fetchInitialSongs = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/songs`);
//         setSongs(res.data.results || []);
//       } catch (error) {
//         console.error("Error while fetching songs", error);
//         setSongs([]);
//       }
//     };

//     fetchInitialSongs();
//   }, []);

//   const loadPlaylist = async (tag) => {
//     if (!tag) return;

//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_BASE_URL}/api/songs/playlistByTag/${tag}`
//       );
//       setSongs(res.data.results || []);
//     } catch (error) {
//       console.error("Failed to load playlist", error);
//       setSongs([]);
//     }
//   };

//   const handleSelectSong = (index) => {
//     setView("home");
//     playSongAtIndex(index);
//   };

//   const handlePlayFavourite = (song) => {
//     const favourites = auth.user?.favourites || [];
//     if (!favourites.length) return;

//     const index = favourites.findIndex((fav) => fav._id === song._id);

//     setView("home");

//     setTimeout(() => {
//       if (index !== -1) {
//         playSongAtIndex(index);
//       }
//     }, 0);
//   };

//   return (
//     <div className="homepage-root">
//       <audio
//     ref={audioRef}
//     onTimeUpdate={handleTimeUpdate}
//     onLoadedMetadata={handleLoadedMetadata}
//     onEnded={handleEnded}
//   >
//   {currentSong && <source src={currentSong.audio} type="audio/mpeg" />}
// </audio>

//       <div className="homepage-main-wrapper">
//         <div className="homepage-sidebar">
//           <SideMenu setView={setView} view={view} />
//         </div>

//         <div className="homepage-content">
//           <MainArea
//             view={view}
//             currentIndex={currentIndex}
//             onSelectSong={handleSelectSong}
//             onSelectfavourite={handlePlayFavourite}
//             onSelectTag={loadPlaylist}
//             songToDisplay={songToDisplay}
//             setSearchSongs={setSearchSongs}
//           />
//         </div>
//       </div>

//       <Footer
//         currentSong={currentSong}
//         isPlaying={isPlaying}
//         currentTime={currentTime}
//         duration={duration}
//         isMuted={isMuted}
//         loopEnabled={loopEnabled}
//         shuffleEnabled={shuffleEnabled}
//         playbackSpeed={playbackSpeed}
//         volume={volume}
//         onPlayPause={handleTogglePlay}
//         onNext={handleNext}
//         onPrev={handlePrev}
//         onMute={handleToggleMute}
//         onLoop={handleToggleLoop}
//         onShuffle={handleToggleShuffle}
//         onSpeedChange={handleChangeSpeed}
//         onSeek={handleSeek}
//         onVolumeChange={handleChangeVolume}
//       />
//     </div>
//   );
// };

// export default Homepage;



// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// import Footer from "../components/layout/Footer";
// import SideMenu from "../components/layout/SideMenu";
// import MainArea from "../components/layout/MainArea";

// import "../css/pages/HomePage.css";
// import axios from "axios";
// import useAudioPlayer from "../hooks/useAudioPlayer";

// const Homepage = () => {
//   const [view, setView] = useState("home");
//   const [songs, setSongs] = useState([]);
//   const [searchSongs, setSearchSongs] = useState([]);

 

//   const auth = useSelector((state) => state.auth);

//   const songToDisplay = view === "search" ? searchSongs : songs;

//   const {
//     audioRef,
//     currentIndex,
//     currentSong,
//     isPlaying,
//     currentTime,
//     duration,
//     isMuted,
//     loopEnabled,
//     shuffleEnabled,
//     playbackSpeed,
//     volume,
//     playSongAtIndex,
//     handleTogglePlay,
//     handleNext,
//     handlePrev,
//     handleTimeUpdate,
//     handleLoadedMetadata,
//     handleEnded,
//     handleToggleMute,
//     handleToggleLoop,
//     handleToggleShuffle,
//     handleChangeSpeed,
//     handleSeek,
//     handleChangeVolume,
//   } = useAudioPlayer(songToDisplay);

//   useEffect(() => {
//     const fetchInitialSongs = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/songs`);
//         setSongs(res.data.results || []);
//       } catch (error) {
//         console.error("Error while fetching songs", error);
//         setSongs([]);
//       }
//     };

//     fetchInitialSongs();
//   }, []);

//   const loadPlaylist = async (tag) => {
//     if (!tag) return;

//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_BASE_URL}/api/songs/playlistByTag/${tag}`
//       );
//       setSongs(res.data.results || []);
//     } catch (error) {
//       console.error("Failed to load playlist", error);
//       setSongs([]);
//     }
//   };

//   const handleSelectSong = (index) => {
//     setView("home");
//     playSongAtIndex(index);
//   };

//   const handlePlayFavourite = (song) => {
//     const favourites = auth.user?.favourites || [];
//     if (!favourites.length) return;

//     const index = favourites.findIndex((fav) => fav._id === song._id);

//     setView("home");

//     setTimeout(() => {
//       if (index !== -1) {
//         playSongAtIndex(index);
//       }
//     }, 0);
//   };

//   return (
//     <div className="homepage-root">
//       {/* Audio Player */}
//       <audio
//         ref={audioRef}
//         onTimeUpdate={handleTimeUpdate}
//         onLoadedMetadata={handleLoadedMetadata}
//         onEnded={handleEnded}
//       >
//         {currentSong && <source src={currentSong.audio} type="audio/mpeg" />}
//       </audio>

//       <div className="homepage-main-wrapper">
//         <div className="homepage-sidebar">
         
          
//         </div>

//         <div className="homepage-content">
//           <MainArea
//             view={view}
//             currentIndex={currentIndex}
//             onSelectSong={handleSelectSong}
//             onSelectfavourite={handlePlayFavourite}
//             onSelectTag={loadPlaylist}
//             songToDisplay={songToDisplay}
//             setSearchSongs={setSearchSongs}
//           />
//         </div>
//       </div>
      

//       <Footer
//         currentSong={currentSong}
//         isPlaying={isPlaying}
//         currentTime={currentTime}
//         duration={duration}
//         isMuted={isMuted}
//         loopEnabled={loopEnabled}
//         shuffleEnabled={shuffleEnabled}
//         playbackSpeed={playbackSpeed}
//         volume={volume}
//         onPlayPause={handleTogglePlay}
//         onNext={handleNext}
//         onPrev={handlePrev}
//         onMute={handleToggleMute}
//         onLoop={handleToggleLoop}
//         onShuffle={handleToggleShuffle}
//         onSpeedChange={handleChangeSpeed}
//         onSeek={handleSeek}
//         onVolumeChange={handleChangeVolume}
//       />

      
//     </div>
//   );
// };

// export default Homepage;



// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// import Footer from "../components/layout/Footer";
// import SideMenu from "../components/layout/SideMenu";
// import MainArea from "../components/layout/MainArea";

// import "../css/pages/HomePage.css";
// import axios from "axios";
// import useAudioPlayer from "../hooks/useAudioPlayer";
// import EditProfile from "../components/auth/EditProfile";

// const Homepage = () => {
//   const [view, setView] = useState("home");
//   const [songs, setSongs] = useState([]);
//   const [searchSongs, setSearchSongs] = useState([]);

//   const auth = useSelector((state) => state.auth);

//   const songToDisplay = view === "search" ? searchSongs : songs;

//   const {
//     audioRef,
//     currentIndex,
//     currentSong,
//     isPlaying,
//     currentTime,
//     duration,
//     isMuted,
//     loopEnabled,
//     shuffleEnabled,
//     playbackSpeed,
//     volume,
//     playSongAtIndex,
//     handleTogglePlay,
//     handleNext,
//     handlePrev,
//     handleTimeUpdate,
//     handleLoadedMetadata,
//     handleEnded,
//     handleToggleMute,
//     handleToggleLoop,
//     handleToggleShuffle,
//     handleChangeSpeed,
//     handleSeek,
//     handleChangeVolume,
//   } = useAudioPlayer(songToDisplay);


//   const playerState = {
//     currentSong,
//     isPlaying,
//     currentTime,
//     duration,
//     isMuted,
//     loopEnabled,
//     shuffleEnabled,
//     playbackSpeed,
//     volume,
//   };

//   const playerControls = {
//     playSongAtIndex,
//     handleTogglePlay,
//     handleNext,
//     handlePrev,
//     handleSeek,
//   };

//   const playerFeatures = {

//     onToggleMute:handleToggleMute,
//     onToggleLoop:handleToggleLoop,
//     onToggleShuffle:handleToggleShuffle,
//     onChangeSpeed:handleChangeSpeed,
//     onChangeVolume:handleChangeVolume,
//   };

//   // Fetch Songs initially
//   useEffect(() => {
//     const fetchInitialSongs = async () => {
//       try {
//         const res = await axios.get(
//           `${import.meta.env.VITE_BASE_URL}/api/songs`
//         );
//         setSongs(res.data.results || []);
//       } catch (error) {
//         console.error("Error while fetching songs", error);
//         setSongs([]);
//       }
//     };

//     fetchInitialSongs();
//   }, []);

//   // Load playlist by tag
//   const loadPlaylist = async (tag) => {
//     if (!tag) return;

//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_BASE_URL}/api/songs/playlistByTag/${tag}`
//       );
//       setSongs(res.data.results || []);
//       setView("home");
//     } catch (error) {
//       console.error("Failed to load playlist", error);
//       setSongs([]);
//     }
//   };

//   // When user selects a song
//   const handleSelectSong = (index) => {
//     setView("home");
//     playSongAtIndex(index);
//   };

//   // When user selects favourite song
//   const handlePlayFavourite = (song) => {
//     const favourites = auth.user?.favourites || [];
//     if (!favourites.length) return;

//     const index = favourites.findIndex((fav) => fav._id === song._id);

//     setView("home");

//     setTimeout(() => {
//       if (index !== -1) {
//         playSongAtIndex(index);
//       }
//     }, 0);
//   };

//   return (
//     <div className="homepage-root">
//       {/* Audio Player */}
//       <audio
//         ref={audioRef}
//         onTimeUpdate={handleTimeUpdate}
//         onLoadedMetadata={handleLoadedMetadata}
//         onEnded={handleEnded}
//       >
//         {currentSong && (
//           <source src={currentSong.audio} type="audio/mpeg" />
//         )}
//       </audio>

//       <div className="homepage-main-wrapper">
//         {/* Sidebar */}
//         <div className="homepage-sidebar">
//           <SideMenu setView={setView} view={view} onOpenEditProfile={()=>setOpenEditProfile(true)} />
//         </div>

//         {/* Main Content */}
//         <div className="homepage-content">
//           <MainArea
//             view={view}
//             currentIndex={currentIndex}
//             onSelectSong={handleSelectSong}
//             onSelectfavourite={handlePlayFavourite}
//             onSelectTag={loadPlaylist}
//             songToDisplay={songToDisplay}
//             setSearchSongs={setSearchSongs}
//           />
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer playerState={playerState} playerControls={playerControls} playerFeatures={playerFeatures}

//       {EditProfile && <Modal onClose={()=>setOpenEditProfile(false)}>

//         <EditProfile onClose={()=>setOpenEditProfile(false)}/>

//       </Modal>}

//         // currentSong={currentSong}
//         // isPlaying={isPlaying}
//         // currentTime={currentTime}
//         // duration={duration}
//         // isMuted={isMuted}
//         // loopEnabled={loopEnabled}
//         // shuffleEnabled={shuffleEnabled}
//         // playbackSpeed={playbackSpeed}
//         // volume={volume}
//         // onPlayPause={handleTogglePlay}
//         // onNext={handleNext}
//         // onPrev={handlePrev}
//         // onMute={handleToggleMute}
//         // onLoop={handleToggleLoop}
//         // onShuffle={handleToggleShuffle}
//         // onSpeedChange={handleChangeSpeed}
//         // onSeek={handleSeek}
//         // onVolumeChange={handleChangeVolume}
//       />
//     </div>
//   );
// };

// export default Homepage;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Footer from "../components/layout/Footer";
import SideMenu from "../components/layout/SideMenu";
import MainArea from "../components/layout/MainArea";

import Modal from "../components/Common/Modal";
import EditProfile from "../components/auth/EditProfile";

import "../css/pages/HomePage.css";
import useAudioPlayer from "../hooks/useAudioPlayer";

const Homepage = () => {
  const [view, setView] = useState("home");
  const [songs, setSongs] = useState([]);
  const [searchSongs, setSearchSongs] = useState([]);

  const [openEditProfile, setOpenEditProfile] = useState(false);

  const auth = useSelector((state) => state.auth);

  const songToDisplay = view === "search" ? searchSongs : songs;

  const {
    audioRef,
    currentIndex,
    currentSong,
    isPlaying,
    currentTime,
    duration,
    isMuted,
    loopEnabled,
    shuffleEnabled,
    playbackSpeed,
    volume,
    playSongAtIndex,
    handleTogglePlay,
    handleNext,
    handlePrev,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleEnded,
    handleToggleMute,
    handleToggleLoop,
    handleToggleShuffle,
    handleChangeSpeed,
    handleSeek,
    handleChangeVolume,
  } = useAudioPlayer(songToDisplay);

  const playerState = {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    isMuted,
    loopEnabled,
    shuffleEnabled,
    playbackSpeed,
    volume,
  };

  const playerControls = {
    playSongAtIndex,
    handleTogglePlay,
    handleNext,
    handlePrev,
    handleSeek,
  };

  const playerFeatures = {
    onToggleMute: handleToggleMute,
    onToggleLoop: handleToggleLoop,
    onToggleShuffle: handleToggleShuffle,
    onChangeSpeed: handleChangeSpeed,
    onChangeVolume: handleChangeVolume,
  };

  // Fetch Songs initially
  useEffect(() => {
    const fetchInitialSongs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/songs`
        );
        setSongs(res.data.results || []);
      } catch (error) {
        console.error("Error while fetching songs", error);
        setSongs([]);
      }
    };

    fetchInitialSongs();
  }, []);

  // Load playlist by tag
  const loadPlaylist = async (tag) => {
    if (!tag) return;

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/songs/playlistByTag/${tag}`
      );
      setSongs(res.data.results || []);
      setView("home");
    } catch (error) {
      console.error("Failed to load playlist", error);
      setSongs([]);
    }
  };

  // When user selects a song
  const handleSelectSong = (index) => {
    setView("home");
    playSongAtIndex(index);
  };

  // When user selects favourite song
  const handlePlayFavourite = (song) => {
    const favourites = auth.user?.favourites || [];
    if (!favourites.length) return;

    const index = favourites.findIndex((fav) => fav._id === song._id);

    setView("home");

    setTimeout(() => {
      if (index !== -1) {
        playSongAtIndex(index);
      }
    }, 0);
  };

  return (
    <div className="homepage-root">
      {/* Audio Player */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      >
        {currentSong && <source src={currentSong.audio} type="audio/mpeg" />}
      </audio>

      <div className="homepage-main-wrapper">
        {/* Sidebar */}
        <div className="homepage-sidebar">
          <SideMenu
            setView={setView}
            view={view}
            onOpenEditProfile={() => setOpenEditProfile(true)}
          />
        </div>

        {/* Main Content */}
        <div className="homepage-content">
          <MainArea
            view={view}
            currentIndex={currentIndex}
            onSelectSong={handleSelectSong}
            onSelectfavourite={handlePlayFavourite}
            onSelectTag={loadPlaylist}
            songToDisplay={songToDisplay}
            setSearchSongs={setSearchSongs}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer
        playerState={playerState}
        playerControls={playerControls}
        playerFeatures={playerFeatures}
      />

      {/* Edit Profile Modal */}
      {openEditProfile && (
        <Modal onClose={() => setOpenEditProfile(false)}>
          <EditProfile onClose={() => setOpenEditProfile(false)} />
        </Modal>
      )}
    </div>
  );
};

export default Homepage;
