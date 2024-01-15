import { CollisionBlock } from "../classes";
import { parsedCollision } from "./data";

export const collisionBlocks: CollisionBlock[] = [];

const createObjectsFrom2DArray = (datas: number[][]) => {
  datas.forEach((row: number[], y: number) => {
    row.forEach((symbol: number, x) => {
      if (symbol === 925) {
        // collisions
        collisionBlocks.push(
          new CollisionBlock({
            position: { x: x * 16, y: y * 16 },
          })
        );
      }
    });
  });
};

// collisions creation
createObjectsFrom2DArray(parsedCollision);
