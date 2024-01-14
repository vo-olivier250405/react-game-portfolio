import { CollisionBlock } from ".";

type PlayerProps = {
  collisionBlocks: CollisionBlock[];
};
export class Player {
  position: { x: number; y: number };
  width: number;
  height: number;
  sides: { bottom: number };
  velocity: { x: number; y: number };
  gravity: number;
  collisionBlocks: CollisionBlock[];
  applyGravity: (canvas: HTMLCanvasElement) => void;

  constructor(props: PlayerProps) {
    this.position = {
      x: 300,
      y: 240,
    };
    this.width = 16;
    this.height = 16;
    this.sides = { bottom: this.position.y + this.height };
    this.velocity = { x: 0, y: 0 };
    this.gravity = 1;
    this.collisionBlocks = props.collisionBlocks;

    // gravity (optional)
    this.applyGravity = (canvas: HTMLCanvasElement): void => {
      // movements
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.sides.bottom = this.position.y + this.height;

      // above bottom of canvas
      if (this.sides.bottom + this.velocity.y < canvas.height) {
        this.velocity.y += this.gravity;
        this.sides.bottom = this.position.y + this.height;
      } else this.velocity.y = 0;
    };
  }

  draw(canvaSurface: CanvasRenderingContext2D): void {
    canvaSurface.fillStyle = "blue";
    canvaSurface.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(_canvas: HTMLCanvasElement): void {
    // check for horizontal collision
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      // if a collision exists
      if (
        this.position.x + this.velocity.x <=
          collisionBlock.position.x + collisionBlock.width &&
        this.position.x + this.width + this.velocity.x >=
          collisionBlock.position.x &&
        this.position.y + this.height + this.velocity.y >=
          collisionBlock.position.y &&
        this.position.y + this.velocity.y <=
          collisionBlock.position.y + collisionBlock.height
      ) {
        // going to the left
        if (this.velocity.x < -1 || this.velocity.x > 1) {
          this.position.x -= this.velocity.x;
          break;
        }
        // going to the left
        if (this.velocity.y < -1 || this.velocity.y > 1) {
          this.position.y -= this.velocity.y;
          break;
        }
      }
    }

    // this.applyGravity(canvas);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
