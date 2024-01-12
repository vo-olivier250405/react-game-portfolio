import { Button } from "../atoms";

type homeProps = {
  buttonFunction: () => void;
};
export const Home = (props: homeProps) => {
  return (
    <section className="home">
      <div className="name">Hi, I'm VO OLIVIER !</div>
      <div className="character"></div>
      <Button text="Jouons" onClick={props.buttonFunction}></Button>
    </section>
  );
};
