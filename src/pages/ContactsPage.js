import { useEffect } from "react";
import ContactsSection from "../components/ContactsSection/ContactsSection";

export default function ContactsPage({ setButton, setSubtitle, setTitle }) {
    useEffect(() => {
        setTitle('Контакты')
        setButton(false)
        setSubtitle('')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="page">
            <ContactsSection></ContactsSection>
        </div>
    )
}