import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AddExercisePage from "./pages/AddExercisePage/AddExercisePage.jsx";
import SingleDatePage from "./pages/SingleDatePage/SingleDatePage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-exercise" element={<AddExercisePage />} />
          <Route path="/:dateId" element={<SingleDatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
