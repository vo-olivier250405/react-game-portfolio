import { Button } from "../atoms";

type homeProps = {
  buttonFunction: () => void;
};
export const Home = (props: homeProps) => {
  return (
    <section className="home">
      <div className="name">
        <h1>
          Hi, I'm <span>Vo Olivier</span>, Etna student !
        </h1>
        <Button text="Jouons" onClick={props.buttonFunction}></Button>
      </div>
      <div className="character"></div>
    </section>
  );
};
