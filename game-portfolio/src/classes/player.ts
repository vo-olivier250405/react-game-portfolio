export class Player {
  position: { x: number; y: number };
  width: number;
  height: number;
  sides: { bottom: number };

  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.width = 100;
    this.height = 100;
    this.sides = { bottom: this.position.y + this.height };
  }

  draw(canvaSurface: CanvasRenderingContext2D) {
    canvaSurface.fillStyle = "blue";
    canvaSurface.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(canvas: HTMLCanvasElement) {
    if (this.sides.bottom < canvas.height) {
      this.position.y++;
      this.sides.bottom = this.position.y + this.height;
    }
  }
}
