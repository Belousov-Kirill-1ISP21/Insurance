import styles from '@shared/css/profile/main-panel/main-panel.module.css';
import { MainPanelLine } from './MainPanelLine';

export const MainPanel = (props) => {
    const { mainPanelHeadH1, mainPanelHeadText, profileData } = props
    
    const mainPanelLineProps = [
        {id:0, mainPanelLineH1:'Имя', mainPanelLineText: profileData?.name || 'Не указано'},
        {id:1, mainPanelLineH1:'Email', mainPanelLineText: profileData?.email || 'Не указан'},
        {id:2, mainPanelLineH1:'Телефон', mainPanelLineText: profileData?.phone || 'Не указан'},
        {id:3, mainPanelLineH1:'Имя пользователя', mainPanelLineText: profileData?.username || 'Не указано'},
    ];

    return <div className={styles.mainPanel}>
        
        <div className={styles.mainPanelHead}>
            <h1 className={styles.mainPanelHeadH1}>{mainPanelHeadH1}</h1>
            <p className={styles.mainPanelHeadText}>{mainPanelHeadText}</p>
        </div>

        <div className={styles.mainPanelContainer}>

            {mainPanelLineProps.map((mainPanelInfo,key) => <MainPanelLine 
                                                    key={key}
                                                    mainPanelLineH1={mainPanelInfo.mainPanelLineH1} 
                                                    mainPanelLineText={mainPanelInfo.mainPanelLineText}
                                                />)}
            
        </div>

        <div className={styles.mainPanelButtonContainer}>
            <button className={styles.mainPanelButton}>Сохранить изменения</button>
        </div>
            
    </div>
}