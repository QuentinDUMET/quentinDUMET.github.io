import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Navlink = () => {

    return (
        <>
            <NavLink to="creatures"><img src="./assets/Creatures.png"/></NavLink>
            <NavLink to="monsters"><img src="./assets/Monsters.png"/></NavLink>
            <NavLink to="materials"><img src="./assets/Materials.png"/></NavLink>
            <NavLink to="equipments"><img src="./assets/Equipment.png"/></NavLink>
            <NavLink to="treasures"><img src="./assets/Treasure.png"/></NavLink>
        </>
    );
}


const Navbar = ({page, setPage, setResearch}) => {
    
    return (
        <nav>
            <Navlink page={page} setPage={setPage} setResearch={setResearch} />
        </nav>
    )
}

export default Navbar

Navbar.propTypes = {
    page: PropTypes.string,
    setPage: PropTypes.func,
    setResearch: PropTypes.func,
}