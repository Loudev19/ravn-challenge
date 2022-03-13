import { NavLink } from 'react-router-dom';

import { FaBars, FaBorderAll } from 'react-icons/fa';

import './SwitchViews.css';

function SwitchViews() {
    return (
        <div className="options">
            <NavLink className={({isActive}) => isActive ? "switch-active" : "switch"} to="/my-task">
                <FaBars />
            </NavLink>
            <NavLink className={({isActive}) => isActive ? "switch-active" : "switch"} to="/">
                <FaBorderAll />
            </NavLink>
        </div>
    );
}

export default SwitchViews;