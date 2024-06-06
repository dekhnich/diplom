import { Link } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button/Button';
import { useProducts } from '../../store/useProducts';
import Search from '../Search/Search'
import Logout from '../Logout';

export default function Header({ title, subtitle, button, onLogout, login }) {
    const [currentKatalog, setCurrentKatalog] = useState(false)
    const [currentContacts, setCurrentContacts] = useState(false)
    const [currentBusket, setCurrentBusket] = useState(false)

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const getProducts = useProducts((state) => state.getProducts)
    const busket = useProducts((state) => state.busket)

    const mobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const onClick = () => {
        setCurrentBusket(false)
        setCurrentContacts(false)
        setCurrentKatalog(false)
    }

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div style={{ height: isMobileMenuOpen ? '430px' : '' }} className="header-wrapper">
            <header id='header'>
                <div className="header_top">
                    <h1 style={{color: '#ccc'}}>Blue water</h1>
                    <p><a href="https://wa.me/375298865005">+375 (29) 623 50 05</a> <br /><br /> <a href="https://wa.me/375298865005">+375 (29) 886 50 05</a></p>
                </div>
                <nav>
                    <Link to={'/'}>
                        <img onClick={onClick} src="./assets/icon_logo_200x123.png" alt="" />
                    </Link>
                    <div className="nav-right">
                        <ul>
                            <li onClick={() => {
                                setCurrentKatalog(true)
                                setCurrentBusket(false)
                                setCurrentContacts(false)
                            }} id={currentKatalog && 'currentPage'}><Link to={'/katalog'}>Каталог</Link></li>
                            <li onClick={() => {
                                setCurrentKatalog(false)
                                setCurrentBusket(false)
                                setCurrentContacts(true)
                            }} id={currentContacts && 'currentPage'}><Link to={'/contacts'}>Контакты</Link></li>
                            <li onClick={() => {
                                setCurrentKatalog(false)
                                setCurrentBusket(true)
                                setCurrentContacts(false)
                            }} id={currentBusket && 'currentPage'}>
                                <Link style={{ display: 'flex', alignItems: 'center' }} to={'/busket'}>
                                    Корзина
                                    {busket.length > 0 ? <div className="baslet-items_circle">
                                        {busket.length}
                                    </div> : <></>}
                                </Link>
                            </li>
                        </ul>
                        <Search></Search>
                    </div>
                    {isMobileMenuOpen ?
                        <div>
                            <div>
                                <AiOutlineClose onClick={mobileMenu} className='mobile-menu' />
                                <ul style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <li style={{ color: 'red', borderBottom: '1px solid blue', padding: '0 5px 0 5px' }}>{login}</li>
                                    <li><Logout onClick={onLogout} /></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div style={{ display: 'flex', gap: 10 }}>
                            <HiMenu onClick={mobileMenu} className='mobile-menu' />
                            <ul style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <li style={{ color: 'red', borderBottom: '1px solid blue', padding: '0 5px 0 5px' }}>{login}</li>
                                <li><Logout onClick={onLogout} /></li>
                            </ul>
                        </div>
                    }
                </nav>
                {isMobileMenuOpen &&
                    <div className="mobile-menu_open">
                        <Search></Search>
                        <ul>
                            <li onClick={() => {
                                setCurrentKatalog(true)
                                setCurrentBusket(false)
                                setCurrentContacts(false)
                            }} id={currentKatalog && 'currentPage'}><Link to={'/katalog'}>Каталог</Link></li>
                            <li onClick={() => {
                                setCurrentKatalog(false)
                                setCurrentBusket(false)
                                setCurrentContacts(true)
                            }} id={currentContacts && 'currentPage'}><Link to={'/contacts'}>Контакты</Link></li>
                            <li onClick={() => {
                                setCurrentKatalog(false)
                                setCurrentBusket(true)
                                setCurrentContacts(false)
                            }} id={currentBusket && 'currentPage'}><Link style={{ display: 'flex', alignItems: 'center' }} to={'/busket'}>
                                    Корзина
                                    {busket.length > 0 ? <div className="baslet-items_circle">
                                        {busket.length}
                                    </div> : <></>}
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
                {isMobileMenuOpen ||
                    <>
                        <div className="header_title">
                            <h1>{title}</h1>
                            <h2>{subtitle}</h2>
                        </div>
                        {button &&
                            <div className="header_end">
                                <Link onClick={() => { setCurrentKatalog(true) }} to={'/katalog'} ><Button value={'Смотреть'} ></Button></Link>
                                <div className="current-slide">
                                </div>
                            </div>
                        }
                    </>
                }
            </header>
            <div className="slider-wrapper">
                <div className="slider-box"></div>
                <div className="slider-box"></div>
                <div className="slider-box"></div>
                <div className="slider-box"></div>
            </div>
            <ul>
                <li><Logout onClick={onLogout} /></li>
            </ul>
        </div>
    )
}