import "./style.css";
import { Player, Sprite, CollisionBlock } from "./classes";
import { IKeys } from "./types";
import {
  keydownEventListener,
  keyupEvenetListener,
  collisionBlocks,
} from "./scripts";

const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

const canvasSurface: CanvasRenderingContext2D = canvas.getContext("2d")!;

canvas.width = 64 * 64;
canvas.height = 64 * 9;

// init the background
const background = new Sprite({
  position: { x: 0, y: 0 },
  path: "src/assets/img/background-cyber.png",
});

// init a player
const player = new Player({
  collisionBlocks,
});

// keys
const KEYS: IKeys = {
  z: { isPressed: false },
  s: { isPressed: false },
  d: { isPressed: false },
  q: { isPressed: false },
};

// animation loop
export const animatePlayer = (): void => {
  /**Redraw player rect infinitely */
  window.requestAnimationFrame(animatePlayer);

  // background
  background.draw(canvasSurface);

  // player's movements
  player.velocity = { x: 0, y: 0 };
  if (KEYS.z.isPressed) {
    player.velocity.y = -2;
  } else if (KEYS.s.isPressed) {
    player.velocity.y = 2;
  } else if (KEYS.d.isPressed) {
    player.velocity.x = 2;
  } else if (KEYS.q.isPressed) {
    player.velocity.x = -2;
  }

  // collisions
  collisionBlocks.forEach((collisionBlock: CollisionBlock) => {
    collisionBlock.draw(canvasSurface);
  });

  // player
  player.draw(canvasSurface);
  player.update(canvas);
  // console.log(player.position);
};

animatePlayer();
keydownEventListener(KEYS);
keyupEvenetListener(KEYS);

console.log(
  "%cGet out and enjoy my game, sneaky developpers.",
  "background: #222; color: #bada55"
);
console.log("\n%c— Olivier", "color: grey");
