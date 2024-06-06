import PanelItem from '../PanelItem';
import PanelItemInfo from '../PanelItemInfo';
import PanelItems from '../PanelItems';
import { useRef } from 'react';

export default function index() {
    const data = JSON.parse(localStorage.getItem('boughts'));

    return (
        <div style={{ margin: '0 auto', maxWidth: 900, padding: 15 }}>
            <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Панель администратора</h1>

            <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap', justifyContent: 'center' }}>
                {data.map(item => (
                    <Item key={item.user} item={item} />
                ))}
            </div>
        </div>
    )
};

function Item({ item }) {
    const elem = useRef(null);

    function onRemove(e) {
        elem.current.remove();
    }

    return (
        <div ref={elem} style={{ position: 'relative', width: 320, border: '1px solid black', padding: '10px 10px 30px 10px' }}>
            <PanelItemInfo info={`Заказ пользователя ${item.user}`} />
            <div>
                <PanelItem name="Телефон" value={item.telephone} />
                <PanelItem name="Email" value={item.email} />
                <PanelItem name="Дом" value={item.house} />
                <PanelItem name="Подъезд" value={item.entrance} />
                <PanelItem name="Комментарий" value={item.message} />
                <PanelItem name="Лицо" value={item.radio} />
                <PanelItem name="Способ получения" value={item.radioDelivery} />
                <PanelItem name="Сумма заказа" value={item.cost + " руб."} />
            </div>
            <PanelItemInfo info='Товары:' />
            <PanelItems items={item.items} />
            <button onClick={onRemove} style={{ position: 'absolute', bottom: 0, right: 0, border: 'none', padding: 5, cursor: 'pointer', background: '#333', color: "#fff" }}>Скрыть</button>

            {/* <div>??Apartments: {item.apartments}</div>
    <div>??isAnyName: {item.isAnyName}</div>
    <div>??isLifting: {item.isLifting}</div> */}
        </div>
    )
}