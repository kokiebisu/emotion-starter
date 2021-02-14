import React from "react";

export const Button: React.FC<{ onClick: () => void }> = ({
  onClick = () => alert("button clicked"),
}) => {
  return <button onClick={onClick}>button</button>;
};
