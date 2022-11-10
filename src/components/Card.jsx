import "./style/Card.css";

const Card = (props) => {
  //FIGATA/////
  const classes = "card " + props.className;
  /////////////
  {
    console.log(props);
  }
  return <div className={classes}>{props.children}</div>;
};

export default Card;
