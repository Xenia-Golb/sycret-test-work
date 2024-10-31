import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Catalog from "../../components/Catalog/Catalog";
import fetchReducer from "../../redux/slices/fetchReducer";

function CatalogPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Извлекаем данные из Redux
    const { loading, error } = useSelector((state) => state.list); // Теперь мы получаем только загрузку и ошибки

    useEffect(() => {
        // Загружаем список товаров при монтировании компонента
        dispatch(fetchReducer());
    }, [dispatch]);

    const handleItemClick = (itemId) => {
        console.log(`Товар с ID ${itemId} был нажат`); // Логируем нажатие
        navigate('/contacts'); // Переход на страницу контактов
    };

    if (loading) {
        return <div>Loading...</div>; // Индикатор загрузки
    }

    if (error) {
        return <div>Error: {error}</div>; // Обработка ошибок
    }

    return (
        <>
            <Catalog
                onItemClick={handleItemClick} // Передаем обработчик клика
            />
        </>
    );
}

export default CatalogPage;
