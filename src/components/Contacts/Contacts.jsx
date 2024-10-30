import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from './Contacts.module.css';
import cn from 'classnames';

function Contacts({ onClickToBack, onClickToExits }) {
    return (<div className={styles['contacts']}>
        <Input
            placeholder="Введите имя"
            appearance="title"
        />
        <Input
            placeholder="Введите номер телефона"
            appearance="title"
        />
        <textarea name="post" id="" cols="30"
            placeholder="Ваше сообщение ... "
            rows="10" className={styles['text-area']}></textarea>
        <Input
            placeholder="Введите адрес электронной почты"
            appearance="title"
        />
        <div className={styles['btns']}>
            <Button onClick={onClickToBack}
            >Назад</Button>
            <Button onClick={onClickToExits}>Оплатить</Button>
        </div>


    </div>);
}

export default Contacts;