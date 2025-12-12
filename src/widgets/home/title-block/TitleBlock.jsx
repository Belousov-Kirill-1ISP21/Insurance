import TitleBlockImg from "@shared/assets/home/TitleBlock.png";
import ArrowImg from "@shared/assets/home/Arrow.png";
import styles from '@shared/css/home/title-block/title-block.module.css';
import { Link } from 'react-router-dom';

export const TitleBlock = () => {
    return <div className={styles.titleBlock}>
    
        <img src={TitleBlockImg} className={styles.titleBlockImg}/> 
        <div className={styles.titleBlockContainer}>

            <h1 className={styles.titleBlockTitle}>Страхование вашего имущества и здоровья</h1>
            <p className={styles.titleBlockText}>А также страхование финансов и путешествий</p>
            
            <Link to="/catalog" className={styles.titleBlockLink}>
                <button className={styles.titleBlockButton}>
                    
                    <p className={styles.titleBlockButtonText}>Застраховать</p>
                    <img src={ArrowImg} className={styles.titleBlockButtonIcon}/>
                    
                </button>
            </Link>
            

        </div>

    </div>
}