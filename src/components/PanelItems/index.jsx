export default function PanelItems({ items }) {
    return (
        <div style={{display: 'flex', gap: 20, overflow: 'auto', paddingBottom: 10, flex: '1 0 auto'}}>
            {items.map((item) => 
                <div key={item._id} style={{flex: '1 0 90%', padding: 10, boxSizing: 'border-box', border: '1px solid #aaa', borderRadius: 15, }}>
                    <img style={{objectFit: 'contain', objectPosition: 'center'}} width="200" height="200" src={item.images[0]} alt="item image" />
                    <ItemInfo name="Наименование" value={item.title} />
                    <ItemInfo name="Тип" value={item.type} />
                    <ItemInfo name="Бренд" value={item.brend} />
                    <ItemInfo name="Категория" value={item.category} />
                    <ItemInfo name="Подкатегория" value={item.subcategory} />
                    <ItemInfo name="Описание" value={item.description} />
                    <ItemInfo name="Артикул" value={item.article} />
                    <ItemInfo name="Цена" value={item.cost + " руб."} />
                    <ItemInfo name="Количество" value={item.count} />
                </div>
            )}
        </div>
    )
};

function ItemInfo({name, value}) {
    return (
        <div style={{marginBottom: 5, fontSize: 15}}>
            <span style={{fontWeight: 700, marginRight: 10, fontSize: 'inherit'}}>{name}:</span>
            <span style={{fontSize: 'inherit'}}>{value}</span>
        </div>
    )
}