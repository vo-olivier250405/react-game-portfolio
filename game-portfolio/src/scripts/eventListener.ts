import { IKeys } from "../types";

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

export const keyupEvenetListener = (KEYS: IKeys) => {
  window.addEventListener("keyup", (event: KeyboardEvent): void => {
    switch (event.key) {
      case "z":
        // if (player.velocity.y === 0) player.velocity.y = -20;
        KEYS.z.isPressed = false;
        break;
      case "q":
        KEYS.q.isPressed = false;
        break;
      case "d":
        KEYS.d.isPressed = false;
        break;
      case "s":
        KEYS.s.isPressed = false;
        break;
    }
  });
};
