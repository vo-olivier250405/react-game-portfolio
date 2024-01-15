type ISprite = {
  position: { x: number; y: number };
  path: string;
  width: number;
  height: number;
};

const playerSheetToResize: string[] = [
  "src/assets/img/hero/walk_right.png",
  "src/assets/img/hero/walk_left.png",
  "src/assets/img/hero/walk_bottom.png",
  "src/assets/img/hero/walk_up.png",
];

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
      if (playerSheetToResize.includes(props.path)) {
        this.width /= 4;
      }
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
