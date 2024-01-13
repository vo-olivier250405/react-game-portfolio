import "./style.css";
import { Player } from "./classes";

const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

const canvasSurface: CanvasRenderingContext2D = canvas.getContext("2d")!;

canvas.width = 64 * 64;
canvas.height = 64 * 9;

// init a player
const player = new Player();

// animation loop
export const animatePlayer = (): void => {
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

window.addEventListener("keydown", (event: KeyboardEvent): void => {
  switch (event.key) {
    case "z":
      // if (player.velocity.y === 0) player.velocity.y = -20;
      player.velocity.y = -4;
      break;
    case "q":
      player.velocity.x = -4;
      break;
    case "d":
      player.velocity.x = 4;
      break;
    case "s":
      player.velocity.y = 4;
      break;
  }
});

window.addEventListener("keyup", (event: KeyboardEvent): void => {
  if (event.key) {
    if (["z", "s"].includes(event.key)) {
      player.velocity.y = 0;
    } else if (["q", "d"].includes(event.key)) {
      player.velocity.x = 0;
    }
  }
});
