import { useRef, useEffect, useState } from 'react'
import Button from '../Button/Button';
import './ContactsSection.css';
import { url } from '../../constants.js'

export default function ContactsSection() {
    const scrollToThis = useRef()

    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const isDisabled = !Boolean(name && telephone && email && message)

    useEffect(() => {
        if (scrollToThis) {
            const distanceFromTop = scrollToThis.current.offsetTop

            window.scrollTo({
                top: distanceFromTop,
                behavior: 'smooth',
            })
        }
    }, [])

    const onClick = () => {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({                
            name,
            telephone,
            email,
            message,
            user: JSON.parse(localStorage.getItem('login')),
        });
        localStorage.setItem('messages', JSON.stringify(messages) );
    }

    return (
        <section ref={scrollToThis} className="contacts">
            <div className="contacts-form">
                <div className="contacts-form_left">
                    <div className="card">
                        <h1>Контакты</h1>
                        <p>+375 (29) 623 50 05</p>
                        <p>+375 (29) 886 50 05</p>
                        <p>
                            <b>1.</b> <a target='_blank' href="https://yandex.by/maps/157/minsk/house/Zk4Ycw9gTEAFQFtpfXR5eXVjZw==/?indoorLevel=1&ll=27.580552%2C53.888903&z=17.12">г. Минск, ул. Ленина 27 - 47. 2 этаж.</a> <br />
                            <b>2.</b> <a target='_blank' href="https://yandex.by/maps/157/minsk/house/Zk4YcA5iTEYBQFtpfXV0dX1qZg==/?ll=27.692536%2C53.954192&z=17.12">г. Минск, ул. Уручская, 19, П 112 А.</a>
                        </p>
                    </div>
                </div>
                <div className="contacts-form_right">
                    <h1>Сообщение</h1>
                    <form className="contacts-submit_form">
                        <input style={{padding: 10}} onChange={(e) => { setName(e.target.value) }} placeholder='Имя и фамилия' type="text" name="name" id="name-surname" />
                        <input style={{padding: 10}} onChange={(e) => { setTelephone(e.target.value) }} placeholder='Телефон' type="number" name="telephone" id="phone" />
                        <input style={{padding: 10}} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' type="email" name="email" id="email" />
                        <textarea onChange={(e) => { setMessage(e.target.value) }} style={{ marginBottom: '16px', padding: 10 }} placeholder='Сообщение' name="message" id="comment" cols="30" rows="4"></textarea>
                    </form>
                    <Button
                        disabled={isDisabled}
                        onClick={onClick}
                        value={'Отправить'}
                        color={'#2C3035'}
                        backgroundColor={isDisabled ? '#abaeb3' : '#AFBCD1'}
                    />
                </div>
            </div>
            <div className="contacts-map">
                <div style={{ width: '100%', height: '100%', filter: 'grayscale(1)', position: 'relative', overflow: 'hidden' }}>
                    <a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Минск</a>
                    <a href="https://yandex.by/maps/157/minsk/house/Zk4Ycw9gTEAFQFtpfXR5eXVjZw==/?indoorLevel=1&ll=27.580552%2C53.888903&utm_medium=mapframe&utm_source=maps&z=17"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Новослободская улица 23 — Яндекс Карты</a>
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe src="https://yandex.by/map-widget/v1/?indoorLevel=1&ll=27.580552%2C53.888903&mode=whatshere&whatshere%5Bpoint%5D=27.580552%2C53.888903&whatshere%5Bzoom%5D=17&z=17" width="100%" height="100%" frameborder="1" allowfullscreen="true" style={{ position: 'relative' }}></iframe></div>
            </div>
        </section >
    )
}