import { useEffect } from "react"
import DocumentsSection from "../components/DocumentsSection/DocumentsSection"

export default function DocumentsPage({ setButton, setSubtitle, setTitle }) {
    useEffect(() => {
        setTitle('Документы')
        setButton(false)
        setSubtitle('')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="page">
            <DocumentsSection />
        </div>
    )
}