import classes from "./Heading.module.css";
function Heading(props) {
  return <h1 className={classes.heading}>{props.children}</h1>;
}
export default Heading;
