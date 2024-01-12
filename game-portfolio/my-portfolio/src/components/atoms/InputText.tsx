import { ChangeEvent, useState } from "react";

type InputTextProps = {
  placeholder: string;
};

export const InputText = (props: InputTextProps) => {
  const [inputContent, setInputContent] = useState("");
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputContent(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputContent}
        placeholder={props.placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
};
