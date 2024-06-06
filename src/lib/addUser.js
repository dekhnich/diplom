export function addUser(login, password, setError) {
    const users = JSON.parse( localStorage.getItem('users') ) || {};

    if (!(login in users)) {
        users[login] = password;
        localStorage.setItem('users', JSON.stringify(users));
        console.log('adding user', {login, password})
    } else {
        setError('Такой пользователь уже существует')
    }

}