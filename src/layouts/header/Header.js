import React from 'react';

import { FaSearch, FaBell, FaTrash } from 'react-icons/fa';

import Avatar from '../../components/avatar/Avatar';

import './Header.css';

class Header extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
    }

    handleChange(event) {
      this.setState({
        value: event.target.value
      })
    }

    handleDelete() {
      this.setState({
        value: ''
      })
    }

    render() {
      return (
        <div className="search-bar">
            <div className='search-box'>
                <FaSearch className='icon-24'/>
                <input className='body-m-regular' type="text" value={this.state.value} onChange={(event) => this.handleChange(event)} placeholder="Search"/>
                {this.state.value &&
                  <button className='flat-icon-button' onClick={() => this.handleDelete()}><FaTrash /></button>
                }
            </div>
            <div className='search-box'>
              <FaBell className='icon-24'/>
              <Avatar />
            </div>
        </div>
      );
    }
}

export default Header;