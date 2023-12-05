import classes from './Home.module.css';
import styles from '../../Reusable.module.css';
import profileImg from '../../assets/software-developer2.jpg';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CgMail } from "react-icons/cg";
import { copyToClipboard } from '../util/util-functions';
import { toast } from 'react-toastify';

const Home = () => {

    const copyMailHandler = async () => {
        const copiedMail = await copyToClipboard("sheldonmendoncawork123@gmail.com");
        if(copiedMail){
            toast("Copied email to your clipboard.");
        }else{
            toast("Copy here: sheldonmendoncawork123@gmail.com");
        }
    }

    return <section className={classes.home} id='home'>
        <div className={`${classes.wrapper}`}>

            <div className={`${classes.homeContainer} ${styles.container}`}>
                <p className={`${classes.subTitle} ${classes.homeText}`}>
                    <span>Hello, </span>
                    <span className={classes.highlight}>my name is </span>
                </p>
                <h1 className={`${classes.title} ${classes.homeText} ${styles.largest}`}>
                    <span className={classes.highlight}>Sheldon </span>Mendonca</h1>

                <p className={`${classes.homeJob}`}>
                    <span className={classes.homeText}>I am a </span>
                    <span className={classes.cursive}>
                        <b>Web Developer.</b>
                    </span>
                </p>

                <div className={classes.imgWrapper}>
                    <div className={classes.banner}>
                        <img src={profileImg} alt="Sheldon Mendonca" className={classes.profileImg}/>
                    </div>

                    <img src={shapeOne} alt="" className={`${styles.shape} ${classes.shapeOne}`} />
                    <img src={shapeTwo} alt="" className={`${styles.shape} ${classes.shapeTwo}`} />
                    <img src={shapeTwo} alt="" className={`${styles.shape} ${classes.shapeThree}`} />
                </div>

                <p className={classes.homeDesc}>A full-stack web developer who likes to make web applications.</p>

                <div className={classes.socialMedia}>
                    <Link to="https://in.linkedin.com/in/sheldon-mendonca" className={classes.socialLink} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </Link>

                    <Link to="https://github.com/sheldon-mendonca-work" className={classes.socialLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </Link>

                    <span onClick={copyMailHandler} className={classes.socialLink}>
                        <CgMail />
                    </span>
                </div>

                <div className={classes.homeButtons}>
                    <Link to="https://docs.google.com/document/d/1evYwFwo_Ae9QMZdSW8Fz5E0Gst0xbUlN/edit?usp=drive_link&ouid=117650566023730412790&rtpof=true&sd=true" className={`${styles.btn} ${classes.homeText}`}>
                        Download CV
                    </Link>

                    <Link to="#skills" className={`${classes.skills} ${classes.homeText}`}>
                        My Skills
                    </Link>
                </div>
            </div>
        </div>
    </section>
};

export default Home;