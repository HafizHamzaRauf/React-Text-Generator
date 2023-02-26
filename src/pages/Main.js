import { useContext } from "react";
import Form from "../components/Form";
import Heading from "../components/Heading";
import Text from "../components/Text";
import TextContext, { TextProvider } from "../store/TextContext";
import copy from "copy-to-clipboard";
function Main(props) {
  const context = useContext(TextContext);
  const copyHandler = () => {
    const string = context.text.join("\n");
    copy(string);
  };
  return (
    <main className="main">
      <Heading>Generate Random Text</Heading>

      <Form></Form>
      <Text></Text>
      {context.text.length > 0 && (
        <button onClick={copyHandler} className="btn">
          copy to clipboard
        </button>
      )}
    </main>
  );
}
export default Main;
