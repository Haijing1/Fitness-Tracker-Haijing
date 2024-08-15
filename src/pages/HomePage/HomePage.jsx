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
            <h2>Ready for workout?</h2>
            <h2>Let’s start exercise!</h2>
        </div>
    )
}

export default HomePage
