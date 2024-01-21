type ISprite = {
  position: { x: number; y: number };
  path: string;
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
  } | null;
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
  frameRate: number;
  currentFrame: number;
  elapsedFrame: number;
  frameBuffer: number;
  animations: {
    [key: string]: {
      frameRate: number;
      loop: boolean;
      path: string;
      image: HTMLImageElement;
    };
  };

  constructor(props: ISprite) {
    this.position = props.position;
    this.image = new Image();
    this.image.src = props.path;

    this.frameRate = props.frameRate;
    this.width = this.image.width / this.frameRate;
    this.height = this.image.height;
    this.currentFrame = 0;

    this.image.onload = () => {
      this.loaded = true;
      if (playerSheetToResize.includes(props.path)) {
        this.image = this.resizeImage(this.image, props.width, props.height);
        this.width = this.image.width / this.frameRate;
        this.height = this.image.height;
      }
    };
    this.loaded = false;
    this.elapsedFrame = 0;
    this.frameBuffer = 15;
    this.animations = props.animations!;

    // change animations
    if (this.animations) {
      for (let key in this.animations) {
        const newImage = new Image();
        newImage.src = this.animations[key].path;
        this.animations[key].image = newImage;
      }
    }
  }

  draw(canvaSurface: CanvasRenderingContext2D): void {
    if (this.loaded) {
      const cropBox = {
        position: { x: this.width * this.currentFrame, y: 0 },
        width: this.width,
        height: this.height,
      };

      canvaSurface.drawImage(
        this.image,
        cropBox.position.x,
        cropBox.position.y,
        cropBox.width,
        cropBox.height,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
      this.updateFrames();
    }
  }

  resizeImage(image: HTMLImageElement, newWidth: number, newHeight: number) {
    // Créer un canevas temporaire
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Définir les dimensions du canevas
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Dessiner l'image redimensionnée sur le canevas
    ctx!.drawImage(image, 0, 0, newWidth, newHeight);

    // Créer une nouvelle image avec les dimensions modifiées
    const resizedImage = new Image();
    resizedImage.src = canvas.toDataURL("image/png");

    return resizedImage;
  }
  updateFrames() {
    this.elapsedFrame++;
    if (this.elapsedFrame % this.frameBuffer === 0) {
      if (this.currentFrame < this.frameRate - 1) this.currentFrame++;
      else this.currentFrame = 0;
    }
  }
}
