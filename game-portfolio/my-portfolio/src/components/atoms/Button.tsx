type buttonProps = {
  text: string;
  onClick: () => void;
};

export const Button = (props: buttonProps) => {
  return (
    <>
      <button className="buttons" onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
};
