export default function index() {
    const data = JSON.parse(localStorage.getItem('boughts'));

    return (
        <div>
            Админка

            {data.map(item => (
                <div key={item.user}>
                    <div>Логин: {item.user}</div>
                    <div>Телефон: {item.telephone}</div>
                    <div>Email: {item.email}</div>
                    <div>Сумма заказа: {item.cost}</div>
                    <div>??Apartments: {item.apartments}</div>
                    <div>??entrance: {item.entrance}</div>
                    <div>??house: {item.house}</div>
                    <div>Комментарий: {item.message}</div>
                    <div>??isAnyName: {item.isAnyName}</div>
                    <div>??isLifting: {item.isLifting}</div>
                    <div>items: {JSON.stringify(item.items)}</div>
                    <div>Лицо: {item.radio}</div>
                    <div>??radioDelivery: {item.radioDelivery}</div>
                </div>
            ))}
        </div>
    )
};