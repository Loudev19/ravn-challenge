import React from "react"

import { FaPlus } from 'react-icons/fa';

import SwitchViews from "../../components/switch-views/SwitchViews";
import './MyTask.css';

class MyTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
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
        </div>
      </div>
    );
  }
}

export default MyTask;
