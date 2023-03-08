import "./Button.css"

const Button = ({title, active, click}) => {
  return <button className={`element_btn ${title === active ? title : ''}`} onClick={() => click(title)}>{title}</button>
};

export default Button;
