import classes from './Portfolio.module.css';
import styles from '../../Reusable.module.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import shape2 from '../../assets/shape-2.png';
import {motion} from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Works/Works.css';

const Items = ({workItems}) => {
    const { theme } = useContext(ThemeContext);

    return <Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      440: {
      slidesPerView: 1,
      spaceBetween: 30,
      },
      768: {
      slidesPerView: 2,
      spaceBetween: 30,
      },
      1200: {
      slidesPerView: 3,
      spaceBetween: 40,
      },
    }}
    modules={[Pagination]}
    className={`${classes.swipeContainer} mySwiper`}>
        {
            workItems.map((item, index) => (
                <motion.div
                layout
                animate={{opacity: 1}}
                initial={{opacity: 0.6}}
                exit={{opacity: 0.6}}
                transition={{duration: 0.4}}
                className={`${classes.items} ${styles.card} ${styles.cardTwo}`} key={item.id}>

                    <SwiperSlide className={classes.swipeSlider} key={item.id}>
                        <div className={`${classes.imgWrapper}`}>
                            <img src={item.img} alt="" className={`${classes.img}`} />
                        </div>

                        <span className={`${classes.category} ${styles.textCs}`}>{item.category}</span>
                        <h3 className={`${classes.cardTitle}`}>{item.title}</h3>
                        <p className={`${classes.description}`}>{item.description}</p>
                        
                        <Link to={item.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                            Visit site <FaArrowRight className={styles.icon}/>
                        </Link>

                        <img src={shape2} alt="" className={`${theme === 'lightTheme' ? styles.shapeLight : styles.shape} ${styles.cShape}`} />
                    </SwiperSlide>
                </motion.div>
            ))
        }
    </Swiper>
};

export default Items;