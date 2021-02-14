/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export const Button = ({ onClick = () => alert("button clicked") }) => {
  return (
    <button sx={{ bg: "red" }} onClick={onClick}>
      button
    </button>
  );
};
