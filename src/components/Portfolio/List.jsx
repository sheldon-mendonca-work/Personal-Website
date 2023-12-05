import classes from './Portfolio.module.css';
import styles from '../../Reusable.module.css';
import { useState } from 'react';

const List = ({navList, filteredItems}) => {

    const [ activeItem, setActiveItem ] = useState(0);
    
    return <div className={classes.list}>
        {
            navList.map((item, index) => (
                <button className={`${classes.listItem} ${styles.textCs} ${activeItem === index ? classes.active : ""}`} key={item} onClick={()=>{setActiveItem(index); filteredItems(item); }}>
                    {item}
                </button>
            ))
        }
    </div>
};

export default List;