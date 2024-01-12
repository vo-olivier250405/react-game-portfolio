import "./style.css";
import { playerProps, Player } from "./interfaces/player";

const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

const canvas_surface: CanvasRenderingContext2D = canvas.getContext("2d")!;

canvas.width = 64 * 64;
canvas.height = 64 * 9;

// init a player
const player: Player = {
  position: { x: 100, y: 100 },
  width: 100,
  height: 100,
  draw() {
    canvas_surface.fillStyle = "blue";
    canvas_surface.fillRect(
      player.position.x,
      player.position.y,
      player.width,
      player.height
    );
  },
};

const clearRectWhileAnimate = (ref: CanvasRenderingContext2D) => {
  ref.clearRect(0, 0, canvas.width, canvas.height);
};

let bottom = player.position.y + player.height;

export const gravity = (object: Player) => {
  if (bottom < canvas.height) {
    object.position.y++;
    bottom = player.position.y + player.height;
  }
};

// animation loop
export const animatePlayer = () => {
  /**Redraw player rect infinitely */
  window.requestAnimationFrame(animatePlayer);

  canvas_surface.fillStyle = "red";
  canvas_surface.fillRect(0, 0, canvas.width, canvas.height);
  player.draw();
  gravity(player);
};

animatePlayer();
