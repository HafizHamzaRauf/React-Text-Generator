import classes from "./Form.module.css";
import { useRef, useContext } from "react";
import TextContext from "../store/TextContext";
function Form(props) {
  const paragraphInputRef = useRef();
  const textContext = useContext(TextContext);
  const charactersInputRef = useRef();
  const formHandler = (e) => {
    e.preventDefault();

    const p = paragraphInputRef.current.value;
    const c = charactersInputRef.current.value;
    if (p.trim() === "" || c.trim() === "") {
      return;
    }
    textContext.generateText(p, c);
    paragraphInputRef.current.value = "";
    charactersInputRef.current.value = "";
  };
  return (
    <form onSubmit={formHandler} className={classes.form}>
      <div className={classes.labels}>
        <label htmlFor={"paragraph"}>No of Paragraph:</label>
        <input
          ref={paragraphInputRef}
          min={0}
          id={"paragraph"}
          type={"number"}
        />
      </div>
      <div className={classes.labels}>
        <label htmlFor={"characters"}>Characters per paragraph:</label>
        <input
          ref={charactersInputRef}
          id={"characters"}
          type={"number"}
          min={0}
        />
      </div>
      <button className={"btn"}>generate</button>
    </form>
  );
}

export default Form;
