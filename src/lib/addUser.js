import bcrypt from 'bcryptjs';

export function addUser(login, password, setError) {
    const users = JSON.parse( localStorage.getItem('users') ) || {};

    if (!(login in users)) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        users[login] = hashedPassword;
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        setError('Такой пользователь уже существует')
    }
}