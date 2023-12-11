import classes from './Contact.module.css';
import styles from '../../Reusable.module.css';
import { FaArrowRight, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { toast } from 'react-toastify';
import { copyToClipboard } from '../util/util-functions';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import axios from 'axios';

const Contact = () => {
    const url = "https://sheldon-website-backend.netlify.app";

    const { theme } = useContext(ThemeContext);
    const initContactDetails = {
        name: "",
        email: "",
        message: ""
    }
    const [ contactDetails, setContactDetails ] = useState(initContactDetails)

    
    const copyMailHandler = async () => {
        const copiedMail = await copyToClipboard("sheldonmendoncawork123@gmail.com");
        if(copiedMail){
            toast("Copied email to your clipboard.");
        }else{
            toast("Copy here: sheldonmendoncawork123@gmail.com");
        }
    }

    const formSubmitHandler = async (event) => {
        try {
            event.preventDefault();
    
            const name = contactDetails.name;
            const email = contactDetails.email;
            const message = contactDetails.message;
            const res = await axios.post(`${url}/mail`, {
                name, email, message
            });
            
            if(res){
                toast("Mail sent successfully.");
                setContactDetails(initContactDetails);
            }else{
                throw new Error(res);
            }
            
        } catch (error) {
            toast("Sending mail failed: " + error);
            console.log(error);
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

                    <div className={classes.card}>
                        <FaFileAlt className={classes.cardIcon} />
                        <h3 className={classes.cardTitle}>Resume</h3>
                        <div className={classes.cardData}>Download my resume</div>

                        <a download={''} href='Resume_Sheldon_Mendonca.docx' className={`${classes.link} ${styles.link}`} target="_blank" rel="noopener noreferrer">
                            Download <FaArrowRight className={styles.icon}/>
                        </a>
                    </div>
                    
                </div>
            </div>

            <div className={`${classes.content}`}>
                <h3 className={`${classes.title}`}>Leave me a message.</h3>

                <form className={classes.form} method='POST' onSubmit={formSubmitHandler}>
                    <div className={classes.formDiv}>
                        <label htmlFor="name" className={`${classes.formTag} ${theme === 'darkTheme' ? classes.formTagDark : classes.formTagLight}`} required={true}>Name</label>
                        <input type="text" name="name" id="name" className={classes.formInput} placeholder='Enter your name' value={initContactDetails.name} onChange={(event)=>setContactDetails((state) => ({...state, name: event.target.value}))} />
                    </div>

                    <div className={classes.formDiv}>
                        <label htmlFor="email" className={`${classes.formTag} ${theme === 'darkTheme' ? classes.formTagDark : classes.formTagLight}`} required={true}>Email Address</label>
                        <input type="email" name="email" id="email" className={classes.formInput} placeholder='Enter your email address' value={initContactDetails.email} onChange={(event)=>setContactDetails((state) => ({...state, email: event.target.value}))} />
                    </div>

                    <div className={`${classes.formDiv} ${classes.formArea}`}>
                        <label htmlFor="text" className={`${classes.formTag} ${theme === 'darkTheme' ? classes.formTagDark : classes.formTagLight}`} required={true}>Message</label>
                        <textarea type="text" name="text" id="text" className={classes.formInput} rows={10} cols={30} placeholder="What's up?" value={initContactDetails.message} onChange={(event)=>setContactDetails((state) => ({...state, message: event.target.value}))} />
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