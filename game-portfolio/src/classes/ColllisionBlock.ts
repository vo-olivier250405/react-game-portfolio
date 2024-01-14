type ICollisionBlock = {
  position: { x: number; y: number };
};

export class CollisionBlock {
  position: { x: number; y: number };
  width: number;
  height: number;

  constructor(props: ICollisionBlock) {
    this.position = props.position;
    this.width = 16;
    this.height = 16;
  }

  draw(canvaSurface: CanvasRenderingContext2D) {
    canvaSurface.fillStyle = "red";
    canvaSurface.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
