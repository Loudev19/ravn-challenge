import React from "react"

import { FaPlus } from 'react-icons/fa';

import SwitchViews from "../../components/switch-views/SwitchViews";
import TaskColumn from "../../components/task-column/TaskColumn";
import './Dashboard.css';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: props.columns
    }
  }

  render() {
    return (
      <div className="dashboard">
        <div className="task-bar">
          <SwitchViews />
          <button className="colored-icon-button">
            <FaPlus />
          </button>
        </div>
        <div className="columns">
            {Object.entries(this.state.columns).map((item, index) => 
            <TaskColumn key={`${item[0]}${index}`} name={item[0]} tasks={item[1]}/>)}
          </div>
      </div>
    );
  }
}

export default Dashboard;
