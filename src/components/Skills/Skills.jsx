import classes from './Skills.module.css';
import styles from '../../Reusable.module.css';
import { skills } from '../Data/Data';

const Skills = () => {
    return <section className={`${classes.skills} ${styles.section}`} id='skills'>
        <h2 className={`${styles.title} ${classes.textCs}`} >Skills</h2>

        <p className={`${styles.subTitle}`}>
            My <span>Talents.</span>
        </p> 

        <div className={`${styles.container} ${classes.container} ${styles.grid}`}>
            {
                skills.map(item => (
                    <div className={`${classes.item}`} key={item.id}>
                        <div className={`${classes.titles}`}>
                            <h3 className={`${classes.name}`}>{item.name}</h3>
                            <span className={`${classes.number}`}>
                                {item.percentage} <span>%</span>
                            </span>
                        </div>

                        <p className={`${classes.description}`}>
                            {item.description}
                        </p>
                        <div className={`${classes.bar}`}>
                            <span className={`${classes.percentage}`} style={{width: `${item.percentage}%`}}>
                                <span></span>
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>

    </section>
};

export default Skills;
