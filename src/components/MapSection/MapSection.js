import { useState } from 'react';
import Button from '../Button/Button';
import './MapSection.css';

export default function MapSection() {
    const [firstMap, setFirstMap] = useState(true)
    const [secondMap, setSecondMap] = useState(false)
    const [thirdMap, setThirdMap] = useState(false)

    return (
        <section className="map">
            <h1>Наши магазины</h1>
            <div className="map-content">
                {firstMap &&
                    <div className="map-div">
                        <div style={{ width: '100%', height: '100%', filter: 'grayscale(1)', position: 'relative', overflow: 'hidden' }}>
                            <a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Минск</a>
                            <a href="https://yandex.by/maps/157/minsk/house/Zk4Ycw9gTEAFQFtpfXR5eXVjZw==/?indoorLevel=1&ll=27.580552%2C53.888903&utm_medium=mapframe&utm_source=maps&z=17"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Новослободская улица 23 — Яндекс Карты</a>
                            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                            <iframe src="https://yandex.by/map-widget/v1/?indoorLevel=1&ll=27.580552%2C53.888903&mode=whatshere&whatshere%5Bpoint%5D=27.580552%2C53.888903&whatshere%5Bzoom%5D=17&z=17" width="100%" height="100%" frameborder="1" allowfullscreen="true" style={{ position: 'relative' }}></iframe></div>
                    </div>
                }
                {secondMap &&
                    <div className="map-div">
                        <div style={{ width: '100%', height: '100%', filter: 'grayscale(1)', position: 'relative', overflow: 'hidden' }}>
                            <a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Минск</a>
                            <a href="https://yandex.by/maps/157/minsk/house/Zk4Ycw9gTEAFQFtpfXR5eXVjZw==/?indoorLevel=1&ll=27.580552%2C53.888903&utm_medium=mapframe&utm_source=maps&z=17"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Новослободская улица 23 — Яндекс Карты</a>
                            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                            <iframe src="https://yandex.by/map-widget/v1/?indoorLevel=1&ll=27.580552%2C53.888903&mode=whatshere&whatshere%5Bpoint%5D=27.580552%2C53.888903&whatshere%5Bzoom%5D=17&z=17" width="100%" height="100%" frameborder="1" allowfullscreen="true" style={{ position: 'relative' }}></iframe></div>
                    </div>
                }
                {thirdMap &&
                    <div className="map-div">
                        <div style={{ width: '100%', height: '100%', filter: 'grayscale(1)', position: 'relative', overflow: 'hidden' }}>
                            <a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Минск</a>
                            <a href="https://yandex.by/maps/157/minsk/house/Zk4YcA5iTEYBQFtpfXV0dX1qZg==/?ll=27.692536%2C53.954192&utm_medium=mapframe&utm_source=maps&z=17"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Новослободская улица 23 — Яндекс Карты</a>
                            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                            <iframe src="https://yandex.by/map-widget/v1/?ll=27.692536%2C53.954192&mode=whatshere&whatshere%5Bpoint%5D=27.692536%2C53.954192&whatshere%5Bzoom%5D=17&z=17" width="100%" height="100%" frameborder="1" allowfullscreen="true" style={{ position: 'relative' }}></iframe></div>
                    </div>
                }
                <div className="contacts-div">
                    <div className="contacts-card">
                        <h2>Минск</h2>
                        <p>+375 (29) 623 50 05</p>
                        <p>Доставка до 7 дней</p>
                        <p>г. Минск, ул. Ленина 27 - 47. </p>
                        <Button onClick={() => {
                            setFirstMap(false)
                            setSecondMap(true)
                            setThirdMap(false)
                        }} value={'О пункте'} color={'#2C3035'} backgroundColor={'#AFBCD1'} />
                    </div>
                    <div className="contacts-card">
                        <h2>Минск</h2>
                        <p>+375 (29) 886 50 05</p>
                        <p>Доставка до 7 дней</p>
                        <p>г. Минск, ул. Уручская, 19, П 112 А.</p>
                        <Button onClick={() => {
                            setFirstMap(false)
                            setSecondMap(false)
                            setThirdMap(true)
                        }} value={'О пункте'} color={'#2C3035'} backgroundColor={'#AFBCD1'} />
                    </div>
                </div>
            </div>
        </section>
    )
}