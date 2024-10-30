import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './ExitsPage.module.css';

export function ExitsPage() {
    const navigate = useNavigate();
    return (
        <div className={styles['success']}>
            <div className={styles['text']}>Ваш заказ оформлен!</div>
            <Button appearence="big" onClick={() => navigate('/')}>Сделать новый заказ</Button>
        </div>
    );
}