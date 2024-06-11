import { useEffect } from "react";
import Category from "../components/Category/Category";
import MapSection from "../components/MapSection/MapSection";
import ShowerSection from "../components/ShowerSection/ShowerSection";
import { useProducts } from "../store/useProducts";
import KatalogMain from "../components/KatalogMain/KatalogMain";

export default function HomePage({ setButton, setSubtitle, setTitle }) {
    const getBusketList = useProducts((state) => state.getBusketList)
    useEffect(() => {
        setButton(true)
        setSubtitle('сантехника')
        setTitle('Эксклюзивная')

        getBusketList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="page">
            {/* <Category></Category> */}
            <KatalogMain></KatalogMain>
            <ShowerSection></ShowerSection>
            <MapSection></MapSection>
        </div>
    )
}