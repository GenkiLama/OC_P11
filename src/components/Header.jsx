import logo from '../assets/images/LOGO(1).svg'
import { NavLink } from 'react-router-dom'
export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Logo Kasa"/>
            </div>
            <nav className='navBar'>
                <NavLink 
                to="/"
                className={({isActive})=>isActive?"active-link":''}
                >Accueil</NavLink>
                <NavLink 
                to='/about'
                className={({isActive})=>isActive?"active-link":''}
                >A propos</NavLink>
            </nav>
        </header>
    )
}