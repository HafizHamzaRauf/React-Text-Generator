import classes from "./Text.module.css";
import { useContext } from "react";
import TextContext from "../store/TextContext";
function Text() {
  const textContext = useContext(TextContext);
  const content = textContext.text.map((item) => <li>{item}</li>);
  return <ul className={classes.list}>{content}</ul>;
}

export default Text;
