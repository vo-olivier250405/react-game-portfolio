import "./styles/App.css";
import { useState } from "react";
import { Home, Game } from "./components/organisms";

export const App = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const handleOnClick = () => {
    setIsPlaying(!isPlaying);
  };

  if (isPlaying) {
    return <Game buttonFunction={handleOnClick} />;
  }
  return <Home buttonFunction={handleOnClick} />;
};
