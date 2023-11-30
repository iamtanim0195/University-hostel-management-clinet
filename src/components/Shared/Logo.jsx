import { Link } from "react-router-dom";
import logoImg from '../../assets/images/logo.png'

const Logo = () => {
    return (
        <div>
            <Link to='/'
            className='flex'>
            <img
                className='hidden md:block'
                src={logoImg}
                alt='logo'
                width='60'
                height='60'
            />
            <div className='relative top-0 md:top-5 text-4xl '>
                icu
            </div>
        </Link></div>
    )
}

export default Logo;