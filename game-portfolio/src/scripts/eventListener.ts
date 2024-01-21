import { Player } from "../classes";
import { IKeys } from "../types";

const border: { x: number; y: number } = {
  x: window.innerWidth / 3,
  y: window.innerHeight / 3,
};

export const keydownEventListener = (KEYS: IKeys) => {
  window.addEventListener("keydown", (event: KeyboardEvent): void => {
    switch (event.key) {
      case "z":
        // if (player.velocity.y === 0) player.velocity.y = -20;
        KEYS.z.isPressed = true;
        break;
      case "q":
        KEYS.q.isPressed = true;
        break;
      case "d":
        KEYS.d.isPressed = true;
        break;
      case "s":
        KEYS.s.isPressed = true;
        break;
    }
  });
};

export const keyupEvenetListener = (KEYS: IKeys, player: Player) => {
  window.addEventListener("keyup", (event: KeyboardEvent): void => {
    switch (event.key) {
      case "z":
        // if (player.velocity.y === 0) player.velocity.y = -20;
        KEYS.z.isPressed = false;
        player.switchSprite("idleTop");
        break;
      case "q":
        KEYS.q.isPressed = false;
        player.switchSprite("idleLeft");
        break;
      case "d":
        KEYS.d.isPressed = false;
        player.switchSprite("idleRight");
        break;
      case "s":
        KEYS.s.isPressed = false;
        player.switchSprite("idleBottom");
        break;
    }
  });
};

export const cameraTracking = (canvas: HTMLCanvasElement, _player: Player) => {
  // canvas.style.transition = "all 0.1s ease";
  canvas.style.transform = `translate3d( ${-_player.position.x + border.x}px, ${
    -_player.position.y + border.y
  }px, 0 )`;
};
