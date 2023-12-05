import classes from './Portfolio.module.css';
import styles from '../../Reusable.module.css';
import List from './List';
import { projects } from '../Data/Data';
import { useState } from 'react';
import Items from './Items';
import { AnimatePresence } from 'framer-motion';

const Portfolio = () => {

    const navList = ["All", ...new Set(projects.map(item => item.category))];
    
    const [ projectItems, setProjectItems ] = useState(projects);
    let category = navList;

    const filteredItems = (category) => {
        if(category === "All"){
            setProjectItems(projects);
            return;
        }

        const newItems = projects.filter(item => item.category === category);

        setProjectItems(newItems)
    }

    return <section className={`${classes.portfolio} ${styles.section} ${styles.grid}`} id='portfolio'>
        <h2 className={`${styles.title} ${classes.title} ${classes.textCs}`} >Projects</h2>

        <p className={`${styles.subTitle}`}>
            My <span>Works.</span>
        </p> 

        <List navList={category} filteredItems={filteredItems} />

        <div className={`${styles.container} ${classes.container} ${styles.grid}`}>
            <AnimatePresence initial={false}>
                <Items workItems={projectItems} />
            </AnimatePresence>
        </div>


    </section>
};

export default Portfolio;