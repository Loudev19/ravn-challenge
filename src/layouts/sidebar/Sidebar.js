import React from 'react';

import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/Routes';

import { FaBars, FaBorderAll } from 'react-icons/fa';

import './Sidebar.css';
import logo from '../../assets/logo.png' 

class Sidebar extends React.Component {
    render() {
      return (
        <div className="sidebar">
            <img className='logo' src={logo} alt='Ravn logo'></img>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                        className={({isActive}) => isActive ? "link-active body-m-bold" : "link body-m-bold"} 
                        to={routes.DASHBOARD}>
                            <FaBorderAll className='icon-24'/>  DASHBOARD
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        className={({isActive}) => isActive ? "link-active body-m-bold" : "link body-m-bold"} 
                        to={routes.MY_TASKS}>
                            <FaBars className='icon-24' />  MY TASK
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
      );
    }
}

export default Sidebar;