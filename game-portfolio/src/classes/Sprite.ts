class Sprite {
  image: HTMLImageElement;
  position: { x: number; y: number };

  constructor({ position }: { position: { x: number; y: number } }) {
    this.position = position;
    this.image = new Image();
    this.image.src = "";
  }
}
