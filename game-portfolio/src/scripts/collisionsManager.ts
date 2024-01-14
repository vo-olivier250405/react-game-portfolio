import { CollisionBlock } from "../classes";
import { parsedCollision } from "./data";

export const collisionBlocks: CollisionBlock[] = [];
// collisions
parsedCollision.forEach((row: number[], y: number) => {
  row.forEach((symbol: number, x) => {
    if (symbol >= 900 && symbol <= 1000) {
      // collisions
      collisionBlocks.push(
        new CollisionBlock({
          position: { x: x * 16, y: y * 16 },
        })
      );
    }
  });
});
