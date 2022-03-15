import React, { useState } from "react";
import { POINTS, TAGS } from "../../constants/TaskValues";
import { CreateTask, GetUsers } from "../../services/TasksAPI";
import Loading from "../loading/Loading";

import './CreateForm.css'

function SelectUser(props) {
    const { loading, error, data } = GetUsers()
        if (loading) return <Loading />;
        if (error) return (<div>{error}</div>);
        if (data) return (
            <select
                className="body-m-regular"
                value={props.assigneeId} 
                onChange={props.onChange}>
                {data.users.map(item => 
                    <option key={item.id} value={item.id}>{item.fullName}</option>
                )}
            </select>
        );
}

function CreateForm(props) {
    const [formState, setFormState] = useState({
        assigneeId: '',
        dueDate: '', 
        name: '', 
        pointEstimate: '', 
        status: 'BACKLOG', 
        tags: []
    });

    const [createTask] = CreateTask({
        assigneeId: formState.assigneeId,
        dueDate: formState.dueDate, 
        name: formState.name, 
        pointEstimate: formState.pointEstimate, 
        status: formState.status, 
        tags: formState.tags
    })

    const showHideClassName = props.isOpen ? 
            "modal display-block" : 
            "modal display-none";

    return (
        <div className={showHideClassName}>
            <form className="modal-main" onSubmit={(event) => {
                event.preventDefault()
                createTask();
                props.handleClose()
            }}>
                <input className='body-xl-bold' 
                        type="text" 
                        value={formState.name} 
                        onChange={(event) => setFormState({
                            ...formState,
                            name: event.target.value
                        })} 
                        placeholder="Task title"/>
                <div className="modal-content">
                    <div className="selectors">
                        <select
                            className="body-m-regular"
                            value={formState.pointEstimate} 
                            onChange={(event) => setFormState({
                                ...formState,
                                pointEstimate: event.target.value
                            })}>
                            {Object.entries(POINTS).map(item => 
                                <option key={item[0]} value={item[0]}>{item[1]}</option>
                            )}
                        </select>
                        <SelectUser 
                            value={formState.assigneeId} 
                            onChange={(event) => setFormState({
                                ...formState,
                                assigneeId: event.target.value
                            })}/>
                        <select
                            className="body-m-regular"
                            multiple={true}
                            value={formState.tags} 
                            onChange={(event) => setFormState({
                                ...formState,
                                tags: Array.from(event.target.selectedOptions, option => option.value)
                            })}>
                            {TAGS.map(item => 
                                <option key={item} value={item}>{item}</option>
                            )}
                        </select>
                        <input className='body-m-regular icon-text-button' 
                            type="date"
                            value={formState.dueDate}
                            onChange={(event) => setFormState({
                                ...formState,
                                dueDate: event.target.value
                            })}>
                        </input>
                    </div>
                </div>
                <div className="action-box">
                    <button className="text-button" 
                        type="button" 
                        onClick={() => props.handleClose()}>
                        Cancel
                    </button>
                    <button className="colored-text-button" 
                        type="submit" >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateForm