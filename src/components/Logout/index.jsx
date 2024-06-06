import classes from './Logout.module.css';

export default function Logout({ onClick }) {
    return (
        <div className={classes.button} onClick={onClick}>
            Выйти
        </div>
    )
};