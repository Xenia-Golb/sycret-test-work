import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Catalog from "../../components/Catalog/Catalog";
import { fetchList } from "../../redux/actions/actions"; // Импортируйте правильное действие

function CatalogPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Извлекаем данные из Redux
    const { loading, error, list } = useSelector((state) => state.fetch);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ApiKey: "011ba11bdcad4fa396660c2ec447ef14", // Ваш API-ключ
                        MethodName: "OSGetGoodList", // Имя метода
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }

                const data = await response.json();

                // Обработка данных и вызов соответствующих действий Redux
                if (data.result === 0) {
                    dispatch(fetchList(data.data)); // Успешно загруженные данные
                } else {
                    dispatch(fetchList(data.resultdescription)); // Ошибка - передаем описание ошибки
                }
            } catch (error) {
                dispatch(fetchList(error.message)); // Ловим ошибки
            }
        };

        fetchData();
    }, [dispatch]);

    const handleItemClick = (itemId) => {
        console.log(`Товар с ID ${itemId} был нажат`);
        navigate('/contacts'); // Переход на страницу контактов
    };

    if (loading) {
        return <div>Loading...</div>; // Индикатор загрузки
    }

    if (error) {
        return <div>Error: {error}</div>; // Обработка ошибок
    }

    return (
        <Catalog
            items={list}
            loading={loading}
            error={error}
            onItemClick={handleItemClick}
        />
    );
}

export default CatalogPage;
