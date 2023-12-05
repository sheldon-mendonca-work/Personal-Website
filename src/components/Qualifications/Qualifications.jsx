import classes from './Qualifications.module.css';
import styles from '../../Reusable.module.css';
import { FaSuitcase, FaCalendar } from "react-icons/fa6";
import { cv } from '../Data/Data';
import Card from './Card';

const Qualifications = () => {

    const educationItems = cv.filter(item => item.category === "education");
    const experienceItems = cv.filter(item => item.category === "experience");

    return <section className={`${classes.qualifications} ${styles.section} ${styles.grid}`} id='qualifications'>
        <h2 className={`${styles.title} ${classes.title} ${classes.textCs}`} >Qualifications</h2>

        <p className={`${styles.subTitle}`}>
            My <span>Experinces.</span>
        </p> 

        <div className={`${styles.container} ${classes.container} ${styles.grid}`}>
            <div className={classes.group}>
                <h3 className={classes.heading}>Education</h3>
                <div className={classes.items}>
                    {
                        educationItems.map(item => (
                            <Card key={item.id} title={item.title} subtitle={item.subtitle} date={item.date} description={item.description}/>
                        ))
                    }
                </div>
            </div>

            <div className={classes.group}>
                <h3 className={classes.heading}>Experience</h3>
                <div className={classes.items}>
                    {
                        experienceItems.map(item => (
                            <Card key={item.id} title={item.title} subtitle={item.subtitle} date={item.date} description={item.description}/>
                        ))
                    }
                </div>
            </div>

            {/* <div className={`${classes.sections}`}>
                <div className={`${classes.contentActive}`}>
                    <div className={`${classes.data}`}>
                        <div>
                            <h3 className={classes.qualTitle}>Taal Tech</h3>
                            <span className={classes.qualSubTitle}>Job</span>
                            <div className={classes.calendar}>
                                <FaCalendar className={classes.date} />
                                <span>2018 - 2022</span>
                            </div>
                        </div>
                        <div>
                            <span className={classes.rounder}></span>
                            <span className={classes.line}></span>
                        </div>
                    </div>
            
                    <div className={`${classes.data}`}>
                        <div></div>
                        <div>
                            <span className={classes.rounder}></span>
                            <span className={classes.line}></span>
                        </div>
                        <div>
                            <h3 className={classes.qualTitle}>Manipal Institute of Technology</h3>
                            <span className={classes.qualSubTitle}>Job</span>
                            <div className={classes.calendar}>
                                <FaCalendar className={classes.date} />
                                <span>2014 - 2018</span>
                            </div>
                        </div>
                    </div>

                    <div className={`${classes.data}`}>
                        <div>
                            <h3 className={classes.qualTitle}>Narayana Junior College</h3>
                            <span className={classes.qualSubTitle}>Job</span>
                            <div className={classes.calendar}>
                                <FaCalendar className={classes.date} />
                                <span>2012 - 2014</span>
                            </div>
                        </div>
                        <div>
                            <span className={classes.rounder}></span>
                            <span className={classes.line}></span>
                        </div>
                    </div>

                    <div className={`${classes.data}`}>
                        <div></div>
                        <div>
                            <span className={classes.rounder}></span>
                            <span className={classes.line}></span>
                        </div>
                        <div>
                            <h3 className={classes.qualTitle}>St. Andrew's</h3>
                            <span className={classes.qualSubTitle}>Job</span>
                            <div className={classes.calendar}>
                                <FaCalendar className={classes.date} />
                                <span>2000 - 2012   </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        

    </section>
};

export default Qualifications;