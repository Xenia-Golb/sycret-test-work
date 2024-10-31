import { createAction } from '@reduxjs/toolkit';

export const fetchListStart = createAction('FETCH_LIST_START');
export const fetchListSuccess = createAction('FETCH_LIST_SUCCESS');
export const fetchListFailure = createAction('FETCH_LIST_FAILURE');

const apiKey = "011ba11bdcad4fa396660c2ec447ef14";
const methodName = "OSGetGoodList";

export const fetchList = () => {
    return async (dispatch) => {
        dispatch(fetchListStart());

        try {
            const response = await fetch("https://sycret.ru/service/api/api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ApiKey: apiKey,
                    MethodName: methodName
                })
            });

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            const data = await response.json();

            if (data.result === 0) {
                dispatch(fetchListSuccess(data.data));
            } else {
                dispatch(fetchListFailure(data.resultdescription));
            }
        } catch (error) {
            dispatch(fetchListFailure(error.message));
        }
    };
};
