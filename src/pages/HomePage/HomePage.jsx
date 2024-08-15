// import WarehouseList from '../../components/WarehouseList/WarehouseList'
// import AddNewWarehousePage from '../AddNewWarehousePage/AddNewWarehousePage';
// import EditWarehousePage from '../EditWarehousePage/EditWarehousePage';
// import WarehouseDetailsPage from '../WarehouseDetailsPage/WarehouseDetailsPage';
import "./HomePage.scss";
import arrow_down from "../../assets/icons/arrow_down.png";
import { useLocation, useParams } from 'react-router-dom'

function HomePage() {
    const location = useLocation();
    const { warehouseId } = useParams();

    // if (location.pathname === "/warehouse/addNewWarehouse") {
    //     return (
    //         <AddNewWarehousePage />
    //     )
    // } else if (location.pathname === `/warehouse/editWarehouse/${warehouseId}`) {
    //     return (
    //         <EditWarehousePage />
    //     )
    // } else if (location.pathname === `/warehouse/${warehouseId}`) {
    //     return (
    //         <WarehouseDetailsPage />
    //     )
    // } else {
    //     return (
    //         <WarehouseList />
    //     )
    // }
    return (
        <div>
            <div className="starting-lines">
                <h2 className="starting__item">Ready for workout?</h2>
                <h2 className="starting__item">Let’s start exercise!</h2>
                <img className="starting__icon" src={arrow_down} alt="arrow down icon" />
            </div>
            <div className="footer">
                <button className="add-button">+</button>
            </div>

        </div>
    )
}

export default HomePage
