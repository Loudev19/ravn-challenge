import React from "react"

import { FaPlus } from 'react-icons/fa';
import CreateForm from "../../components/create-form/CreateForm";

import SwitchViews from "../../components/switch-views/SwitchViews";
import TaskColumn from "../../components/task-column/TaskColumn";
import './Dashboard.css';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: props.columns,
      isOpen: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  };

  handleHideModal(task) {
    if (task) {
      const tempColumns = this.state.columns
      tempColumns[task.status].push({...task, id: new Date().getMilliseconds()})
      this.setState({
        columns: tempColumns,
        isOpen: false
      })
    }
    else this.setState({ isOpen: false });
  };

  render() {
    return (
      <div className="dashboard">
        <div className="task-bar">
          <SwitchViews />
          <button className="colored-icon-button" onClick={this.handleOpenModal}>
            <FaPlus />
          </button>
          <CreateForm 
            isOpen={this.state.isOpen} 
            handleClose={(task) => this.handleHideModal(task)}>
          </CreateForm>
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
