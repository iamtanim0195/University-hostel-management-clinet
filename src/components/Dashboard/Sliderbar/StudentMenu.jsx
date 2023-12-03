import { IoIosAddCircle } from "react-icons/io"
import MenuItem from "./MenuItem "
import { GiMeal } from "react-icons/gi"

const StudentMenu = () => {
    return (
        <>
            <MenuItem
                icon={GiMeal}
                label='Requested Meals'
                address='requested-meals'
            />
            <MenuItem
                icon={IoIosAddCircle}
                label='My Reviews'
                address='my-reviewss'
            />
        </>
    )
}

export default StudentMenu