import { Button } from "../atoms";

type gameProps = {
  buttonFunction: () => void;
};

export const Game = (props: gameProps) => {
  return (
    <section className="home">
      <div className="name">Nous commencons</div>
      <div className="character"></div>
      <Button text="Sortons" onClick={props.buttonFunction}></Button>
    </section>
  );
};
