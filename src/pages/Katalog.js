import { useEffect } from "react"
import KatalogMain from "../components/KatalogMain/KatalogMain"

export default function Katalog({ setButton, setSubtitle, setTitle }) {
    useEffect(() => {
        setButton(false)
        setSubtitle('')
        setTitle('Каталог')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="page">
            <KatalogMain />
        </div>
    )
}