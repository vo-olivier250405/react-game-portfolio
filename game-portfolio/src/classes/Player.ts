import { CollisionBlock, Sprite } from ".";

type PlayerProps = {
  collisionBlocks: CollisionBlock[];
  path: string;
  position: { x: number; y: number };
  width: number;
  height: number;
  frameRate: number;
  animations: {
    [key: string]: {
      frameRate: number;
      loop: boolean;
      path: string;
      image: HTMLImageElement;
    };
  };
};

export class Player extends Sprite {
  position: { x: number; y: number };
  width: number;
  height: number;
  sides: { bottom: number };
  velocity: { x: number; y: number };
  gravity: number;
  collisionBlocks: CollisionBlock[];
  hitbox: { position: { x: number; y: number }; width: number; height: number };
  applyGravity: (canvas: HTMLCanvasElement) => void;

  constructor(props: PlayerProps) {
    super({
      path: props.path,
      position: props.position,
      width: props.width,
      height: props.height,
      frameRate: props.frameRate,
      animations: props.animations,
    });

    this.position = props.position;
    this.width = props.width;
    this.height = props.height;
    this.sides = { bottom: this.position.y + this.height };
    this.velocity = { x: 0, y: 0 };
    this.gravity = 1;
    this.collisionBlocks = props.collisionBlocks;
    this.hitbox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      width: 20,
      height: 25,
    };
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

  update(
    _canvas: HTMLCanvasElement,
    _canvasSurface: CanvasRenderingContext2D
  ): void {
    // _canvasSurface.fillStyle = "rgba(0, 0, 0, 0.5)";
    // _canvasSurface.fillRect(
    //   this.position.x,
    //   this.position.y,
    //   this.width,
    //   this.height
    // );

    this.updateHitbox();
    this.checkCollisions();
    //this.applyGravity(canvas);
    // _canvasSurface.fillStyle = "rgba(255, 0, 0, 0.5)";
    // _canvasSurface.fillRect(
    //   this.hitbox.position.x,
    //   this.hitbox.position.y,
    //   this.hitbox.width,
    //   this.hitbox.height
    // );
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  checkCollisions() {
    // check for horizontal collision
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      // if a collision exists
      if (
        this.hitbox.position.x + this.velocity.x <=
          collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width + this.velocity.x >=
          collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height + this.velocity.y >=
          collisionBlock.position.y &&
        this.hitbox.position.y + this.velocity.y <=
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

  updateHitbox() {
    this.hitbox.position = { x: this.position.x + 5, y: this.position.y + 32 };
  }

  switchSprite(name: string) {
    if (this.image !== this.animations[name].image) {
      // this.currentFrame = 0;
      this.image = this.resizeImage(this.animations[name].image, 120, 60);
      if (name.includes("idle")) {
        this.image = this.resizeImage(this.animations[name].image, 28, 60);
      }
      this.frameRate = this.animations[name].frameRate;
    }
  }
}
