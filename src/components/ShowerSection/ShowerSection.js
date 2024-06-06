import './ShowerSection.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom'
import { useProducts } from '../../store/useProducts';

export default function ShowerSection() {
    const setReplaceCategory = useProducts((state) => state.setReplaceCategory)
    const onClick = () => {
        setReplaceCategory('Душевые кабины и ограждения')
    }
    return (
        <section className="shower">
            <h1>Душевые кабины</h1>
            <div className="shower-content">
                <div>
                    <p>Душевые кабины и ограждения со скидками, душевное
                        начало дня</p>
                    <Link to={'/katalog'}><Button onClick={onClick} value={'Смотреть'} color={'#2C3035'} backgroundColor={'#AFBCD1'} /></Link>
                </div>
                <div className="shower-img"></div>
            </div>
        </section>
    )
}