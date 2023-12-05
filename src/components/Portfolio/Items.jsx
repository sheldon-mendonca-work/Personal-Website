import classes from './Portfolio.module.css';
import styles from '../../Reusable.module.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import shape2 from '../../assets/shape-2.png';
import {motion} from 'framer-motion';

const Items = ({workItems}) => {
    
    return <>
        {
            workItems.map(item => (
                <motion.div
                layout
                animate={{opacity: 1}}
                initial={{opacity: 0.6}}
                exit={{opacity: 0.6}}
                transition={{duration: 0.4}}
                className={`${classes.items} ${styles.card} ${styles.cardTwo}`} key={item.id}>
                    <div className={`${classes.imgWrapper}`}>
                        <img src={item.img} alt="" className={`${classes.img}`} />
                    </div>

                    <span className={`${classes.category} ${styles.textCs}`}>{item.category}</span>
                    <h3 className={`${classes.title}`}>{item.title}</h3>
                    <p className={`${classes.description}`}>{item.description}</p>
                    
                    <Link to={item.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                        Visit site <FaArrowRight className={styles.icon}/>
                    </Link>

                    <img src={shape2} alt="" className={`${styles.shape} ${styles.cShape}`} />
                </motion.div>
            ))
        }
    </>
};

export default Items;