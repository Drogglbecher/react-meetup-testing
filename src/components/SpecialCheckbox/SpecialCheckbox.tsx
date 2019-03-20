import * as React from "react";

export interface Props {
  text: string;
  onChange: () => void;
  isChecked: boolean;
}

export const SpecialCheckbox: React.SFC<Props> = ({
  onChange,
  text,
  isChecked
}) => {
  return (
    <>
      <input type="checkbox" defaultChecked={isChecked} onChange={onChange} />
      {isChecked || <span>{text}</span>}
      {isChecked && (
        <span style={{ backgroundColor: "green", padding: "1rem" }}>
          prechecked
        </span>
      )}
    </>
  );
};
