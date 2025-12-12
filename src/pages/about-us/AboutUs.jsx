import styles from '@shared/css/about-us/about-us.module.css';
import { Header } from '@widgets/header-footer/Header';
import { AboutTitleBlock } from '@widgets/about-us/about-title-block/AboutTitleBlock';
import { AboutMainBlock } from '@widgets/about-us/about-main-block/AboutMainBlock';
import { Footer } from '@widgets/header-footer/Footer';

export const AboutUsPage = (props) => {

    return <div className={styles.wrapper}>

        <Header/>
        <AboutTitleBlock/>
        <AboutMainBlock/>
        <Footer/>

    </div>
}