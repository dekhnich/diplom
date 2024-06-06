import { useState } from 'react'
import './FilterSearch.css'

export default function FilterSearch({ searchArr, setSearchArr }) {
    const [inputValue, setInputValue] = useState('')

    const onChange = (e) => {
        const value = e.target.value

        setInputValue(value)

        const result = searchArr.map((el) => {
            let newEl = el.substring(0, value.length)
            if (newEl.toLowerCase() === value.toLowerCase()) {
                return el
            }
        })

        if (value === '') {
            setSearchArr(searchArr)
        } else {
            setSearchArr(result)
        }
    }

    return (
        <input className='filter-search' type="text" value={inputValue} onChange={onChange} />
    )
}