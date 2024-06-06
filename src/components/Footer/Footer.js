import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer_links">
                <div className="footer_left">
                    <div className="footer_links-list">
                        <p className="links-heading">О нас</p>
                        <ul className="footer-list">
                            <li><Link to='/about'>О компании</Link></li>
                            <li><Link to='/contacts'>Контакты</Link></li>
                        </ul>
                    </div>
                    <div className="footer_links-list">
                        <p className="links-heading">Покупателям</p>
                        <ul className="footer-list">
                            <li><Link to='/busket'>Доставка</Link></li>
                            <li><Link to='/'>Магазины</Link></li>
                            <li><Link to='/busket'>Оплата</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_right">
                    <div className="footer_links-list">
                        <p className="links-heading">Инфо</p>
                        <ul className="footer-list">
                            <li><Link to={'/documents'}>Документы</Link></li>
                            <li><a href="#">Публичная оферта для
                                физических лиц</a></li>
                            <li><a href="#">Пользовательское соглашение
                                для юридических лиц</a></li>
                            <li><a href="#">Политика конфенендиальности</a></li>
                        </ul>
                    </div>
                    <div className="footer_links-list">
                        <p className="links-heading">Контакты</p>
                        <ul className="footer-list">
                            <li>+375 (29) 623 50 05</li>
                            <li>+375 (29) 886 50 05</li>
                            <li>
                                <a target='_blank' href="https://yandex.by/maps/157/minsk/house/Zk4Ycw9gTEAFQFtpfXR5eXVjZw==/?indoorLevel=1&ll=27.580552%2C53.888903&z=17.12">
                                    г. Минск, ул. Ленина 27 - 47. 2 этаж.
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href="https://yandex.by/maps/157/minsk/house/Zk4YcA5iTEYBQFtpfXV0dX1qZg==/?ll=27.692536%2C53.954192&z=17.12">
                                    г. Минск, ул. Уручская, 19, П 112 А.
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="copyright">Дом-Сантехники © Минск 2008-2023 Все права защищены.</p>
            <div className="footer_socials">
                <svg onClick={() => { window.open('https://www.instagram.com/dom.santehniki.minsk/') }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.7 56.7" space="preserve"><path d="M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8S41 36.5 41 29.5s-5.8-12.8-12.8-12.8zm0 21c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" fill="#ffffff" class="fill-000000"></path><circle cx="41.5" cy="16.4" r="2.9" fill="#ffffff" class="fill-000000"></circle><path d="M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3c0-4.2-1.4-7.8-4-10.4zm-.4 31c0 3.1-1.1 5.6-2.9 7.3s-4.3 2.6-7.3 2.6H18c-3 0-5.5-.9-7.3-2.6C8.9 45.4 8 42.9 8 39.8V19.3c0-3 .9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2v20.6z" fill="#ffffff" class="fill-000000"></path></svg>
                <svg onClick={() => { window.open('https://wa.me/375298865005') }} viewBox="0 0 56.693 56.693" space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 56.693 56.693"><path d="M46.38 10.714C41.73 6.057 35.544 3.492 28.954 3.489c-13.579 0-24.63 11.05-24.636 24.633a24.589 24.589 0 0 0 3.289 12.316L4.112 53.204l13.06-3.426a24.614 24.614 0 0 0 11.772 2.999h.01c13.577 0 24.63-11.052 24.635-24.635.002-6.582-2.558-12.772-7.209-17.428zM28.954 48.616h-.009a20.445 20.445 0 0 1-10.421-2.854l-.748-.444-7.75 2.033 2.07-7.555-.488-.775a20.427 20.427 0 0 1-3.13-10.897c.004-11.29 9.19-20.474 20.484-20.474a20.336 20.336 0 0 1 14.476 6.005 20.352 20.352 0 0 1 5.991 14.485c-.004 11.29-9.19 20.476-20.475 20.476z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" class="fill-000000"></path><path d="M40.185 33.281c-.615-.308-3.642-1.797-4.206-2.003-.564-.205-.975-.308-1.385.308-.41.617-1.59 2.003-1.949 2.414-.359.41-.718.462-1.334.154-.615-.308-2.599-.958-4.95-3.055-1.83-1.632-3.065-3.648-3.424-4.264-.36-.617-.038-.95.27-1.257.277-.276.615-.719.923-1.078.308-.36.41-.616.616-1.027.205-.41.102-.77-.052-1.078-.153-.308-1.384-3.338-1.897-4.57-.5-1.2-1.008-1.038-1.385-1.057-.359-.018-.77-.022-1.18-.022s-1.077.154-1.642.77c-.564.616-2.154 2.106-2.154 5.135 0 3.03 2.206 5.957 2.513 6.368.308.41 4.341 6.628 10.516 9.294a35.341 35.341 0 0 0 3.509 1.297c1.474.469 2.816.402 3.877.244 1.183-.177 3.642-1.49 4.155-2.927.513-1.438.513-2.67.359-2.927-.154-.257-.564-.41-1.18-.719z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" class="fill-000000"></path></svg>
                <svg onClick={() => { window.open('https://vk.com/public220814950') }} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M484.7 132c3.56-11.28 0-19.48-15.75-19.48h-52.37c-13.21 0-19.31 7.18-22.87 14.86 0 0-26.94 65.6-64.56 108.13-12.2 12.3-17.79 16.4-24.4 16.4-3.56 0-8.14-4.1-8.14-15.37V131.47c0-13.32-4.06-19.47-15.25-19.47H199c-8.14 0-13.22 6.15-13.22 12.3 0 12.81 18.81 15.89 20.84 51.76V254c0 16.91-3 20-9.66 20-17.79 0-61-66.11-86.92-141.44C105 117.64 99.88 112 86.66 112H33.79C18.54 112 16 119.17 16 126.86c0 13.84 17.79 83.53 82.86 175.77 43.21 63 104.72 96.86 160.13 96.86 33.56 0 37.62-7.69 37.62-20.5v-47.66c0-15.37 3.05-17.93 13.73-17.93 7.62 0 21.35 4.09 52.36 34.33C398.28 383.6 404.38 400 424.21 400h52.36c15.25 0 22.37-7.69 18.3-22.55-4.57-14.86-21.86-36.38-44.23-62-12.2-14.34-30.5-30.23-36.09-37.92-7.62-10.25-5.59-14.35 0-23.57-.51 0 63.55-91.22 70.15-122" fill-rule="evenodd" fill="#ffffff" class="fill-000000"></path></svg>
                <svg onClick={() => { window.open('https://t.me/domsanteh') }} viewBox="0 0 60 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M58.4746 2L2 22.4167L18.1356 30.5833L42.339 14.25L26.2034 34.6667L50.4068 51L58.4746 2Z" stroke="white" stroke-width="3" stroke-linejoin="round" /></svg>
            </div>
        </footer>
    )
}