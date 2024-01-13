export class Player {
  position: { x: number; y: number };
  width: number;
  height: number;
  sides: { bottom: number };
  velocity: { x: number; y: number };
  gravity: number;
  applyGravity: (canvas: HTMLCanvasElement) => void;

  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.width = 100;
    this.height = 100;
    this.sides = { bottom: this.position.y + this.height };
    this.velocity = { x: 0, y: 0 };
    this.gravity = 1;

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

  update(canvas: HTMLCanvasElement): void {
    // this.applyGravity(canvas);
    canvas;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
