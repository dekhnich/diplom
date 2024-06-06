import { useEffect } from "react"
import AboutSection from "../components/AboutSection/AboutSection"

export default function AboutPage({ setButton, setSubtitle, setTitle }) {
    useEffect(() => {
        setTitle('О нас')
        setButton(false)
        setSubtitle('')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="page">
            <AboutSection />
        </div>
    )
}