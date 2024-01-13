type ISprite = {
  position: { x: number; y: number };
  path: string;
};

export class Sprite {
  image: HTMLImageElement;
  position: { x: number; y: number };

  constructor(props: ISprite) {
    this.position = props.position;
    this.image = new Image();
    this.image.src = props.path;
  }
  draw(canvaSurface: CanvasRenderingContext2D): void {
    canvaSurface.drawImage(this.image, this.position.x, this.position.y);
  }
}
