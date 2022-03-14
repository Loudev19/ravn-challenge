import React from "react";
import { POINTS } from "../../constants/TaskValues";

import './CreateForm.css'

class CreateForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            assigneeId: '',
            dueDate: new Date(), 
            name: 'Title', 
            pointStimate: 'ZERO', 
            status: 'BACKLOG', 
            tags: ['ANDROID']
        }
    }

    handleChange(event, prop) {
        this.setState({
            [prop]: event.target.value
        })
    }

    render() {
        const showHideClassName = this.props.isOpen ? 
            "modal display-block" : 
            "modal display-none";
        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <div className="modal-content">
                        <input className='body-xl-bold' 
                            type="text" 
                            value={this.state.name} 
                            onChange={(event) => this.handleChange(event, 'name')} 
                            placeholder="Task title"/>
                        <div className="selectors">
                            <select
                                value={this.state.pointStimate} 
                                onChange={(event) => this.handleChange(event, 'pointStimate')}>
                                {Object.entries(POINTS).map(item => 
                                    <option key={item[0]} value={item[0]}>{item[1]}</option>
                                )}
                            </select>
                            
                        </div>
                    </div>
                    <div className="action-box">
                        <button className="text-button" 
                            type="button" 
                            onClick={() => this.props.handleClose(this.state.create)}>
                            Cancel
                        </button>
                        <button className="colored-text-button" 
                            type="button" 
                            onClick={() => this.props.handleCreate(this.state.create)}>
                            Create
                        </button>
                    </div>
                </section>
            </div>
        );
    }
}

export default CreateForm