import "./style.css";
import { Player, Sprite, CollisionBlock } from "./classes";
import { IKeys } from "./types";
import {
  keydownEventListener,
  keyupEvenetListener,
  collisionBlocks,
  cameraTracking,
} from "./scripts";

const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

const canvasSurface: CanvasRenderingContext2D = canvas.getContext("2d")!;

canvas.width = 64 * 64;
canvas.height = 64 * 9;

// init the background
const background = new Sprite({
  position: { x: 0, y: 0 },
  path: "src/assets/maps/background.png",
  width: 1024,
  height: 640,
  frameRate: 1,
  animations: null,
});

const allPlayersSheet: { [key: string]: string } = {
  walk_left: "src/assets/img/hero/walk_left.png",
  walk_right: "src/assets/img/hero/walk_right.png",
  walk_up: "src/assets/img/hero/walk_up.png",
  walk_bottom: "src/assets/img/hero/walk_bottom.png",
};

// init a player
const player = new Player({
  collisionBlocks,
  path: allPlayersSheet.walk_bottom,
  position: { x: 878, y: 440 },
  width: 120,
  height: 60,
  frameRate: 3.9,
  animations: {
    idleRight: {
      frameRate: 1,
      loop: true,
      path: "src/assets/img/hero/idle_right.png",
      image: new Image(),
    },
    idleLeft: {
      frameRate: 1,
      loop: true,
      path: "src/assets/img/hero/idle_left.png",
      image: new Image(),
    },
    idleTop: {
      frameRate: 1,
      loop: true,
      path: "src/assets/img/hero/idle_top.png",
      image: new Image(),
    },
    idleBottom: {
      frameRate: 1,
      loop: true,
      path: "src/assets/img/hero/idle_bottom.png",
      image: new Image(),
    },
    runRight: {
      frameRate: 3.9,
      loop: true,
      path: "src/assets/img/hero/walk_right.png",
      image: new Image(),
    },
    runLeft: {
      frameRate: 3.9,
      loop: true,
      path: "src/assets/img/hero/walk_left.png",
      image: new Image(),
    },
    runTop: {
      frameRate: 3.9,
      loop: true,
      path: "src/assets/img/hero/walk_up.png",
      image: new Image(),
    },
    runBottom: {
      frameRate: 3.9,
      loop: true,
      path: "src/assets/img/hero/walk_bottom.png",
      image: new Image(),
    },
  },
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
    player.switchSprite("runTop");
  } else if (KEYS.s.isPressed) {
    player.velocity.y = 2;
    player.switchSprite("runBottom");
  } else if (KEYS.d.isPressed) {
    player.velocity.x = 2;
    player.switchSprite("runRight");
  } else if (KEYS.q.isPressed) {
    player.velocity.x = -2;
    player.switchSprite("runLeft");
  }

  // collisions
  collisionBlocks.forEach((collisionBlock: CollisionBlock) => {
    collisionBlock.draw(canvasSurface);
  });

  // player
  player.draw(canvasSurface);
  player.update(canvas, canvasSurface);
  cameraTracking(canvas, player);
  // console.log(player.position);
};

animatePlayer();
keydownEventListener(KEYS);
keyupEvenetListener(KEYS, player);
console.log("%cGet out and enjoy my game.", "background: #222; color: #bada55");
console.log("\n%c— Olivier", "color: grey");
