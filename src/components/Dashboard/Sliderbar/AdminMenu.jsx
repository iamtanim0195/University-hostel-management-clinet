import { IoIosAddCircle } from 'react-icons/io'
import MenuItem from './MenuItem '
import { GiMeal } from 'react-icons/gi'

const AdminMenu = () => {
    return (
        <>
            <MenuItem
                icon={IoIosAddCircle}
                label='Add meal'
                address='add-meal'
            />
            <MenuItem
                icon={GiMeal}
                label='All meals'
                address='all-meals'
            /></>
    )
}

export default AdminMenu