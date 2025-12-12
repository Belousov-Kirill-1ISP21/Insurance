import styles from '@shared/css/home/catalog-block/catalog-card.module.css';
import { Link } from 'react-router-dom';

export const HomeCatalogCard = (props) => {
    const {homeCatalogCardH1, homeCatalogCardText} = props
    return <div className={styles.homeCatalogCard}>

        <div className={styles.homeCatalogCardContainer}>
            <h1 className={styles.homeCatalogCardH1}>{homeCatalogCardH1}</h1>
        </div>
        <div className={styles.homeCatalogCardContainer}>
            <p className={styles.homeCatalogCardText}>от </p> <p className={styles.homeCatalogCardTextInText}>{homeCatalogCardText}</p>
        </div> 
        <div className={styles.homeCatalogCardContainer}>
            <Link to="/catalog" className={styles.homeCatalogCardContainerLink}>
                <button className={styles.homeCatalogCardButton}>Заказать</button>
            </Link>
        </div>

    </div>
}