import React from "react";

import { POINTS } from "../../constants/TaskValues";
import Avatar from "../avatar/Avatar";


import Label from "../label/Label";
import MenuCard from "../menu/MenuCard";
import './TaskCard.css';

class TaskCard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            points: this.props.points,
            dueDate: this.props.dueDate,
            tags: this.props.tags,
            key: this.props.key,
            id: this.props.id
        }
    }

    render() {
        return (
            <div className="card">
                <div className="spaced">
                    <p className="body-l-bold">{this.state.title}</p>
                    <MenuCard id={this.state.id} 
                    onChange={(task) => this.props.onChange(task)} 
                    />
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