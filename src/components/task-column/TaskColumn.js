import React from "react";
import { STATUS } from "../../constants/TaskValues";
import EmptyMessage from "../empty-message/EmptyMessage";
import TaskCard from "../task-card/TaskCard";

import './TaskColumn.css';

class TaskColumn extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.tasks,
            name: this.props.name,
            key: this.props.key
        }
    }

    render() {
        return (
            <div className="column">
                <span className="body-l-bold column-title">{STATUS[this.state.name]} ({this.state.tasks.length})</span>
                {this.state.tasks.map(item => 
                    <TaskCard 
                        id={item.id}
                        key={item.id} 
                        title={item.name} 
                        points={item.pointEstimate} 
                        dueDate={item.dueDate} 
                        tags={item.tags} />
                )}
                {
                    (!this.state.tasks.length || this.state.tasks.length === 0) &&
                    <EmptyMessage /> 
                }
            </div>
        );
    }
}

export default TaskColumn;