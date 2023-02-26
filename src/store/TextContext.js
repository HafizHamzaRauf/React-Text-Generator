import React, { useContext, useState } from "react";
const TextContext = React.createContext({
  generateText(paragraph, characters) {},
  text: [],
});
const getLetters = () => {
  const letters = [];
  for (let i = 97; i <= 122; i++) {
    letters.push(String.fromCharCode(i));
  }
  for (let i = 0; i < 4; i++) {
    letters.push(" ");
  }
  return letters;
};
function generateRandomNumber() {
  return Math.floor(Math.random() * 30);
}
export const TextProvider = (props) => {
  const [text, setText] = useState([]);
  const generateText = (p, c) => {
    const newText = [];
    const letters = getLetters();
    for (let i = 0; i < p; i++) {
      let newString = "";
      for (let j = 0; j < c; j++) {
        const num = generateRandomNumber();
        newString += letters[num];
      }
      newText.push(newString);
    }
    setText((prevState) => [...newText]);
  };
  return (
    <TextContext.Provider value={{ text: text, generateText: generateText }}>
      {props.children}
    </TextContext.Provider>
  );
};

export default TextContext;
