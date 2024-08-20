import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddExercisePage from "./pages/AddExercisePage/AddExercisePage.jsx";
import AddMoreExercisePage from "./pages/AddMoreExercisePage/AddMoreExercisePage.jsx";
import AddSetPage from "./pages/AddSetPage/AddSetPage.jsx";
import SingleDatePage from "./pages/SingleDatePage/SingleDatePage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SingleDatePage />} />
          <Route path="/add-exercise" element={<AddExercisePage />} />
          <Route path="/add-exercise/:dateId" element={<AddMoreExercisePage />} />
          <Route path="/add-set/:dateId/:exerciseId/:date/:exerciseName" element={<AddSetPage />} />
          <Route path="/:dateId" element={<SingleDatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
