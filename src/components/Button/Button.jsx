const Button = ({ clickHandler, text }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

export default Button;
