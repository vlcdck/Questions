// Стоврити функцію, яка робить запити на апі на віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
// SomeType – ваш тим відповіді
// url – ваш ендпоінт з якого чекаємо відповідь

type User = {
    id: number;
    name: string;
    username: string;
}

async function foobar<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

foobar<User>('https://jsonplaceholder.typicode.com/users')
    .then(user => console.log(user))
    .catch(error => console.error(error));
