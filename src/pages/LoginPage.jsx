import { useState } from "react"
import { addUser } from '../lib/addUser'
import { validateUser } from '../lib/validateUser'

const styles = {
    maxWidth: 400,
    margin: '0 auto',
    padding: 15,
    height: '100vh',
    display: 'grid',
    placeItems: 'center'
}

const designColor = '#6e6ea4';

export default function LoginPage({ onLogin, setIsAdmin }) {
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setLoginInput('');
        setPasswordInput('');

        if (isRegister) {
            addUser(loginInput, passwordInput, setError);
        } else {
            validateUser(loginInput, passwordInput, onLogin, setIsAdmin, setError);
        }
    }

    return (
        <div style={styles}>
            <div style={{position: 'absolute', top: 0, width: '100%', textAlign: 'center', fontSize: 40, marginTop: 50, color: designColor}}>Blue Water</div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 50 }}>
                    <div onClick={() => setIsRegister(true)} style={{ cursor: 'pointer', textTransform: 'uppercase', paddingBottom: 2, borderBottom: isRegister && `2px solid ${designColor}`, color: isRegister && designColor }}>
                        Регистрация
                    </div>
                    <div onClick={() => setIsRegister(false)} style={{ cursor: 'pointer', textTransform: 'uppercase', paddingBottom: 2, borderBottom: !isRegister && `2px solid ${designColor}`, color: !isRegister && designColor }}>
                        Вход
                    </div>
                </div>

                <form onSubmit={handleSubmit} onClick={() => setError('')} style={{ display: 'flex', flexDirection: 'column', marginTop: 30 }}>
                    <input required value={loginInput} onChange={e => setLoginInput(e.target.value)} style={{ width: '100%', height: 30 }} type="text" />
                    <input required value={passwordInput} onChange={e => setPasswordInput(e.target.value)} style={{ width: '100%', height: 30, marginTop: 10 }} type="password" />

                    <button style={{ height: 40, marginTop: 30, background: designColor, color: '#fff', border: 'none', cursor: 'pointer', borderRadius: 3 }}>
                        {isRegister ? 'Зарегистрироваться' : 'Войти'}
                    </button>
                </form>

                <div style={{marginTop: 20, color: 'red', fontWeight: 500}}>
                    {error}
                </div>
            </div>
        </div>
    )
};