import { useReducer, useState, useRef } from "react";

const initialAudioState = {
  isPlaying: false,
  isLoading: false,
  isMuted: false,
  volume: 1,
  loopEnabled: false,
  shuffleEnabled: false,
  playbackSpeed: 1,
  currentIndex: null,
  currentSong: null,
  currentTime: 0,
};

function audioReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };

    case "PLAY":
      return { ...state, isPlaying: true, isLoading: false };

    case "PAUSE":
      return { ...state, isPlaying: false };

    case "MUTE":
      return { ...state, isMuted: true };

    case "UNMUTE":
      return { ...state, isMuted: false };

    case "SET_VOLUME":
      return { ...state, volume: action.payload };

    case "TOGGLE_LOOP":
      return {
        ...state,
        loopEnabled: !state.loopEnabled,
        shuffleEnabled: false,
      };

    case "TOGGLE_SHUFFLE":
      return {
        ...state,
        shuffleEnabled: !state.shuffleEnabled,
        loopEnabled: false,
      };

    case "SET_PLAYBACK_SPEED":
      return { ...state, playbackSpeed: action.payload };

    case "SET_CURRENT_TRACK":
      return {
        ...state,
        currentIndex: action.payload.index,
        currentSong: action.payload.song,
        isLoading: true,
      };

    case "SET_CURRENT_TIME":
      return { ...state, currentTime: action.payload };

    default:
      return state;
  }
}

const useAudioPlayer = (songs) => {
  const [audioState, dispatch] = useReducer(audioReducer, initialAudioState);
  const [duration, setDuration] = useState(0);

  const previousVolumeRef = useRef(1);
  const audioRef = useRef(null);

  // ✅ FIXED Play Song Function
  const playSongAtIndex = async (index) => {
    if (!songs || songs.length === 0) {
      console.warn("No songs available to play");
      return;
    }

    if (index < 0 || index >= songs.length) return;

    const audio = audioRef.current;
    if (!audio) return;

    // ✅ Stop old song properly
    audio.pause();
    audio.currentTime = 0;

    dispatch({ type: "LOADING" });

    const song = songs[index];

    dispatch({
      type: "SET_CURRENT_TRACK",
      payload: { index, song },
    });

    dispatch({ type: "SET_CURRENT_TIME", payload: 0 });

    // ✅ Wait for React to update <source>
    setTimeout(async () => {
      try {
        audio.load();
        audio.playbackRate = audioState.playbackSpeed;

        await audio.play();
        dispatch({ type: "PLAY" });
      } catch (error) {
        console.error("Play Error:", error);
      }
    }, 100);
  };

  const handleTogglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        dispatch({ type: "PLAY" });
      } else {
        audio.pause();
        dispatch({ type: "PAUSE" });
      }
    } catch (error) {
      console.error("Toggle Play Error:", error);
    }
  };

  const handleNext = () => {
    if (!songs || songs.length === 0) return;

    if (audioState.currentIndex === null) {
      playSongAtIndex(0);
      return;
    }

    if (audioState.shuffleEnabled && songs.length > 1) {
      let randomIndex = audioState.currentIndex;

      while (randomIndex === audioState.currentIndex) {
        randomIndex = Math.floor(Math.random() * songs.length);
      }

      playSongAtIndex(randomIndex);
      return;
    }

    const nextIndex = (audioState.currentIndex + 1) % songs.length;
    playSongAtIndex(nextIndex);
  };

  const handlePrev = () => {
    if (!songs || songs.length === 0) return;

    if (audioState.currentIndex === null) {
      playSongAtIndex(0);
      return;
    }

    const prevIndex =
      (audioState.currentIndex - 1 + songs.length) % songs.length;

    playSongAtIndex(prevIndex);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    dispatch({
      type: "SET_CURRENT_TIME",
      payload: audio.currentTime || 0,
    });
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setDuration(audio.duration || 0);

    audio.playbackRate = audioState.playbackSpeed;
    audio.volume = audioState.volume;
    audio.muted = audioState.isMuted;
  };
  

  const handleEnded = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audioState.loopEnabled) {
      audio.currentTime = 0;

      audio
        .play()
        .then(() => {
          dispatch({ type: "PLAY" });
          dispatch({ type: "SET_CURRENT_TIME", payload: 0 });
        })
        .catch((err) => console.error("Replay Error:", err));
    } else {
      handleNext();
    }
  };

  const handleToggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audioState.isMuted) {
      const restoreVolume = previousVolumeRef.current || 1;

      audio.muted = false;
      audio.volume = restoreVolume;

      dispatch({ type: "UNMUTE" });
      dispatch({ type: "SET_VOLUME", payload: restoreVolume });
    } else {
      previousVolumeRef.current = audioState.volume || 1;

      audio.muted = true;
      audio.volume = 0;

      dispatch({ type: "MUTE" });
      dispatch({ type: "SET_VOLUME", payload: 0 });
    }
  };

  const handleToggleLoop = () => {
    dispatch({ type: "TOGGLE_LOOP" });
  };

  const handleToggleShuffle = () => {
    dispatch({ type: "TOGGLE_SHUFFLE" });
  };

  const handleChangeSpeed = (newSpeed) => {
    const audio = audioRef.current;

    dispatch({ type: "SET_PLAYBACK_SPEED", payload: newSpeed });

    if (audio) {
      audio.playbackRate = newSpeed;
    }
  };

  const handleSeek = (newTime) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = newTime;

    dispatch({
      type: "SET_CURRENT_TIME",
      payload: newTime,
    });
  };

  const handleChangeVolume = (newVolume) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (newVolume > 0) {
      previousVolumeRef.current = newVolume;
    }

    dispatch({ type: "SET_VOLUME", payload: newVolume });

    audio.volume = newVolume;

    if (newVolume === 0) {
      audio.muted = true;
      dispatch({ type: "MUTE" });
    } else {
      audio.muted = false;
      dispatch({ type: "UNMUTE" });
    }
  };

  return {
    audioRef,

    currentIndex: audioState.currentIndex,
    currentSong: audioState.currentSong,
    isPlaying: audioState.isPlaying,
    isLoading: audioState.isLoading,
    currentTime: audioState.currentTime,
    duration,

    isMuted: audioState.isMuted,
    loopEnabled: audioState.loopEnabled,
    shuffleEnabled: audioState.shuffleEnabled,
    playbackSpeed: audioState.playbackSpeed,
    volume: audioState.volume,

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
  };
};

export default useAudioPlayer;



