import { useSelector } from "react-redux"; // Импортируем useSelector для доступа к состоянию Redux
import Item from "../Item/Item"; // Импорт компонента Item
import style from "./Catalog.module.css"; // Импорт стилей

function Catalog({ onItemClick }) {
    const list = useSelector((state) => state.list.list); // Получаем список товаров из Redux
    const loading = useSelector((state) => state.list.loading); // Получаем состояние загрузки
    const error = useSelector((state) => state.list.error); // Получаем ошибки

    if (loading) {
        return <div>Loading...</div>; // Индикатор загрузки
    }

    if (error) {
        return <div>Error: {error}</div>; // Обработка ошибок
    }

    return (
        <div className={style.catalog}>
            {list.map(item => (
                <Item
                    key={item.id}
                    title={item.name} // Название товара
                    description={`Цена: ${item.price}₽`} // Форматируем описание
                    onClick={() => onItemClick(item.id)} // Обработка клика с передачей id товара
                />
            ))}
        </div>
    );
}

export default Catalog;
