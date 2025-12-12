import styles from '@shared/css/tariff/tariff-block.module.css';
import { Link } from 'react-router-dom';

export const TariffBlock = (props) => {
    const {tariffBlockH1, tariffBlockImg, tariffBlockText, tariffBlockPrice } = props
    return <div className={styles.tariffBlock}>

        <div className={styles.tariffBlockH1Container}>
            <h1 className={styles.tariffBlockH1}>{tariffBlockH1}</h1>
        </div>

        <div className={styles.tariffBlockInfoContainer}>
            <div className={styles.tariffBlockInfoImgContainer}>
                <img src={tariffBlockImg} className={styles.tariffBlockImg}/> 
            </div>
            <div className={styles.tariffBlockInfoTextContainer}>
                <p className={styles.tariffBlockText}>{tariffBlockText}</p>
                <p className={styles.tariffBlockPrice}>{tariffBlockPrice}</p> <p className={styles.tariffBlockText}>в зависимости от условий.</p>
            </div>
        </div>
        
        <div className={styles.tariffBlockButtonContainer}>
            <Link to="/order" className={styles.tariffBlockLink}>
                <button className={styles.tariffBlockButton}>Расчитать цену</button>
            </Link>
        </div>
        
    </div>

}