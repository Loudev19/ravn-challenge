import React, { useState } from "react";

import { FaEllipsisH } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './MenuCard.css';
import { DeleteTask } from "../../services/TasksAPI";
import DeleteConfirmation from "../delete-confirmation/DeleteConfirmation";

export default function MenuCard(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [deleteForm, setDeleteForm] = useState({
        isOpenConfirmationDelete: false
    })

    const [deleteTask] = DeleteTask({
        id: props.id
    })

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenConfirmation = () => {
        setDeleteForm({
            isOpenConfirmationDelete: true
        });
    }

    const handleCloseConfirmation = () => {
        setDeleteForm({
            isOpenConfirmationDelete: false
        });
        setAnchorEl(null);
    }

    const handleDelete = () => {
        deleteTask()
        setDeleteForm({
            isOpenConfirmationDelete: false
        });
        setAnchorEl(null);
    }

    return (
        <div>
            <button className="flat-icon-button" onClick={handleClick}>
                <FaEllipsisH className="icon-24" />
            </button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem className="body-m-regular" onClick={handleClose}>Edit</MenuItem>
                <MenuItem className="body-m-regular" onClick={handleOpenConfirmation}>Delete</MenuItem>
            </Menu>
            <DeleteConfirmation isOpen={deleteForm.isOpenConfirmationDelete} 
                onClose={handleCloseConfirmation} 
                onDelete={handleDelete}/>
        </div>
    );
}