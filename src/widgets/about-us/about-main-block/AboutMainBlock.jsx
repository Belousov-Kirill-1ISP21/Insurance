import styles from '@shared/css/about-us/about-main-block/about-main-block.module.css';
import { AboutBlock } from './AboutBlock';
import aboutBlock1Img from "@shared/assets/about-us/AboutBlock1.png";
import aboutBlock2Img from "@shared/assets/about-us/AboutBlock2.png";
import aboutBlock3Img from "@shared/assets/about-us/AboutBlock3.png";

const aboutBlockProps = [
    {id:0, aboutBlockH1:'Надёжность', aboutBlockText: 'Нашу надежность и финансовую устойчивость подтверждают рейтинги ведущих рейтинговых агентств: ruАAA по шкале «Эксперт РА», ААА |ru| по шкале «Национального Рейтингового Агентства» и AAA.ru по шкале «Национальные Кредитные Рейтинги» (НКР).',
    aboutBlockImg: aboutBlock1Img, isImgLeft: false},
    {id:1, aboutBlockH1:'Забота о клиентах', aboutBlockText: 'Наша работа – ежедневная забота о вас, наших клиентах! Развиваем дистанционные каналы, чтобы вам было удобнее с нами. Работаем над тем, чтобы наши продукты создавали для вас чувство уверенности. Оперативно отвечаем во всех каналах коммуникации.',
    aboutBlockImg: aboutBlock2Img, isImgLeft: true},
    {id:2, aboutBlockH1:'Лицензии', aboutBlockText: 'В соответствии с Лицензиями, выданными Банком России 25.05.2015 без ограничения срока их действия, СИ № 1307, СЛ №1307, ОС №1307-03, ОС №1307-04, ОС №1307-05, ПС №1307, Компания имеет разрешение на осуществление практически всех видов страхования и перестрахования, разрешенные законодательством РФ',
    aboutBlockImg: aboutBlock3Img, isImgLeft: false},
];

export const AboutMainBlock = (props) => {
    
    return <div className={styles.aboutMainBlock}>

        <div className={styles.aboutMainBlockH1Container}>
            <h1 className={styles.aboutMainBlockH1}>О нашей компании</h1>
        </div>

        <div className={styles.aboutMainBlockBlockContainer}>
            {aboutBlockProps.map((aboutBlockInfo,key) => <AboutBlock 
                                                key={key}
                                                aboutBlockH1={aboutBlockInfo.aboutBlockH1} 
                                                aboutBlockText={aboutBlockInfo.aboutBlockText}
                                                aboutBlockImg={aboutBlockInfo.aboutBlockImg} 
                                                isImgLeft={aboutBlockInfo.isImgLeft}
                                            />)}
        </div>

    </div>
}