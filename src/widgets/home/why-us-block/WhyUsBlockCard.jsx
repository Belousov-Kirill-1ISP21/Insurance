import ProcentImg from "@shared/assets/home/Procent.png";
import styles from '@shared/css/home/why-us-block/why-us-block-card.module.css';

export const WhyUsBlockCard = (props) => {
    const {title, description} = props
    return <div className={styles.whyUsBlockCard}>

        <img src={ProcentImg} className={styles.whyUsBlockCardImg}/> 
        <h2 className={styles.whyUsBlockCardTitle}>{title}</h2>
        <p className={styles.whyUsBlockCardDescription}>{description}</p>

    </div>
}