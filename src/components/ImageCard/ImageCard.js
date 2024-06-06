import { useProducts } from '../../store/useProducts';
import './ImageCard.css';
import { Link } from 'react-router-dom';

export default function ImageCard({ category, text, position, img, width, height, col, row }) {
    const setReplaceCategory = useProducts((state) => state.setReplaceCategory)
    const onClick = () => {
        setReplaceCategory(category)
    }
    return (
        <div className="image-card" style={{
            textAlign: position,
            width: width,
            height: height,
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            gridRow: row,
            gridColumn: col,
        }}>
            <Link onClick={onClick} to={'/katalog'}>
                <p style={{ alignSelf: position }} >{text}</p>
            </Link>
        </div>
    )
}