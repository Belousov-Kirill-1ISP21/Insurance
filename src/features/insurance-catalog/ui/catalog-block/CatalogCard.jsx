import styles from '@shared/css/catalog/catalog-block/catalog-card.module.css';
import { Link } from 'react-router-dom';

export const CatalogCard = (props) => {
    const {catalogCardH1, catalogCardText, catalogCardImg} = props
    return <div className={styles.catalogCard}>

        <div className={styles.catalogCardImgContainer}>
            <img src={catalogCardImg} className={styles.catalogCardImg}/> 
        </div>
        <div className={styles.catalogCardInfoContainer}>
            <h1 className={styles.catalogCardH1}>{catalogCardH1}</h1>
            <p className={styles.catalogCardText}>от {catalogCardText}</p>
            <Link to="/tariff" className={styles.catalogCardLink}>
                <button className={styles.catalogCardButton}>Заказать</button>
            </Link>
        </div>
        
    </div>
}