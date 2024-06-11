export default function SelectCategory({ onChange }) {
    function handleChange(e) {
        onChange(e.target.value)
    }

    return (
            <select onChange={handleChange} name="" id="">
                <option value="all">Показать все</option>
                <option value="Смесители и душ">Смесители и душ</option>
                <option value="Унитазы и биде">Унитазы и биде</option>
                <option value="Плитка">Плитка</option>
                <option value="Мебель для ванной">Мебель для ванной</option>
                <option value="Кухонные мойки и фильтры">Кухонные мойки и фильтры</option>
                <option value="Полотенцесушители">Полотенцесушители</option>
            </select>
    )
};