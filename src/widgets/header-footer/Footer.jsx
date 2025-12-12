import FacebookImg from "@shared/assets/footer/Facebook.png";
import InstagramImg from "@shared/assets/footer/Instagram.png";
import TwitterImg from "@shared/assets/footer/Twitter.png";
import VkImg from "@shared/assets/footer/VK.png";
import styles from '@shared/css/general/footer.module.css';
import { Link } from 'react-router-dom';
import { scrollToElement } from "@shared/lib/utils/scrollToElement";

export const Footer = (props) => {

    return <div className={styles.footer}> 

        <div className={styles.footerImgContainer}>
            <img  src={FacebookImg} className={styles.footerImg}/>
            <img src={InstagramImg} className={styles.footerImg}/>
            <img src={TwitterImg} className={styles.footerImg}/> 
            <img src={VkImg} className={styles.footerImg}/>
        </div>

        <div className={styles.footerButtonContainer}>

            <button className={styles.footerButton}>
                <Link to="/" className={styles.footerButtonContainerLink}>Главная</Link>
            </button>

            <button className={styles.footerButton}>
                <Link to="/catalog" className={styles.footerButtonContainerLink}>Каталог</Link>
            </button>

            <button className={styles.footerButton}>
                <Link to="/about-us" className={styles.footerButtonContainerLink}>О компании</Link>
            </button>

            <button className={styles.footerButton} onClick={() => scrollToElement("header")}>Контакты</button>
        </div>

        <p className={styles.footerText}>©2025 Страхование онлайн</p>

    </div>
        
}