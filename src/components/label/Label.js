import { FaClock } from "react-icons/fa";

import './Label.css';

function getColorFromDate(date) {
    if (date === 'TOMORROW' || date === 'TODAY') return 'yellow'
    if (date === 'YESTERDAY') return 'red'

    const left = Math.floor((new Date() - new Date(date)) / (1000*60*60*24))
    if (left < -2) return 'white';
    if (left >= -2 && left <= 0) return 'yellow';
    else return 'red';
}

export default function Label(props) {
    const color = props.canIcon ? getColorFromDate(props.label) : 'green'
    return (
        <div className={`label bg-${color} c-${color} body-m-bold`}>
            { props.canIcon && <FaClock className="icon-24"/>} <span>{props.label}</span>
        </div>
    );
}