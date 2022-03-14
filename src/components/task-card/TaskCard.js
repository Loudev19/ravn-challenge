import React from "react";

import { FaEllipsisH } from 'react-icons/fa';
import { POINTS } from "../../constants/TaskValues";
import Avatar from "../avatar/Avatar";


import Label from "../label/Label";
import './TaskCard.css';

class TaskCard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            points: this.props.points,
            dueDate: this.props.dueDate,
            tags: this.props.tags,
            key: this.props.key
        }
    }

    render() {
        return (
            <div className="card">
                <div className="spaced">
                    <p className="body-l-bold">{this.state.title}</p>
                    <button className="flat-icon-button">
                        <FaEllipsisH className="icon-24" />
                    </button>
                </div>
                <div className="spaced">
                    <p className="body-m-bold">{POINTS[this.state.points]} Points</p>
                    <Label canIcon={true} label={this.state.dueDate} key={1}/>
                </div>
                <div className="tags">
                    {this.state.tags.map((item, index) => 
                        <Label canIcon={false} label={item} key={item+index}/>
                    )}
                </div>
                <div className="spaced">
                    <Avatar size={'32'}/>
                </div>
            </div>
        );
    }
}

export default TaskCard;