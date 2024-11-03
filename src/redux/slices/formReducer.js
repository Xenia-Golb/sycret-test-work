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
    isFormReadyToSubmit: false,
};

// Регулярное выражение для проверки номера телефона
const regexPhone = /^\+?[78]\s?[-]?(\(\d{3}\)|\d{3})[-]?\d{3}[-]?\d{2}[-]?\d{2}$/;

// Регулярное выражение для проверки email
const regexEmail = /^\S+@\S+\.\S+$/;

// Редюсер формы
export function formReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_VALUE':
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.payload.field]: action.payload.value,
                },
                isFormReadyToSubmit: validateForm({
                    ...state.values,
                    [action.payload.field]: action.payload.value,
                }),
            };
        case 'CLEAR':
            return {
                ...state,
                values: INITIAL_STATE.values,
                isFormReadyToSubmit: false,
                isValid: INITIAL_STATE.isValid,
            };
        case 'RESET_VALIDITY':
            return {
                ...state,
                isValid: INITIAL_STATE.isValid,
            };
        case 'SUBMIT': {
            const newValidity = {
                name: state.values.name.trim().length > 0,
                phone: regexPhone.test(state.values.phone),
                email: regexEmail.test(state.values.email),
            };

            return {
                ...state,
                isValid: newValidity,
                isFormReadyToSubmit: Object.values(newValidity).every(Boolean),
            };
        }
        default:
            return state; // Возвращаем текущее состояние по умолчанию
    }
}

// Функция для валидации формы
const validateForm = (values) => {
    const nameValidity = values.name.trim().length > 0;
    const phoneValidity = regexPhone.test(values.phone);
    const emailValidity = regexEmail.test(values.email);

    return nameValidity && phoneValidity && emailValidity;
};

// Экспортируем действие обновления поля формы
export const updateFormField = (field, value) => ({
    type: 'SET_VALUE',
    payload: { field, value },
});

export default formReducer;
