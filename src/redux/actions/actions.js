import { createAction } from '@reduxjs/toolkit';

export const fetchListStart = createAction('FETCH_LIST_START');
export const fetchListSuccess = createAction('FETCH_LIST_SUCCESS');
export const fetchListFailure = createAction('FETCH_LIST_FAILURE');

const apiKey = "011ba11bdcad4fa396660c2ec447ef14";
const baseUrl = "https://sycret.ru/service/api/api"; // Базовый URL для API

// Функция для получения списка товаров
export const fetchList = (methodName) => {
    return async (dispatch) => {
        dispatch(fetchListStart()); // Уведомляем о начале загрузки

        try {
            const response = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ApiKey: apiKey,
                    MethodName: methodName // Указываем имя метода
                })
            });

            // Проверка статуса ответа
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            const data = await response.json(); // Парсинг JSON-ответа

            // Проверка результата
            if (data.result === 0) {
                dispatch(fetchListSuccess(data.data)); // Успех - передаем данные в Redux
            } else {
                dispatch(fetchListFailure(data.resultdescription || 'Неизвестная ошибка')); // Ошибка - передаем описание ошибки
            }
        } catch (error) {
            dispatch(fetchListFailure(error.message || 'Произошла ошибка при запросе')); // Ловим ошибки и передаем сообщение в Redux
        }
    };
};
