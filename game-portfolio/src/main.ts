import "./style.css";
import { Player } from "./class";

const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

const canvasSurface: CanvasRenderingContext2D = canvas.getContext("2d")!;

canvas.width = 64 * 64;
canvas.height = 64 * 9;

// init a player
const player = new Player();

// animation loop
export const animatePlayer = () => {
  /**Redraw player rect infinitely */
  window.requestAnimationFrame(animatePlayer);

  // background
  canvasSurface.fillStyle = "red";
  canvasSurface.fillRect(0, 0, canvas.width, canvas.height);

  // player
  player.draw(canvasSurface);
  player.update(canvas);
};

animatePlayer();
