type ISprite = {
  position: { x: number; y: number };
  path: string;
};

export class Sprite {
  image: HTMLImageElement;
  position: { x: number; y: number };
  loaded: boolean;

  constructor(props: ISprite) {
    this.position = props.position;
    this.image = new Image();
    this.image.src = props.path;
    this.image.onload = () => {
      this.loaded = true;
    };
    this.loaded = false;
  }
  draw(canvaSurface: CanvasRenderingContext2D): void {
    if (this.loaded)
      canvaSurface.drawImage(this.image, this.position.x, this.position.y);
  }
}
