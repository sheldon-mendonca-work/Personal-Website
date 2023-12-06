import classes from './Header.module.css';
import styles from '../../Reusable.module.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa";
import { links } from '../Data/Data';
import { BsSun, BsMoon } from 'react-icons/bs';
import { copyToClipboard } from '../util/util-functions';
import { toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
    const [ showMenu, setShowMenu ] = useState(false);
    const [ scrollNav, setScrollNav ] = useState(false);
    const { theme, modifyTheme } = useContext(ThemeContext);

    const copyMailHandler = async () => {
        const copiedMail = await copyToClipboard("sheldonmendoncawork123@gmail.com");
        if(copiedMail){
            toast("Copied email to your clipboard.");
        }else{
            toast("Copy here: sheldonmendoncawork123@gmail.com");
        }
    }

    const changeNav = () => {
        if(window.scrollY > 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, [])

    return <header className={`${classes.header} ${scrollNav ? classes.darkScroll: ""}`}>
        <nav className={classes.nav}>
            <div onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} className={`${classes.logo} ${styles.textCs}`}>Sheldon</div>


            <div className={`${classes.menu} ${ showMenu ? classes.showMenu : ""}`}>
                <div className={classes.data}>

                    <ul className={classes.list}>
                        {links.map((item) => (
                            <li className={classes.item} key={item.name}>
                                <a href={`#${item.path}`} className={`${classes.link} ${styles.textCs}`}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className={classes.socialMedia}>
                        <Link to="https://in.linkedin.com/in/sheldon-mendonca" className={classes.socialLink} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </Link>

                        <Link to="https://github.com/sheldon-mendonca-work" className={classes.socialLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </Link>

                        <span onClick={copyMailHandler} className={classes.socialLink}>
                            <FaRegEnvelope />
                        </span>
                    </div>

                </div>
            </div>
            
            <div className={classes.btns} >
                <div className={classes.themeToggle} onClick={modifyTheme}>
                    {theme === 'lightTheme' ? <BsMoon /> : <BsSun />}
                </div>

                <div className={`${classes.toggle} ${showMenu ? classes.animateToggle: ""}`} onClick={()=>setShowMenu(!showMenu)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>
};

export default Header;