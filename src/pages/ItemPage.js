import { useParams } from 'react-router-dom';
import ItemSection from '../components/ItemSection/ItemSection';
import { useEffect } from 'react';
import { useProducts } from '../store/useProducts';

export default function ItemPage({ setButton, setSubtitle, setTitle }) {
    const { id } = useParams()
    const getProductById = useProducts((state) => state.getProductById)
    const product = useProducts((state) => state.product)
    useEffect(() => {
        setButton(false)
        setSubtitle('')
        setTitle('Каталог')
        getProductById(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="page">
            <ItemSection item={product} />
        </div>
    )
}