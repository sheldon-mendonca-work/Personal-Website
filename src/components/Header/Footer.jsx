import classes from './Footer.module.css';
import styles from '../../Reusable.module.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
    
    const copyMailHandler = async () => {
        const copiedMail = await copyToClipboard("sheldonmendoncawork123@gmail.com");
        if(copiedMail){
            toast("Copied email to your clipboard.");
        }else{
            toast("Copy here: sheldonmendoncawork123@gmail.com");
        }
    }

    return <footer className={classes.footer}>
        <div className={`${styles.container} ${classes.container}`}>
            <h1 className={classes.title}>Sheldon Mendonca</h1>

            <ul className={classes.list}>
                <li>
                    <a href='#home' className={classes.link}>Home</a>
                </li>

                <li>
                    <a href='#works' className={classes.link}>Works</a>
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
                    <Link to="https://in.linkedin.com/in/sheldon-mendonca" target="_blank" rel="noopener noreferrer" className={classes.socialLink}>
                        <FaLinkedin />
                    </Link>

                    <Link to="https://github.com/sheldon-mendonca-work" target="_blank" rel="noopener noreferrer" className={classes.socialLink} >
                        <FaGithub />
                    </Link>

                    <div onClick={()=>copyMailHandler} className={classes.socialLink}>
                        <CgMail />
                    </div>
                </div>
        </div>

    </footer>
};

export default Footer;