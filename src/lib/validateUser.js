import bcrypt from 'bcryptjs';

export function validateUser(login, password, onLogin, setIsAdmin, setError) {
    if (login.toLowerCase() === 'admin' && password.toLowerCase() === 'admin') {
        onLogin(login);
        setIsAdmin(true);
        localStorage.setItem('admin', 'true');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {};

    bcrypt.compare(password, users[login], function(err, result) {
        if (result) {
            onLogin(login);
        } else if (login in users) {
            setError('Неверный пароль');
        } else {
            setError('Такого пользователя не существует');
        }
    })
}