import React from "react";
import TaskCard from "../task-card/TaskCard";

import './TaskColumn.css';

class TaskColumn extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tasks: [<TaskCard key={new Date().getMilliseconds} title={'Prueba'} points={3} dueDate={'04-12-2021'} tags={['Android']} />],
            name: this.props.name,
            key: this.props.key
        }
    }

    render() {
        return (
            <div className="column">
                <span className="body-l-bold column-title">{this.state.name} ({this.state.tasks.length})</span>
                {this.state.tasks}
            </div>
        );
    }
}

export default TaskColumn;