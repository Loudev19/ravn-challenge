import { NavLink } from 'react-router-dom';

import * as routes from '../../constants/Routes';

import { FaBars, FaBorderAll } from 'react-icons/fa';

import './SwitchViews.css';

function SwitchViews() {
    return (
        <div className="options">
            <NavLink 
            className={({isActive}) => isActive ? "switch-active" : "switch"} 
            to={routes.MY_TASKS}>
                <FaBars />
            </NavLink>
            <NavLink 
            className={({isActive}) => isActive ? "switch-active" : "switch"} 
            to={routes.DASHBOARD}>
                <FaBorderAll />
            </NavLink>
        </div>
    );
}

export default SwitchViews;