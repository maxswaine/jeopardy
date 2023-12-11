import { MouseEventHandler } from "react";
import "./Divs.scss";

type Div = {
  value: number;
  handleClick: MouseEventHandler<HTMLDivElement>;
};

const Divs = ({ value, handleClick }: Div) => {
  return <div className="question-box" onClick={handleClick}>{value}</div>;
};

export default Divs;
