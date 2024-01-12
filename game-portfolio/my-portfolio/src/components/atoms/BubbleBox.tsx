type BubbleBoxProps = {
  text: JSX.Element;
};

export const BubbleBox = (props: BubbleBoxProps) => {
  return <div className="bubble-text">{props.text}</div>;
};
