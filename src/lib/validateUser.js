export function validateUser(login, password, onLogin, setIsAdmin, setError) {
    if (login.toLowerCase() === 'admin' && password.toLowerCase() === 'admin') {
        onLogin(login);
        setIsAdmin(true);
        localStorage.setItem('admin', 'true');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[login] === password) {
        onLogin(login);
    } else if (login in users) {
        setError('Неверный пароль');
    } else {
        setError('Такого пользователя не существует');
    }
    console.log('validating user with', { login, password })
}