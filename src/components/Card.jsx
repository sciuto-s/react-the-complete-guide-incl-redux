import "./style/Card.css";

const Card = (props) => {
  //FIGATA
  const classes = "card " + props.className;
  return (
    <div className={classes}>
      {props.children}
      {console.log(props)}
    </div>
  );
};

export default Card;
