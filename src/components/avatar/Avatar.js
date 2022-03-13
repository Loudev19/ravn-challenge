import './Avatar.css';

function Avatar(props) {
    return (
        <div className={`avatar-${props.size}`}></div>
    );
}

export default Avatar;
