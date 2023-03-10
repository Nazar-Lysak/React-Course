import "./Button.css"

const Button = ({title, active, click}) => {
  return <button className={`element_btn ${title} ${title === active ? title+'_active' : ''}`} onClick={() => click(title)}>{title}</button>
};

export default Button;
