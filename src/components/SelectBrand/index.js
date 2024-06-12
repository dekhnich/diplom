export default function SelectBrand({ onChange }) {
    function handleChange(e) {
        onChange(e.target.value)
    }

    return (
        <select onChange={handleChange} name="" id="">
            <option value="all">Показать все</option>
            <option value="Deante">Deante</option>
            <option value="Lavinia Boho">Lavinia Boho</option>
            <option value="FK Marble">FK Marble</option>
            <option value="АВН">АВН</option>
            <option value="Gran-Stone">Gran-Stone</option>
            <option value="Polygran">Polygran</option>
            <option value="Aqwella">Aqwella</option>
        </select>
    )
};