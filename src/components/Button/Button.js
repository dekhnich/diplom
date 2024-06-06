import './Button.css';

export default function Button({ value, color, backgroundColor, onClick, disabled }) {
    return (
        <button disabled={disabled} className='custom-button' onClick={onClick} style={{ backgroundColor: backgroundColor, color: color }}>{value}</button>
    )
}