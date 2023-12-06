import classes from './Works.module.css';
import styles from '../../Reusable.module.css';
import { services } from '../Data/Data';
import { FaArrowRight, FaRegCheckCircle } from 'react-icons/fa';
import { FaRegCircleXmark } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Works.css';
import shape2 from '../../assets/shape-2.png';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Works = () => {

    const [ toggleIndex, setToggleIndex ] = useState(0);
    const { theme } = useContext(ThemeContext);


    return <section className={`${classes.works} ${styles.section}`} id='works'>
            
        <h2 className={`${styles.title}`} >
            Works
        </h2> 

        <p className={`${styles.subTitle}`}>
            My <span>Works.</span>
        </p>            
        <Swiper
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
         className={`${classes.worksContainer} ${styles.container} mySwiper`}>
            {
                services.map((item, index) => (
                    <SwiperSlide key={item.id} className={`${classes.item} ${styles.card} ${styles.cardOne}`}>
                        <span className={`${classes.subTitle} ${styles.textCs}`}>{item.name}</span>
                        
                        <h3 className={`${classes.title}`}>{item.title}</h3>
                        <p className={`${classes.description}`}>{item.description}</p>

                        <span onClick={()=>setToggleIndex(index+1)} className={`${styles.link}`}>
                            See More<FaArrowRight className={styles.icon}/>
                        </span>
                        <img src={shape2} alt="" className={`${theme === 'lightTheme' ? styles.shapeLight : styles.shape} ${styles.cShape}`} />
                    </SwiperSlide>   
                ))
            }
        </Swiper>
        <div className={`${classes.modal} ${toggleIndex > 0 ? classes.activeModal : ""}`} onClick={()=>setToggleIndex(0)}>
            <div className={`${classes.modalContent}`} onClick={(event)=>{event.stopPropagation()}}>
                <FaRegCircleXmark className={classes.modalClose} onClick={(event)=>{event.stopPropagation(); setToggleIndex(0);}}/>
                {toggleIndex > 0 && 
                <>
                    <h3 className={classes.modalTitle}>{services[toggleIndex-1].modalTitle}</h3>
                    <p className={classes.modalDescription}>{services[toggleIndex-1].modalDescription}</p>
                    <ul className={`${classes.modalServices} ${classes.grid}`}>
                        {services[toggleIndex-1].modalService.map((item, listIndex) => (
                            <li className={classes.modalService} key={item+listIndex}>
                                <FaRegCheckCircle className={classes.modalIcon} />
                                <p className={classes.modalInfo}>{item}</p>
                            </li>
                        ))}
                        
                    </ul>
                </>}
            </div>
        </div>
    </section>
};

export default Works;
