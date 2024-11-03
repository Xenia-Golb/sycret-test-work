import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Contacts.module.css';
import { updateFormField } from '../../redux/slices/formReducer';
import { useState, useEffect } from 'react';

function Contacts({ onClickToBack, onClickToExits }) {
    const dispatch = useDispatch();
    const { name, phone, message, email } = useSelector((state) => state.form.values);
    const [errors, setErrors] = useState({}); // Состояние для хранения ошибок

    const handleInputChange = (field) => (event) => {
        const value = event.target.value;
        dispatch(updateFormField(field, value));
        setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined })); // Сбрасываем ошибку при изменении
    };

    const validateForm = () => {
        const newErrors = {};
        const phoneRegex = /^\+?[78]\s?[-]?(\(\d{3}\)|\d{3})[-]?\d{3}[-]?\d{2}[-]?\d{2}$/;
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

        if (!name.trim()) {
            newErrors.name = 'Пожалуйста, заполните обязательное поле имени';
        }
        if (!phone.trim()) {
            newErrors.phone = 'Пожалуйста, заполните обязательное поле телефона';
        } else if (!phoneRegex.test(phone)) {
            newErrors.phone = 'Введите корректный номер телефона';
        }
        if (!email.trim()) {
            newErrors.email = 'Пожалуйста, заполните обязательное поле электронной почты';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Введите корректный адрес электронной почты';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Возвращаем true, если нет ошибок
    };

    const handleFormSubmit = () => {
        if (validateForm()) {
            onClickToExits();
        }
    };

    // Очистка данных при переходе на другую страницу
    useEffect(() => {
        return () => {
            dispatch(updateFormField('name', ''));
            dispatch(updateFormField('phone', ''));
            dispatch(updateFormField('message', ''));
            dispatch(updateFormField('email', ''));
            setErrors({});
        };
    }, [dispatch]);

    return (
        <div className={styles.contacts}>
            <div className={styles.inputContainer}>
                <Input
                    placeholder="Илон Маск"
                    autoFocus
                    appearance="title"
                    value={name}
                    onChange={handleInputChange('name')}
                    className={errors.name ? styles.errorInput : ''}
                />
                {errors.name && <label className={styles.errorLabel}>{errors.name}</label>}
            </div>
            <div className={styles.inputContainer}>
                <Input
                    placeholder="+7(999)-999-99-99"
                    type="tel"
                    value={phone}
                    onChange={handleInputChange('phone')}
                    className={errors.phone ? styles.errorInput : ''}
                />
                {errors.phone && <label className={styles.errorLabel}>{errors.phone}</label>}
            </div>
            <div className={styles.inputContainer}>
                <textarea
                    name="message"
                    cols="30"
                    placeholder="Ваше сообщение ..."
                    rows="10"
                    className={`${styles.textArea} ${errors.message ? styles.errorInput : ''}`}
                    value={message}
                    onChange={handleInputChange('message')}
                />
                {errors.message && <label className={styles.errorLabel}>{errors.message}</label>}
            </div>
            <div className={styles.inputContainer}>
                <Input
                    placeholder="elon@musk.com"
                    appearance="title"
                    value={email}
                    onChange={handleInputChange('email')}
                    className={errors.email ? styles.errorInput : ''}
                />
                {errors.email && <label className={styles.errorLabel}>{errors.email}</label>}
            </div>
            <div className={styles.btns}>
                <Button onClick={onClickToBack}>Назад</Button>
                <Button onClick={handleFormSubmit}>Оплатить</Button>
            </div>
        </div>
    );
}

export default Contacts;
