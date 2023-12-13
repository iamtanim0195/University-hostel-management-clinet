import { IoIosAddCircle } from 'react-icons/io'
import MenuItem from './MenuItem '
import { GiMeal } from 'react-icons/gi'
import { FaUsers } from "react-icons/fa";

const AdminMenu = () => {
    return (
        <>
            <MenuItem
                icon={FaUsers}
                label='Manage Users'
                address='manage-users'
            />
            <MenuItem
                icon={IoIosAddCircle}
                label='Add meal'
                address='add-meal'
            />
            <MenuItem
                icon={GiMeal}
                label='All meals'
                address='all-meals'
            />
        </>
    )
}

export default AdminMenu