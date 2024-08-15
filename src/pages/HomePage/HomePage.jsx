// import WarehouseList from '../../components/WarehouseList/WarehouseList'
// import AddNewWarehousePage from '../AddNewWarehousePage/AddNewWarehousePage';
// import EditWarehousePage from '../EditWarehousePage/EditWarehousePage';
// import WarehouseDetailsPage from '../WarehouseDetailsPage/WarehouseDetailsPage';
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
            <h1>Home page</h1>
        </div>
    )
}

export default HomePage
