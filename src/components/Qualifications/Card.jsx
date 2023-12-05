import classes from './Qualifications.module.css';
import styles from '../../Reusable.module.css';
import { useState } from 'react';

const Card = (props) => {
    const { title, subtitle, date, description } = props;

    const [ showInfo, setShowInfo ] = useState(false);

    return <div className={classes.item}>
        <div className={classes.header} onClick={()=>setShowInfo(!showInfo)}>
            <h3 className={classes.subtitle}>{title}</h3>
            <span className={classes.icon}>{showInfo ? '—' : '+'}</span>
        </div>

        <div className={`${classes.content} ${showInfo ? classes.showContent : ""}`}>
            <div className={classes.dateTitle}>
                <h3 className={classes.cardTitle}>{subtitle}</h3>
                <span className={`${classes.date} ${styles.textCs}`}>{date}</span>
            </div>

            <p className={classes.description}>{description}</p>
        </div>
    </div>
};

export default Card;