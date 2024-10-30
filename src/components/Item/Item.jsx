import Button from '../Button/Button';
import style from './Item.module.css';
function Item({ title, description, price, onClick }) {

    return (
        <div className={style['card']}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <Button onClick={onClick}> Купить
            </Button>
        </div>
    );
}

export default Item;