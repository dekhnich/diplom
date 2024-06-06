export default function LoginPage({ onLogin }) {
    return (
        <div>
            Логин

            <button onClick={onLogin}>Войти</button>
        </div>
    )
};