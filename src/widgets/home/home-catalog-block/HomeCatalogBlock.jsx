import styles from '@shared/css/home/catalog-block/catalog-block.module.css';
import { HomeCatalogCard } from './HomeCatalogCard';

const homeCatalogCardProps = [
    {id:0, homeCatalogCardH1:'Страхование жизни', homeCatalogCardText: '2890 ₽'},
    {id:1, homeCatalogCardH1:'Страхование здоровья', homeCatalogCardText: '2890 ₽'},
    {id:2, homeCatalogCardH1:'Страхование имущества', homeCatalogCardText: '2890 ₽'},
    {id:3, homeCatalogCardH1:'Страхование финансов', homeCatalogCardText: '2890 ₽'},
    {id:4, homeCatalogCardH1:'Страхование авто', homeCatalogCardText: '2890 ₽'},
    {id:5, homeCatalogCardH1:'Страхование путешествий', homeCatalogCardText: '2890 ₽'},
];

export const HomeCatalogBlock = (props) => {
    return <div className={styles.homeCatalogBlock}>

        <div className={styles.homeCatalogBlockHead}>
            <h1 className={styles.homeCatalogBlockHeadH1}>Выберите продукт</h1>
            <p className={styles.homeCatalogBlockHeadText}>Подберите страховой продукт, который наилучшим образом подойдёт именно Вам</p>
        </div>

        <div className={styles.homeCatalogBlockContainer}>

            {homeCatalogCardProps.map((homeCatalogCardInfo,key) => <HomeCatalogCard 
                                                    key={key}
                                                    homeCatalogCardH1={homeCatalogCardInfo.homeCatalogCardH1} 
                                                    homeCatalogCardText={homeCatalogCardInfo.homeCatalogCardText}
                                                />)}

        </div>
        
    </div>
}