import './KatalogMain.css'
import Button from '../Button/Button';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState, useEffect, useRef } from 'react';
import KatalogItem from '../KatalogItem/KatalogItem';
import { useProducts } from '../../store/useProducts';
import getBrands from '../../lib/getBrands'
import getTypes from '../../lib/getTypes'
import getCategory from '../../lib/getCategory';
import findProduct from '../../lib/findProduct'
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import FilterSearch from '../FilterSearch/FilterSearch';
import SelectCategory from '../SelectCategory';
import SelectBrand from '../SelectBrand';

const MIN = 100
const MAX = 10000

export default function KatalogMain() {
    const scrollToThis = useRef()

    const [isOpenPlumbFilter, setIsOpenPlumbFilter] = useState(false)
    const [isOpenBrendFilter, setIsOpenBrendFilter] = useState(false)
    const [isOpenTypeFilter, setIsOpenTypeFilter] = useState(false)
    const [isOpenPriceFilter, setIsOpenPriceFilter] = useState(false)

    const [values, setValues] = useState([MIN, MAX])
    const [mobileFilter, setMobileFilter] = useState(false)

    const products = useProducts((state) => state.products)
    const replaceCategory = useProducts((state) => state.replaceCategory)
    const setReplaceCategory = useProducts((state) => state.setReplaceCategory)
    const setTotalPage = useProducts((state) => state.setTotalPage)

    const [shownProducts, setShownProducts] = useState([])

    const [priceQueue, setPriceQueue] = useState('')

    const [brands, setBrands] = useState([])
    const [types, setTypes] = useState([])
    const [category, setCategory] = useState([])

    const [shownBrands, setShownBrands] = useState([])
    const [shownTypes, setShownTypes] = useState([])
    const [shownCategory, setShownCategory] = useState([])
    const [valueFilteredProducts, setValueFilteredProducts] = useState([])

    const [currentBrand, setCurrentBrand] = useState('')
    const [currentType, setCurrentType] = useState('')
    const [currentCategory, setCurrentCategory] = useState('')

    // const totalPages = useProducts((state) => state.totalPages)
    const totalPages = 1

    const handlePageClick = (event) => {
        (async () => {
            const pages = await findProduct({ category: currentCategory, type: currentType, brend: currentBrand, page: event.selected, sort: priceQueue })
            setShownProducts(pages.products)
        })()
        const distanceFromTop = scrollToThis.current.offsetTop
        window.scrollTo({ top: distanceFromTop, behavior: 'smooth' })
    }

    useEffect(() => {
        setShownProducts([])
        setValues([MIN, MAX])
        if (currentBrand) {
            (async () => {
                const newProducts = await findProduct({ brend: currentBrand, category: currentCategory })
                setShownProducts(newProducts.products)
                setTotalPage(newProducts.totalPages)
                setValueFilteredProducts(newProducts.products)
            })()
        } else {
            setShownProducts(products)
        }
    }, [currentBrand])

    useEffect(() => {
        setValues([MIN, MAX])
        setShownProducts([])
        
        if (currentCategory) {
            (async () => {
                const newProducts = await findProduct({ category: currentCategory, brend: currentBrand })
                setShownProducts(newProducts.products)
                setTotalPage(newProducts.totalPages)
                setValueFilteredProducts(newProducts.products)
            })()
        } else {
            setShownProducts(products)
        }
        setReplaceCategory(currentCategory)
    }, [currentCategory])

    useEffect(() => {
        setValues([MIN, MAX])
        setShownProducts([])
        if (currentType) {
            (async () => {
                const newProducts = await findProduct({ type: currentType })
                setShownProducts(newProducts.products)
                setTotalPage(newProducts.totalPages)
                setValueFilteredProducts(newProducts.products)
            })()
        } else {
            setShownProducts(products)
        }

    }, [currentType])

    useEffect(() => {
        if (category) {
            setShownCategory(category)
        }
    }, [category])

    useEffect(() => {
        if (brands) {
            setShownBrands(brands)
        }
    }, [brands])

    useEffect(() => {
        if (types) {
            setShownTypes(types)
        }
    }, [types])

    useEffect(() => {
        if (values) {
            const newProducts = valueFilteredProducts?.filter((el) => el.cost > values[0] && el.cost < values[1])
            setShownProducts(newProducts)
        }
    }, [values])

    useEffect(() => {
        setValues([MIN, MAX])
        setShownProducts([])
        if (priceQueue) {
            (async () => {
                const newProducts = await findProduct({ category: currentCategory, type: currentType, brend: currentBrand, sort: priceQueue })
                setShownProducts(newProducts.products)
                setTotalPage(newProducts.totalPages)
                setValueFilteredProducts(newProducts.products)
            })()
        } else {
            setShownProducts([])
        }
    }, [priceQueue])

    useEffect(() => {
        setShownProducts(products)
        setValueFilteredProducts(products)
        setCurrentCategory(replaceCategory)
    }, [products])

    useEffect(() => {
        (async () => {
            const brand = await getBrands()
            const type = await getTypes()
            const category = await getCategory()
            setBrands(brand)
            setTypes(type)
            setCategory(category)
        })()

        if (scrollToThis) {
            const distanceFromTop = scrollToThis.current.offsetTop

            window.scrollTo({
                top: distanceFromTop,
                behavior: 'smooth',
            })
        }
    }, [])

    const buttonStyles = {
        padding: '10px 25px',
        borderRadius: '5px',
        background: '#afbcd1',
        color: '#000',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 700,
    };

    return (
        <div className="katalog-main" ref={scrollToThis}>
            <h1>Категории товаров</h1>
            <div className="mobile-filter_button">
                <Button onClick={() => { setMobileFilter(!mobileFilter) }} id="mobile-filter_button" value={'Фильтры'} backgroundColor={'#AFBCD1'} color={'#2C3035'} />
            </div>
            {/* <p onClick={() => {
                if (priceQueue === 'desc') {
                    setPriceQueue('asc')
                } else {
                    setPriceQueue('desc')
                }
            }} className="katalog-main_price">
                Цена
                {priceQueue === 'desc' ?
                    (
                        <IoIosArrowUp />
                    ) : (
                        <IoIosArrowDown />
                    )}

            </p> */}
            <div className="katalog-content">
                <div className="katalog-filter">
                    <div className="filter-list">
                        <div className="filter-type">
                            <div>Фильтр по категориям</div>
                            <SelectCategory onChange={value => setCurrentCategory(value)} />
                            <button style={buttonStyles} onClick={() => setCurrentCategory('all')}>Показать все</button>

                            <div>Фильтр по брендам</div>
                            <SelectBrand onChange={value => setCurrentBrand(value)} />
                            <button style={buttonStyles} onClick={() => setCurrentBrand('all')}>Показать все</button>
                        </div>
                        {/* <div className="filter-type">
                            <span onClick={() => { setIsOpenPlumbFilter(!isOpenPlumbFilter) }} >Сантехника
                                <svg style={{ transform: `rotate(${isOpenPlumbFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                    <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                </svg>
                            </span>
                            {isOpenPlumbFilter &&
                                <>
                                    {<FilterSearch
                                        searchArr={category}
                                        setSearchArr={setShownCategory}
                                    />}
                                    <ul className="plumg-filter">
                                        <li className='filter-select' onClick={() => setCurrentCategory()}>Все</li>
                                        {shownCategory?.map((el, index) => {
                                            return (
                                                <li style={{ display: el ? 'block' : 'none' }} onClick={() => {
                                                    setCurrentCategory(el)
                                                }} className='filter-select' key={index}>{el}</li>
                                            )
                                        })}
                                    </ul>
                                </>
                            }
                        </div> */}
                        {/* <div className="filter-type">
                            <span
                                onClick={() => { setIsOpenBrendFilter(!isOpenBrendFilter) }}
                            >Бренд <svg style={{ transform: `rotate(${isOpenBrendFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                    <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                </svg></span>
                            {isOpenBrendFilter &&
                                <>
                                    <FilterSearch
                                        searchArr={brands}
                                        setSearchArr={setShownBrands}
                                    />

                                    <ul className="brend-filter">
                                        <li className='filter-select' onClick={() => setCurrentBrand()}>Все</li>
                                        {shownBrands?.map((el, index) => {
                                            return (
                                                <li style={{ display: el ? 'block' : 'none' }} onClick={() => {
                                                    setCurrentBrand(el)
                                                }} className='filter-select' key={index}>{el}</li>
                                            )
                                        })}
                                    </ul>
                                </>
                            }
                        </div> */}
                        {/* <div className="filter-type">
                            <span
                                onClick={() => { setIsOpenTypeFilter(!isOpenTypeFilter) }}
                            >Тип <svg style={{ transform: `rotate(${isOpenTypeFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                    <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                </svg></span>
                            {isOpenTypeFilter &&
                                <>
                                    <FilterSearch
                                        searchArr={types}
                                        setSearchArr={setShownTypes}
                                    />
                                    <ul className="type-filter">
                                        <li className='filter-select' onClick={() => setCurrentType()}>Все</li>

                                        {shownTypes?.map((el, index) => {
                                            return (
                                                <li style={{ display: el ? 'block' : 'none' }} onClick={() => setCurrentType(el)} className='filter-select' key={index}>{el}</li>
                                            )
                                        })}
                                    </ul>
                                </>
                            }
                        </div> */}
                        {/* <div className="filter-type">
                            <span
                                onClick={() => { setIsOpenPriceFilter(!isOpenPriceFilter) }}
                            >Цена <svg style={{ transform: `rotate(${isOpenPriceFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                    <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                </svg>
                            </span>

                            {isOpenPriceFilter &&
                                <>
                                    <div className="price-range">
                                        <p>Min</p>
                                        <p>Max</p>
                                    </div>
                                    <div className="price-range">
                                        <input type="number" name="min" id="min" value={values[0]} />
                                        <input type="number" name="max" id="max" value={values[1]} />
                                    </div>
                                </>
                            }
                        </div> */}
                    </div>
                </div>
                {mobileFilter &&
                    <div className="katalog-filter-mobile">
                        <div className="filter-list">
                            <svg onClick={() => { setMobileFilter(false) }} xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                <line x1="11.9045" y1="0.337011" x2="1.71722" y2="11.502" stroke="#2C3035" />
                                <line y1="-0.5" x2="15.1142" y2="-0.5" transform="matrix(0.724343 0.68944 0.68944 -0.724343 1 0.204712)" stroke="#2C3035" />
                            </svg>
                            <div>Фильтр по категориям</div>
                            <SelectCategory onChange={value => setCurrentCategory(value)} />
                            <button style={buttonStyles} onClick={() => setCurrentCategory('all')}>Показать все</button>

                            <div>Фильтр по брендам</div>
                            <SelectBrand onChange={value => setCurrentBrand(value)} />
                            <button style={buttonStyles} onClick={() => setCurrentBrand('all')}>Показать все</button>
                            {/* <div className="filter-type">
                                <span onClick={() => { setIsOpenPlumbFilter(!isOpenPlumbFilter) }} >Сантехника
                                    <svg style={{ transform: `rotate(${isOpenPlumbFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                        <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                    </svg>
                                </span>
                                {isOpenPlumbFilter &&
                                    <>
                                        <FilterSearch
                                            searchArr={category}
                                            setSearchArr={setShownCategory}
                                        />
                                        <ul className="plumg-filter">
                                            <li className='filter-select' onClick={() => setCurrentCategory()}>Все</li>
                                            {shownCategory?.map((el, index) => {
                                                return (
                                                    <li onClick={() => {
                                                        setCurrentCategory(el)
                                                    }} className='filter-select' key={index}>{el}</li>
                                                )
                                            })}
                                        </ul>
                                    </>
                                }
                            </div>
                            <div className="filter-type">
                                <span
                                    onClick={() => { setIsOpenBrendFilter(!isOpenBrendFilter) }}
                                >Бренд <svg style={{ transform: `rotate(${isOpenBrendFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                        <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                    </svg></span>
                                {isOpenBrendFilter &&
                                    <>
                                        <FilterSearch
                                            searchArr={brands}
                                            setSearchArr={setShownBrands}
                                        />

                                        <ul className="brend-filter">
                                            <li className='filter-select' onClick={() => setCurrentBrand()}>Все</li>
                                            {shownBrands?.map((el, index) => {
                                                return (
                                                    <li onClick={() => {
                                                        setCurrentBrand(el)
                                                    }} className='filter-select' key={index}>{el}</li>
                                                )
                                            })}
                                        </ul>
                                    </>
                                }
                            </div>
                            <div className="filter-type">
                                <span
                                    onClick={() => { setIsOpenTypeFilter(!isOpenTypeFilter) }}
                                >Тип <svg style={{ transform: `rotate(${isOpenTypeFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                        <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                    </svg></span>
                                {isOpenTypeFilter &&
                                    <>
                                        <FilterSearch
                                            searchArr={types}
                                            setSearchArr={setShownTypes}
                                        />
                                        <ul className="type-filter">
                                            <li className='filter-select' onClick={() => setCurrentType()}>Все</li>

                                            {shownTypes?.map((el, index) => {
                                                return (
                                                    <li onClick={() => setCurrentType(el)} className='filter-select' key={index}>{el}</li>
                                                )
                                            })}
                                        </ul>
                                    </>
                                }
                            </div>
                            <div className="filter-type">
                                <span
                                    onClick={() => { setIsOpenPriceFilter(!isOpenPriceFilter) }}
                                >Цена <svg style={{ transform: `rotate(${isOpenPriceFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                        <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                    </svg>
                                </span>

                                {isOpenPriceFilter &&
                                    <>
                                        <div className="price-range">
                                            <input type="number" name="min" id="min" value={values[0]} />
                                            <input type="number" name="max" id="max" value={values[1]} />
                                        </div>
                                    </>
                                }
                            </div> */}
                        </div>
                    </div>
                }
                <div className="katalog-list">
                    {shownProducts?.map((el) => {
                        return (
                            <KatalogItem
                                key={el._id}
                                item={el}
                            />
                        )
                    })}
                </div>
            </div>
            <ReactPaginate
                className='paginator'
                breakLabel={'...'}
                nextLabel={<IoIosArrowForward size={20} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={totalPages}
                previousLabel={<IoIosArrowBack size={20} />}
                renderOnZeroPageCount={null}
            />
        </div>
    )
}