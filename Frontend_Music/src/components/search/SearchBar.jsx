import React,{useState} from "react";
import { CiSearch } from "react-icons/ci";
import { setLoading } from "../../redux/slices/authSlice";
import { useEffect } from "react";
import axios from "axios";
import "../../css/search/SearchBar.css";

const SearchBar = ({setSearchSongs}) => {

  const[query,setquery] = useState("");
  const[loading,setloading] = useState(false);

  useEffect(()=>{

    if(!query.trim()){
        setSearchSongs([]);
        return;
    }

    const fetchSongs = async ()=>{

    try{
        setloading(true);
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/songs/playlistByTag/${encodeURIComponent(query)}`,
      );
      setSearchSongs(res.data.results);
      }
    
    catch(error){
      console.log("Jamendo search failed",error);
      setSearchSongs([]);
    }
    finally{
      setLoading(false);
    }
  };


  const debounce = setTimeout(fetchSongs,400);

  return () =>clearInterval(debounce);

    
  },[query,setSearchSongs]);



  return (
      <div className="searchbar-root">
        <div className="searchbar-input-wrapper">

            <input 
            className = "searchbar-input"
              type="text"
              placeholder="search songs..."
              value={query}
              onChange={(e)=>setquery(e.target.value)}
              autoFocus
              />
              <CiSearch className="searchbar-icon" size={20}/>

        </div>
        {!query && !loading && (
            <p className="searchbar-empty">Search Songs to display</p>
        )}

        {loading && <p className="searchbar-loading">Searching...</p>}



      </div>
  );
};

export default SearchBar;
