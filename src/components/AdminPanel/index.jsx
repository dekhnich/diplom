import PanelItem from '../PanelItem';
import PanelItemInfo from '../PanelItemInfo';
import PanelItems from '../PanelItems';
import { useRef, useState } from 'react';

export default function index() {
    const data = JSON.parse(localStorage.getItem('boughts'));
    const [dataCount, setDataCount] = useState(data.length);
    
    const messages = JSON.parse(localStorage.getItem('messages'));
    const [messageCount, setMessageCount] = useState(messages.length);

    return (
        <div style={{background: '#f9f9f9', width: '100%'}}>
            <div style={{ margin: '0 auto', maxWidth: 1100, padding: 15 }}>
                <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Панель администратора</h1>

                <h2 style={{textAlign: 'center', marginBottom: 20}}>Заказы</h2>
                <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap', justifyContent: 'center' }}>
                    {data.map(item => (
                        <Item key={item.user} item={item} onDelete={() => setDataCount(count => count - 1)} />
                    ))}
                </div>
                {!dataCount && <div style={{textAlign: 'center'}}>Заказов нет</div>}
                <h2 style={{textAlign: 'center', margin: 20}}>Отзывы</h2>
                <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap', justifyContent: 'center' }}>
                    {messages.map(item => (
                        <ItemMessage key={item.user} item={item} onDelete={() => setMessageCount(count => count - 1)} />
                    ))}
                </div>
                {!messageCount && <div style={{textAlign: 'center'}}>Отзывов нет</div>}
            </div>
        </div>
    )
};

const buttonStyles = {
    padding: '10px 25px',
    borderRadius: '5px',
    background: '#afbcd1',
    color: '#000',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 700,
    marginTop: '20px',
};

function Item({ item, onDelete }) {
    const elem = useRef(null);

    function onRemove(e) {
        elem.current.remove();
        onDelete();
    }

    return (
        <div ref={elem} style={{ display: 'flex', flexDirection: 'column', width: 320, background: '#fff', border: '1px solid #aaa', borderRadius: 15, padding: '20px 20px 30px 20px' }}>
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
            <button onClick={onRemove} style={buttonStyles}>Скрыть</button>
        </div>
    )
}

function ItemMessage({ item, onDelete }) {
    const elem = useRef(null);

    function onRemove(e) {
        elem.current.remove();
        onDelete();
    }

    return (
        <div ref={elem} style={{ display: 'flex', flexDirection: 'column', width: 320, background: '#fff', border: '1px solid #aaa', borderRadius: 15, padding: '20px 20px 30px 20px' }}>
            <PanelItemInfo info={`Отзыв пользователя ${item.user}`} />
            <div>
                <PanelItem name="Имя" value={item.name} />
                <PanelItem name="Телефон" value={item.telephone} />
                <PanelItem name="Email" value={item.email} />
                <PanelItem name="Сообщение" value={item.message} />
            </div>
            <button onClick={onRemove} style={buttonStyles}>Скрыть</button>
        </div>
    )
}

