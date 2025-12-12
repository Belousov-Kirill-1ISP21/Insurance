import styles from '@shared/css/tariff/tariff.module.css';
import tariffImg from '@shared/assets/tariff/Tariff.png';
import { Header } from '@widgets/header-footer/Header';
import { TariffBlock } from '@features/insurance-catalog/ui/tariff-block/TariffBlock';
import { Footer } from '@widgets/header-footer/Footer';
import { SideBackground } from '@widgets/layout/SideBackground';

const tariffBlockProps = [
    {id:0, tariffBlockH1:'ОСАГО', tariffBlockImg: tariffImg, tariffBlockText: 'ОСАГО — обязательный вид страхования по закону, который обязательно требуется при покупке нового автомобиля. Благодаря ОСАГО не нужно возмещать ущерб пострадавшим в ДТП самостоятельно. Компенсация за ущерб имуществу или здоровью третьих лиц производится страховой компанией.', 
    tariffBlockPrice: 'Цена: От 2890₽'},
];

export const TariffPage = (props) => {

    return <div className={styles.wrapper}>

        <div className={styles.sideBackgroundContainer}>
            <SideBackground isDark={false}/>
        </div>

        <div className={styles.main}>
            <Header/>

            <div className={styles.tariffBlockContainer}>
                {tariffBlockProps.map((tariffBlockInfo,key) => <TariffBlock 
                                                            key={key}
                                                            tariffBlockH1={tariffBlockInfo.tariffBlockH1} 
                                                            tariffBlockImg={tariffBlockInfo.tariffBlockImg}
                                                            tariffBlockText={tariffBlockInfo.tariffBlockText}
                                                            tariffBlockPrice={tariffBlockInfo.tariffBlockPrice}
                                                        />)}
            </div>

            <Footer/>
        </div>

    </div>
}