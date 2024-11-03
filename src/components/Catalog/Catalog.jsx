import { useSelector } from "react-redux"; // Импортируем useSelector для доступа к состоянию Redux
import Item from "../Item/Item"; // Импорт компонента Item
import style from "./Catalog.module.css"; // Импорт стилей

function Catalog({ onItemClick }) {
    const { loading, error, list } = useSelector((state) => state.fetch);

    if (loading) {
        return <div>Loading...</div>; // Индикатор загрузки
    }

    if (error) {
        return <div>Error: {error.message || "Произошла ошибка при загрузке товаров."}</div>; // Обработка ошибок
    }

    if (!list.length) {
        return <div>Нет доступных товаров.</div>; // Сообщение, если список пуст
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
