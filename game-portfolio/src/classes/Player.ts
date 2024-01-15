import { CollisionBlock, Sprite } from ".";

type PlayerProps = {
  collisionBlocks: CollisionBlock[];
  path: string;
  position: { x: number; y: number };
  width: number;
  height: number;
};

export class Player extends Sprite {
  position: { x: number; y: number };
  width: number;
  height: number;
  sides: { bottom: number };
  velocity: { x: number; y: number };
  gravity: number;
  collisionBlocks: CollisionBlock[];
  applyGravity: (canvas: HTMLCanvasElement) => void;

  constructor(props: PlayerProps) {
    super({
      path: props.path,
      position: props.position,
      width: props.width,
      height: props.height,
    });
    this.position = props.position;
    this.width = props.width;
    this.height = props.height;
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

  // draw(canvaSurface: CanvasRenderingContext2D): void {
  //   canvaSurface.fillStyle = "blue";
  //   canvaSurface.fillRect(
  //     this.position.x,
  //     this.position.y,
  //     this.width,
  //     this.height
  //   );
  // }

  update(_canvas: HTMLCanvasElement): void {
    this.checkCollisions();
    // this.applyGravity(canvas);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  checkCollisions() {
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
        // going to the left and right
        if (this.velocity.x < 0 || this.velocity.x > 0) {
          this.position.x -= this.velocity.x;
          break;
        }
        // going bottom and up
        if (this.velocity.y < 0 || this.velocity.y > 0) {
          this.position.y -= this.velocity.y;
          break;
        }
      }
    }
  }
}
