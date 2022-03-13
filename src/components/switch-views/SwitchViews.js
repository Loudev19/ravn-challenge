import { NavLink } from 'react-router-dom';

import { FaBars, FaBorderAll } from 'react-icons/fa';

function SwitchViews(props) {
    return (
        <div className="options">
            <NavLink className={({isActive}) => isActive ? "switch-active" : "switch"} to="/">
                <FaBorderAll />
            </NavLink>
            <NavLink className={({isActive}) => isActive ? "switch-active" : "switch"} to="/my-task">
                <FaBars />
            </NavLink>
        </div>
    );
}

export default SwitchViews;