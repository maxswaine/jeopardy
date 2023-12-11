import "./Divs.scss";

type Div = {
  value: number;
};

const Divs = ({ value }: Div) => {
  return <div className="question-box">{value}</div>;
};

export default Divs;
