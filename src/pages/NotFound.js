import { useEffect } from "react"

export default function NotFound({ setButton, setSubtitle, setTitle }) {
    useEffect(() => {
        setButton(false)
        setSubtitle('Страница не найдена!')
        setTitle('404')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <></>
    )
}