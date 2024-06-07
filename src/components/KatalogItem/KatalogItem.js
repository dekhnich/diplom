import './KatalogItem.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useProducts } from '../../store/useProducts';

export default function KatalogItem({ item }) {
    const addItemBusket = useProducts((state) => state.addItemBusket)
    const addTotalSum = useProducts((state) => state.addTotalSum)
    const busket = useProducts((state) => state.busket)

    let disabled = Boolean(busket.find((element) => element.article === item.article))

    const onClick = () => {
        if (!disabled) {
            addItemBusket({ ...item, count: 1 })
            addTotalSum(item.cost)
        }
    }

    return (
        <div className="katalog-item">
            <Link to={`/item/${item.article}`}>
                <div
                    style={{
                        background: `url(${item.images[0]}) center`,
                        backgroundPosition: 'center',
                        borderRadius: 15
                    }}
                    className="image-box">
                    <div className="image-box_back" style={{background: 'transparent', border: '2px solid #ccc', borderRadius: 15}}></div>
                </div>
                <h3>{item.title}</h3>
            </Link>
            <div className="katalog-item_price">
                <p>{item.cost} руб</p>
                <Button
                    disabled={disabled}
                    onClick={onClick}
                    value=
                    {<>
                        <p>В корзину</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                            <circle cx="7.99256" cy="12.4562" r="1.1327" fill="#2C3035" />
                            <circle cx="13.2748" cy="12.4562" r="1.1327" fill="#2C3035" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.43608 0H1.19768C0.728376 0.399774 1.15205 1.19695 1.29204 1.22669C1.32107 1.23286 1.34595 1.23959 1.3687 1.24574C1.45566 1.26926 1.51124 1.28429 1.64645 1.22669L1.94989 0.997933C2.55104 0.54474 3.41847 0.893245 3.53898 1.63637L4.83591 9.63412C4.91443 10.1183 5.33252 10.4741 5.82302 10.4741H15.4655C15.9467 10.4741 16.3597 10.1313 16.4484 9.65834L17.9939 1.41541H9.40708H4.50031L4.4273 0.867836C4.36106 0.37103 3.93728 0 3.43608 0ZM16.486 2.64187H4.59648L5.6779 8.7976C5.76191 9.27581 6.17728 9.62457 6.66281 9.62457H14.6684C15.1689 9.62457 15.5924 9.25451 15.6594 8.75849L16.486 2.64187Z" fill="#2C3035" />
                        </svg>
                    </>} backgroundColor={disabled ? '#abaeb3' : '#AFBCD1'} color={'#2C3035'} />
            </div>
        </div>
    )
}