import ContactsRadio from '../ContactsRadio/ContactsRadio';
import Button from '../Button/Button';
import './ContactSection.css';
import { useEffect, useState } from 'react';
import { url } from '../../constants';
import { useProducts } from '../../store/useProducts';

export default function ContactSection({ totalSum }) {
    const clearBusket = useProducts((state) => state.clearBusket)

    const [paymentDisable, setPaymentDisable] = useState(true)
    const [paymentComplete, setPaymentComplete] = useState(false)

    const busket = useProducts((state) => state.busket);

    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState()
    const [email, setEmail] = useState()
    const [adress, setAdress] = useState()
    const [house, setHouse] = useState()
    const [apartaments, setApartaments] = useState()
    const [entrance, setEntrance] = useState()
    const [comment, setComment] = useState()
    const [Radio1, setRadio1] = useState()
    const [Radio2, setRadio2] = useState()
    const [Radio3, setRadio3] = useState()
    const [checkbox2, setCheckbox2] = useState(false)
    const [checkbox1, setCheckbox1] = useState(false)


    const handleButtonChange = () => {
        const data = {
            items: busket,
            cost: totalSum,
            radio: Radio1,
            telephone,
            name,
            email,
            radioDelivery: Radio2,
            adress,
            house,
            apartaments,
            entrance,
            message: comment,
            isLifting: checkbox1,
            isAnyName: checkbox2
        }
        fetch(url + '/sendOrder', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => console.log(data))
    }

    const onClick = () => {
        if (busket.length && name && telephone && email && adress && house && apartaments && entrance && Radio1 && Radio2) {
            handleButtonChange()
            localStorage.setItem('plumbing-basket', JSON.stringify([]))

            
            localStorage.setItem('bought', JSON.stringify({
                items: busket,
                cost: totalSum,
                radio: Radio1,
                telephone,
                name,
                email,
                radioDelivery: Radio2,
                adress,
                house,
                apartaments,
                entrance,
                message: comment,
                isLifting: checkbox1,
                isAnyName: checkbox2
            }))

            clearBusket()
            setPaymentComplete(true)
            setTimeout(() => {
                setPaymentComplete(false)
            }, 2000)
        }
    }

    useEffect(() => {
        if (busket.length && name && telephone && email && adress && house && apartaments && entrance && Radio1 && Radio2) {
            setPaymentDisable(false)
        } else {
            setPaymentDisable(true)
        }
    }, [name, telephone, email, adress, house, apartaments, entrance, Radio1, Radio2, busket])

    return (
        <>
            <section className="contact-list">
                <div className="contacts-info">
                    <ContactsRadio change={setRadio1} name={'contactradio'} firstId={'contactfirst'} secondId={'contactsecond'} title={'Контактные данные'} first={'Физическое лицо'} second={'Юридическое лицо'} />
                    <form className='contacts-info_form' action="">
                        <input placeholder='Имя и фамилия' type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input placeholder='Телефон' type="number" name="number" id="number" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                        <input placeholder='Email' type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </form>
                </div>
                <div className="dilivary-conditions">
                    <ContactsRadio change={setRadio2} name={'takeradio'} firstId={'takefirst'} secondId={'takesecond'} title={'Способ получения'} first={'Доставка'} second={'Самовывоз'} />
                    <ContactsRadio direction={true} change={setRadio3} name={'payradio'} firstId={'payfirst'} secondId={'paysecond'} title={'Способ оплаты'} first={'Наличными при получении'} second={'Картой при получении'} />
                </div>
                <div className="adress-info">
                    <h1>Адрес доставки</h1>
                    <form className='adress-info_form' action="">
                        <input value={adress} onChange={(e) => setAdress(e.target.value)} placeholder='Адрес' type="text" name="address" id="address" />
                        <div className="address-home">
                            <input value={house} onChange={(e) => setHouse(e.target.value)} placeholder='Дом' type="text" name="house" id="house" />
                            <input value={apartaments} onChange={(e) => setApartaments(e.target.value)} placeholder='Квартира' type="text" name="kcartira" id="kcartira" />
                            <input value={entrance} onChange={(e) => setEntrance(e.target.value)} placeholder='Подъезд' type="text" name="pod" id="pod" />
                        </div>
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows={'5'} name="comm" id="comment" placeholder='Комментарий' ></textarea>
                    </form>
                </div>
                <div className="dilivary-info">
                    <h1>Условия доставки</h1>
                    <div>
                        <input onChange={() => setCheckbox1(prev => !prev)} type="checkbox" className="custom-checkbox" id="floor" name="floor" value="floor" />
                        <label htmlFor="floor">Потребуется подъем на этаж +100р</label>
                        <input onChange={() => setCheckbox2(prev => !prev)} type="checkbox" className="custom-checkbox" id="otherName" name="otherName" value="otherName" />
                        <label htmlFor="otherName">Заказ на другое имя</label>
                    </div>
                </div>
                <div className="payment">
                    <div className="payment-title">
                        <p>Стоимость доставки: <b>0р</b></p>
                        <p>Итог: <b>{totalSum || 0}р</b></p>
                    </div>
                    <Button style={{ cursor: 'not-allowed' }} backgroundColor={paymentDisable ? '#abaeb3' : '#30496F'} disabled={paymentDisable} onClick={onClick} value={'Оплатить покупки'} color={'#fff'} />
                </div>
            </section>
            {paymentComplete &&
                <div className="completeOrder">
                    <p>Заказ оформлен</p>
                </div>
            }
        </>
    )
}