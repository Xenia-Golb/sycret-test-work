export const INITIAL_STATE = {
    isValid: {
        name: true,
        phone: true,
        email: true,
    },
    values: {
        name: '',
        phone: '',
        message: '',
        email: ''
    },
    isFormReadyToSubmit: false
};

// Регулярное выражение для проверки номера телефона
const regexPhone = /^\+?[78]\s?[-]?(\(\d{3}\)|\d{3})[-]?\d{3}[-]?\d{2}[-]?\d{2}$/;

// Редюсер формы
export function formReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_VALUE':
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.payload.field]: action.payload.value
                }
            };
        case 'CLEAR':
            return {
                ...state,
                values: INITIAL_STATE.values,
                isFormReadyToSubmit: false
            };
        case 'RESET_VALIDITY':
            return {
                ...state,
                isValid: INITIAL_STATE.isValid
            };
        case 'SUBMIT': {
            const nameValidity = state.values.name.trim().length > 0;
            const phoneValidity = regexPhone.test(state.values.phone);
            const emailValidity = /^\S+@\S+\.\S+$/.test(state.values.email);

            return {
                ...state,
                isValid: {
                    name: nameValidity,
                    phone: phoneValidity,
                    email: emailValidity
                },
                isFormReadyToSubmit: nameValidity && phoneValidity && emailValidity
            };
        }
        default:
            return state; // Возвращаем текущее состояние по умолчанию
    }
}

// Экспортируем действие обновления поля формы
export const updateFormField = (field, value) => ({
    type: 'SET_VALUE',
    payload: { field, value }
});

export default formReducer;
