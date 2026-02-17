// import React from "react";

// import Auth from "../auth/Auth";
// import Playlist from "../player/Playlist";
// import SearchBar from "../search/SearchBar";
// import SongList from "../player/SongList";
// import SongGrid from "../songs/SongGrid";
// import { useSelector } from "react-redux";


// import "../../css/mainArea/MainArea.css";

// const MainArea = ({ view, currentIndex, onSelectSong, onSelectfavourite, onSelectTag, songToDisplay, setSearchSongs }) => {

//   const auth = useSelector((state)=>state.auth);
//   return (
//     <div className="mainarea-root">
//       <div className="mainarea-top">
//         <Auth />
//         {view === "home" && <Playlist />}
//         {view === "search" && <SearchBar />}
//       </div>

//       <div className="mainarea-scroll">
//         {(view === "home" || view === "search") && <SongList songs={songToDisplay} onSelectSong={onSelectSong} currentIndex={currentIndex} />}

//         {/* {view === "favourite" && <SongGrid songs={songs} />} */}
//         {view === "favourite" && (
//        <SongGrid
//         songs={auth.user?.favourites || []}
//         onSelectSong={onSelectfavourite}
//       />
// )}

//       </div>
//     </div>
//   );
// };

// export default MainArea;



// import React from "react";
// import { useSelector } from "react-redux";

// import Auth from "../auth/Auth";
// import Playlist from "../player/Playlist";
// import SearchBar from "../search/SearchBar";
// import SongList from "../player/SongList";
// import SongGrid from "../songs/SongGrid";

// import "../../css/mainArea/MainArea.css";

// const MainArea = ({
//   view,
//   currentIndex,
//   onSelectSong,
//   onSelectfavourite,
//   onSelectTag,
//   songToDisplay,
//   setSearchSongs,
// }) => {
//   const auth = useSelector((state) => state.auth);

//   return (
//     <div className="mainarea-root">
//       <div className="mainarea-top">
//         <Auth />

//         {view === "home" && <Playlist onSelectTag={onSelectTag}/>}

//         {view === "search" && (
//           <SearchBar setSearchSongs={setSearchSongs} />
//         )}
//       </div>

//       <div className="mainarea-scroll">
//         {(view === "home" || view === "search") && (
//           <SongList
//             songs={songToDisplay}
//             onSelectSong={onSelectSong}
//             currentIndex={currentIndex}
//           />
//         )}

//         {view === "favourite" && (
//           <SongGrid
//             songs={auth.user?.favourites || []}
//             onSelectSong={onSelectfavourite}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default MainArea;



import React from "react";
import { useSelector } from "react-redux";

import Auth from "../auth/Auth";
import Playlist from "../player/Playlist";
import SearchBar from "../search/SearchBar";
import SongList from "../player/SongList";
import SongGrid from "../songs/SongGrid";

import "../../css/mainArea/MainArea.css";

const MainArea = ({
  view,
  currentIndex,
  onSelectSong,
  onSelectfavourite,
  onSelectTag,
  songToDisplay,
  setSearchSongs,
}) => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="mainarea-root">
      <div className="mainarea-top">
        <Auth />

        {view === "home" && <Playlist onSelectTag={onSelectTag} />}

        {view === "search" && (
          <SearchBar setSearchSongs={setSearchSongs} />
        )}
      </div>

      <div className="mainarea-scroll">
        {(view === "home" || view === "search") && (
          <SongList
            songs={songToDisplay}
            onSelectSong={onSelectSong}
            currentIndex={currentIndex}
          />
        )}

        {/* ✅ Favourite Section FIXED */}
        {view === "favourite" && (
          <SongGrid
            songs={auth.user?.favourites || []}
            onSelectFavourite={onSelectfavourite}
          />
        )}
      </div>
    </div>
  );
};

export default MainArea;
