import classes from './Footer.module.css';
import styles from '../../Reusable.module.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return <footer className={classes.footer}>
        <div className={`${styles.container} ${classes.container}`}>
            <h1 className={classes.title}>Sheldon Mendonca</h1>

            <ul className={classes.list}>
                <li>
                    <a href='#home' className={classes.link}>Home</a>
                </li>

                <li>
                    <a href='#skills' className={classes.link}>Skills</a>
                </li>
                

                <li>
                    <a href='#portfolio' className={classes.link}>Portfolio</a>
                </li>
                

                <li>
                    <a href='#qualifications' className={classes.link}>Qualifications</a>
                </li>
                

                <li>
                    <a href='#contact' className={classes.link}>Contact</a>
                </li>
            </ul>

            <div className={classes.social}>
                    <Link to="#" className={classes.socialLink} target='_blank'>
                        <FaLinkedin />
                    </Link>

                    <Link to="#" className={classes.socialLink} target='_blank'>
                        <FaGithub />
                    </Link>

                    <div to="#" className={classes.socialLink}>
                        <FaGithub />
                    </div>
                    <div to="#" className={classes.socialLink}>
                        <FaGithub />
                    </div>
                </div>
        </div>

    </footer>
};

export default Footer;