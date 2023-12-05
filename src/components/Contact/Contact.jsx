import classes from './Contact.module.css';
import styles from '../../Reusable.module.css';
import { FaArrowRight, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { toast } from 'react-toastify';
import { copyToClipboard } from '../util/util-functions';

const Contact = () => {
    const copyMailHandler = async () => {
        const copiedMail = await copyToClipboard("sheldonmendoncawork123@gmail.com");
        if(copiedMail){
            toast("Copied email to your clipboard.");
        }else{
            toast("Copy here: sheldonmendoncawork123@gmail.com");
        }
    }

    return <section className={`${classes.contact} ${styles.section} ${styles.grid}`} id='contact'>
        <h2 className={`${styles.title} ${classes.title} ${classes.textCs}`} >Contact</h2>

        <p className={`${styles.subTitle}`}>
            Get in <span className={classes.subText}>touch</span>with me.
        </p> 

        <div className={`${styles.container} ${classes.container} ${styles.grid}`}>
            <div className={`${classes.content}`}>
                <h3 className={`${classes.title}`}>Let's connect.</h3>

                <div className={classes.info}>
                    
                    <div className={classes.card}>
                        <MdOutlineEmail className={classes.cardIcon} />
                        <h3 className={classes.cardTitle}>Email</h3>
                        <div className={classes.cardData}>sheldonmendoncawork123@gmail.com</div>

                        <div onClick={copyMailHandler} className={`${classes.link} ${styles.link}`}>
                            Copy this link <FaArrowRight className={styles.icon}/>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <FaLinkedin className={classes.cardIcon} />
                        <h3 className={classes.cardTitle}>LinkedIn</h3>
                        <div className={classes.cardData}></div>

                        <a href='https://in.linkedin.com/in/sheldon-mendonca' className={`${classes.link} ${styles.link}`} target="_blank" rel="noopener noreferrer">
                            Connect with me <FaArrowRight className={styles.icon}/>
                        </a>
                    </div>

                    <div className={classes.card}>
                        <FaGithub className={classes.cardIcon} />
                        <h3 className={classes.cardTitle}>Github</h3>
                        <div className={classes.cardData}></div>

                        <a href='https://github.com/sheldon-mendonca-work' className={`${classes.link} ${styles.link}`} target="_blank" rel="noopener noreferrer">
                            Check out my work <FaArrowRight className={styles.icon}/>
                        </a>
                    </div>
                    
                </div>
            </div>

            <div className={`${classes.content}`}>
                <h3 className={`${classes.title}`}>Leave me a message.</h3>

                <form className={classes.form} method='POST'>
                    <div className={classes.formDiv}>
                        <label htmlFor="name" className={classes.formTag} required={true}>Name</label>
                        <input type="text" name="name" id="name" className={classes.formInput} placeholder='Enter your name' />
                    </div>

                    <div className={classes.formDiv}>
                        <label htmlFor="email" className={classes.formTag} required={true}>Email Address</label>
                        <input type="email" name="email" id="email" className={classes.formInput} placeholder='Enter your email address' />
                    </div>

                    <div className={`${classes.formDiv} ${classes.formArea}`}>
                        <label htmlFor="text" className={classes.formTag} required={true}>Message</label>
                        <textarea type="text" name="text" id="text" className={classes.formInput} rows={10} cols={30} placeholder="What's up?" />
                    </div>

                    <button type='submit' to="#" className={`${styles.btn} ${classes.sendMsg}`}>
                        Send Message
                    </button>
                    
                </form>
            </div>
        </div>

    </section>
};

export default Contact;