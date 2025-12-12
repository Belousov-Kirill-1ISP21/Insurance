import AboutBlockImg from "@shared/assets/home/AboutBlock.png";
import styles from '@shared/css/home/about-block/about-block.module.css';
import { Link } from 'react-router-dom';

export const AboutBlock = () => {
    return <div className={styles.aboutBlock}>

        <div className={styles.aboutBlockContainer}>
                
            <h1 className={styles.aboutBlockTitle}>Будьте уверенными в завтрашнем дне</h1>

            <p className={styles.aboutBlockText}>Юристы компании «Юридическое Бюро 812» уже долгие годы ведут успешную практику в предоставлении услуг 
            физическим и юридическим лицам в различных правовых сферах, решая вопросы любой сложности. </p>

            <Link to="/about-us" className={styles.aboutBlockLink}>
                <button className={styles.aboutBlockButton}>Подробнее</button>
            </Link>

        </div>

        <img src={AboutBlockImg} className={styles.aboutBlockImg}/>

    </div>
}