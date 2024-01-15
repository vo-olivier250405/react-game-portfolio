type ISprite = {
  position: { x: number; y: number };
  path: string;
  width: number;
  height: number;
};

export class Sprite {
  image: HTMLImageElement;
  position: { x: number; y: number };
  loaded: boolean;
  width: number;
  height: number;

  constructor(props: ISprite) {
    this.position = props.position;
    this.width = props.width;
    this.height = props.height;
    this.image = new Image();
    this.image.src = props.path;
    this.image.onload = () => {
      this.loaded = true;
    };
    this.loaded = false;
  }
  draw(canvaSurface: CanvasRenderingContext2D): void {
    if (this.loaded)
      canvaSurface.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
  }
}
