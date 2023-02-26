import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import { TextProvider } from "./store/TextContext";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TextProvider>
            <Main></Main>
          </TextProvider>
        }
      ></Route>
    </Routes>
  );
}
export default App;
