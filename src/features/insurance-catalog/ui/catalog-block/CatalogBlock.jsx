import styles from '@shared/css/catalog/catalog-block/catalog-block.module.css';
import catalogCardImg from "@shared/assets/catalog/CatalogCard.png";
import { CatalogCard } from './CatalogCard';

const catalogCardProps = [
    {id:0, catalogCardH1:'Страховой тариф', catalogCardText: '2890 ₽', catalogCardImg},
    {id:1, catalogCardH1:'Страховой тариф', catalogCardText: '2890 ₽', catalogCardImg},
    {id:2, catalogCardH1:'Страховой тариф', catalogCardText: '2890 ₽', catalogCardImg},
    {id:3, catalogCardH1:'Страховой тариф', catalogCardText: '2890 ₽', catalogCardImg},
    {id:4, catalogCardH1:'Страховой тариф', catalogCardText: '2890 ₽', catalogCardImg},
    {id:5, catalogCardH1:'Страховой тариф', catalogCardText: '2890 ₽', catalogCardImg},
    {id:6, catalogCardH1:'Страховой тариф', catalogCardText: '2890 ₽', catalogCardImg},
    {id:7, catalogCardH1:'Страховой тариф', catalogCardText: '2890 ₽', catalogCardImg},
];

export const CatalogBlock = (props) => {
    return <div className={styles.catalogBlock}>


            <div className={styles.catalogBlockH1Container}>
                <h1 className={styles.catalogBlockH1}>Страхование здоровья</h1>
            </div>

            <div className={styles.catalogBlockContainer}>

                {catalogCardProps.map((catalogCardInfo,key) => <CatalogCard 
                                                    key={key}
                                                    catalogCardH1={catalogCardInfo.catalogCardH1} 
                                                    catalogCardText={catalogCardInfo.catalogCardText}
                                                    catalogCardImg={catalogCardInfo.catalogCardImg}
                                                />)}

            </div>
        
    </div>
}