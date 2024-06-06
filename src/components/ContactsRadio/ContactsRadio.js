import './ContactsRadio.css';

export default function ContactsRadio({ direction, name, title, first, second, firstId, secondId, change }) {
    return (
        <div className="contacts-radio">
            <h1>{title}</h1>
            <div style={{ flexDirection: direction ? 'column' : '' }} className="radio-list">
                <div>
                    <label htmlFor={firstId} className="radio-label">
                        <input
                            className="radio-input"
                            type="radio"
                            name={name}
                            id={firstId}
                            onChange={() => change(first)}
                        />
                        <span className="custom-radio" />
                        {first}
                    </label>
                </div>
                <div>
                    <label htmlFor={secondId} className="radio-label">
                        <input
                            className="radio-input"
                            type="radio"
                            name={name}
                            id={secondId}
                            onChange={() => change(second)}
                        />
                        <span className="custom-radio" />
                        {second}
                    </label>
                </div>
            </div>
        </div>
    )
}