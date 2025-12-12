import styles from '@shared/css/about-us/about-title-block.module.css';
import aboutTitle from '@shared/assets/about-us/AboutTitle.png';

export const AboutTitleBlock = (props) => {
    return <div className={styles.aboutTitleBlock}>

        <img src={aboutTitle} className={styles.aboutTitleBlockImg}/> 
  
    </div>
}