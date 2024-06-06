import { useState } from "react"
import { Link } from "react-router-dom"
import findProduct from '../../lib/findProduct'
import "./Search.css"

export default function Search() {
    const [search, setSearch] = useState('')

    const [isSearch, setIsSearch] = useState(false)
    const [filtered, setFiltered] = useState([])

    const handleSearch = async () => {
        const filteredItems = await findProduct({ title: search })
        setFiltered(filteredItems.products)
    }
    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" placeholder='Поиск' name="search" id="search"
                    onChange={(e) => {
                        setSearch(e.target.value)
                        handleSearch()
                        setIsSearch(true)
                        if (e.target.value === "") {
                            setIsSearch(false)
                        }
                    }} value={search} />
                <label htmlFor="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                        <circle cx="4" cy="4" r="3.5" stroke="#2C3035" />
                        <path d="M6.5 7L10 11" stroke="#2C3035" />
                    </svg>
                </label>

            </div>
            {isSearch && <div className="search-results">
                <div className="search-list">
                    {filtered.map((item) => {
                        return (
                            <Link to={`/item/${item.article}`}>
                                <div className="search-item">
                                    <img src={item.images[0]} alt="" />
                                    <p>{item.title}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>}
        </div>
    )
}