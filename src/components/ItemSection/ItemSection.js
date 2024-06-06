import ItemImages from '../ItemImages/ItemImages';
import './ItemSection.css';
import Button from '../Button/Button';
import FullscreenImage from '../FullscreenImage/FullscreenImage'
import { useRef, useEffect, useState } from 'react';
import { useProducts } from '../../store/useProducts';

export default function ItemSection({ item }) {
    const scrollToThis = useRef()

    const [isFullscreenImg, setIsFullscreenImg] = useState(false)
    const addItemBusket = useProducts((state => state.addItemBusket))
    const addTotalSum = useProducts((state) => state.addTotalSum)
    const busket = useProducts((state) => state.busket)
    const [currentImage, setCurrentImage] = useState(0)

    let disabled = Boolean(busket.find((element) => element.article === item.article))

    const onClick = () => {
        if (!disabled) {
            addItemBusket({ ...item, count: 1 })
            addTotalSum(item.cost)
        }
    }

    useEffect(() => {
        if (scrollToThis) {
            const distanceFromTop = scrollToThis.current.offsetTop

            window.scrollTo({
                top: distanceFromTop,
                behavior: 'smooth',
            })
        }
    }, [])

    return (
        <section ref={scrollToThis} className="item">
            <h1 id='katalog-title'>Каталог</h1>
            <ItemImages
                setIsFullscreenImg={setIsFullscreenImg}
                setCurrentImage={setCurrentImage}
                imgOne={item?.images?.length ? item.images[0] : ''}
                imgSecond={item?.images?.length ? item.images[1] : ''}
                imgThird={item?.images?.length ? item.images[2] : ''}
                imgFourth={item?.images?.length ? item.images[3] : ''}
            />
            {isFullscreenImg && <FullscreenImage currentImage={currentImage}
                setCurrentImage={setCurrentImage} setIsFullscreenImg={setIsFullscreenImg} img={item.images} ></FullscreenImage>}
            <div className="item-info">
                <div>{item.cost} BYN</div>

                <h1>{item.type}</h1>
                <h2>{item.title}</h2>
                <div className="main-info_item">
                    <p>{item.brend}</p>
                    <p>{item.description}</p>
                    <p>Артикуль : {item.article}</p>
                </div>
                <Button
                    disabled={disabled}
                    onClick={onClick}
                    color={'#2C3035'}
                    backgroundColor={disabled ? '#abaeb3' : '#AFBCD1'}
                    value={<><p>В корзину</p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                        <circle cx="7.99207" cy="12.4562" r="1.1327" fill="#2C3035" />
                        <circle cx="13.2753" cy="12.4562" r="1.1327" fill="#2C3035" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.43608 0H1.19768C0.728376 0.399774 1.15205 1.19695 1.29204 1.22669C1.32107 1.23286 1.34595 1.23959 1.3687 1.24574C1.45566 1.26926 1.51124 1.28429 1.64645 1.22669L1.94989 0.997933C2.55104 0.54474 3.41847 0.893245 3.53898 1.63637L4.83591 9.63412C4.91443 10.1183 5.33252 10.4741 5.82302 10.4741H15.4655C15.9467 10.4741 16.3597 10.1313 16.4484 9.65834L17.9939 1.41541H9.40708H4.50031L4.4273 0.867836C4.36106 0.37103 3.93728 0 3.43608 0ZM16.4862 2.64185H4.59675L5.67816 8.79757C5.76217 9.27578 6.17755 9.62455 6.66308 9.62455H14.6687C15.1692 9.62455 15.5926 9.25449 15.6596 8.75847L16.4862 2.64185Z" fill="#2C3035" />
                    </svg></>} />
            </div>
        </section>
    )
}