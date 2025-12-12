import styles from '@shared/css/home/home.module.css';
import { Header } from '@widgets/header-footer/Header';
import { TitleBlock } from '@widgets/home/title-block/TitleBlock';
import { AboutBlock } from '@widgets/home/about-block/AboutBlock';
import { HomeCatalogBlock } from '@widgets/home/home-catalog-block/HomeCatalogBlock';
import { WhyUsBlock } from '@widgets/home/why-us-block/WhyUsBlock';
import { Footer } from '@widgets/header-footer/Footer';

export const HomePage = (props) => {

    return <div className={styles.wrapper}>
        
        <Header/>
        <TitleBlock/>
        <AboutBlock/>
        <HomeCatalogBlock/>
        <WhyUsBlock/>
        <Footer/>
  
    </div>
}