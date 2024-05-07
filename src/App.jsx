import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DefautlLayout } from "./components/layout";
import { HomePage } from "./components/pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefautlLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
