export type playerProps = {
  X: number;
  Y: number;
  heigth: number;
};

export type Player = {
  position: { x: number; y: number };
  height: number;
  width: number;
  draw: () => void;
};
