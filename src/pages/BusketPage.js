import { useEffect } from "react"
import BusketList from "../components/BusketList/BusketList"
import ContactSection from "../components/ContactSection/ContactSection"
import { useProducts } from "../store/useProducts"

export default function BusketPage({ setButton, setSubtitle, setTitle }) {
    const totalSum = useProducts((state) => state.totalSum)
    const setTotalSum = useProducts((state) => state.setTotalSum)

    useEffect(() => {
        setTotalSum()
    }, [])

    useEffect(() => {
        setButton(false)
        setSubtitle('')
        setTitle('Корзина')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="page">
            <BusketList totalSum={totalSum} />
            <ContactSection totalSum={totalSum} />
        </div>
    )
}