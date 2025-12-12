import styles from '@shared/css/home/why-us-block/why-us-block.module.css';
import { WhyUsBlockCard } from './WhyUsBlockCard';

const WHY_US_CARD_PROPS = [
    {id:0, title:'Помощь при ДТП', description: 'Если у вас случилось ДТП - просто позвоните нам и мы подскажем порядок действий'},
    {id:1, title:'Юридическое сопровождение', description: 'Представительство в суде, юридические консультации даже по сымым сложным вопросам'},
    {id:2, title:'Скидки постоянным клиентам', description: 'Накопительная система скидок. Получите выгоду до 80%'},
    {id:3, title:'Доставка полиса на дом', description: 'Доставим полис на дом в любое удобное для вас время'}
];

export const WhyUsBlock = () => {
    return  <div className={styles.whyUsBlock}>
        
        <div className={styles.whyUsBlockHeader}>
            <h1 className={styles.whyUsBlockTitle}>Почему доверяют</h1>
            <p className={styles.whyUsBlockText}>Более</p> 
            <p className={styles.whyUsBlockHighlight}>10 000</p> 
            <p className={styles.whyUsBlockText}>клиентов доверили нашему агентству страхование транспортных средств</p>
        </div>

        <div className={styles.whyUsBlockContainer}>

            {WHY_US_CARD_PROPS.map((cardInfo, key) => <WhyUsBlockCard 
                                                    key={key}
                                                    title={cardInfo.title}
                                                    description={cardInfo.description}
                                                />)}

        </div>
    </div>

}