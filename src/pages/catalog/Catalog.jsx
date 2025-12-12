import styles from '@shared/css/catalog/catalog.module.css';
import { Header } from '@widgets/header-footer/Header';
import { CatalogBlock } from '@features/insurance-catalog/ui/catalog-block/CatalogBlock';
import { Footer } from '@widgets/header-footer/Footer';
import { SideBackground } from '@widgets/layout/SideBackground';

export const CatalogPage = (props) => {

    return <div className={styles.wrapper}>

        <div className={styles.sideBackgroundContainer}>
            <SideBackground isDark={false}/>
        </div>
        <div className={styles.main}>
            <Header/>
            <CatalogBlock/>
            <Footer/>
        </div>

    </div>
}