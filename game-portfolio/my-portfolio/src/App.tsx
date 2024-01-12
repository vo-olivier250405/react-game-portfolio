import "./styles/App.css";
import { useState } from "react";
import { Button } from "./components/atoms";

export const App = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  if (isPlaying) {
    return (
      <div>
        Hello
        <Button text="Sortons" onClick={() => setIsPlaying(!isPlaying)} />
      </div>
    );
  }
  return (
    <div>
      <Button text="Jouons" onClick={() => setIsPlaying(!isPlaying)} />
    </div>
  );
};
