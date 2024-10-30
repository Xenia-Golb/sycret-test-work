import { data } from "../../data";
import Item from "../Item/Item";
import style from "./Catalog.module.css";
function Catalog({ onClick }) {
    const items = data;
    return (
        <div className={style['catalog']}>
            {items.map(item => {
                return (
                    <Item
                        key={item.id}
                        title={item.name}
                        description={item.price}
                        onClick={onClick}

                    />
                )
            })}
        </div>
    );
}

export default Catalog;