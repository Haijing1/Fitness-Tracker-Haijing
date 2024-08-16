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
          <Route path="/date" element={<SingleDatePage />} />

          {/* <Route path="/:date-id" element={<SingleDatePage />} /> */}










          {/* <Route path="/add-inventory" element={<InventoryPage />} />

          <Route path="/warehouses" element={<HomePage />} />
          <Route path="/warehouse/:warehouseId" element={<HomePage />} />
          <Route path="/warehouse/addNewWarehouse" element={<HomePage />} />
          <Route path="/warehouse/editWarehouse/:warehouseId" element={<HomePage />} />
          <Route path="/inventories" element={<InventoryPage />} />


          <Route path="/inventories/:inventoryId" element={<InventoryPage />} />
          <Route path="/inventories/update/:inventoryId" element={<InventoryPage />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
