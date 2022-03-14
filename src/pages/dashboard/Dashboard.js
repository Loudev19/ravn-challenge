import React from "react"

import { FaPlus } from 'react-icons/fa';

import SwitchViews from "../../components/switch-views/SwitchViews";
import TaskColumn from "../../components/task-column/TaskColumn";
import './Dashboard.css';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        <TaskColumn key={'column1'} name={'Done'}/>, 
        <TaskColumn key={'column2'} name={'To Do'}/>, 
        <TaskColumn key={'column3'} name={'Doing'}/>
      ]
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
        <div className="overflow">
          <div className="columns">
            {this.state.columns}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
