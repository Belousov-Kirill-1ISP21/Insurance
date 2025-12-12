import styles from '@shared/css/profile/side-panel/side-panel.module.css';
import Profile from '@shared/assets/profile/Profile.png';
import Tarifs from '@shared/assets/profile/Tarifs.png';
import Settings from '@shared/assets/profile/Settings.png';
import Notifications from '@shared/assets/profile/Notifications.png';
import Back from '@shared/assets/profile/Back.png';
import Exit from '@shared/assets/profile/Exit.png';
import { SidePanelLine } from './SidePanelLine';

const sidePanelLineProps = [
    {id:0, sidePanelLineImg: Profile, sidePanelLineButton:'Профиль', isButtonLink: false, linkPath: null, isLogOut: false},
    {id:1, sidePanelLineImg: Tarifs, sidePanelLineButton:'Мои тарифы', isButtonLink: false, linkPath: null, isLogOut: false},
    {id:2, sidePanelLineImg: Settings, sidePanelLineButton:'Настройки', isButtonLink: false, linkPath: null, isLogOut: false},
    {id:3, sidePanelLineImg: Notifications, sidePanelLineButton:'Уведомления', isButtonLink: false, linkPath: null, isLogOut: false},
    {id:4, sidePanelLineImg: Back, sidePanelLineButton:'На главную', isButtonLink: true, linkPath: "/", isLogOut: false},
    {id:5, sidePanelLineImg: Exit, sidePanelLineButton:'Выход', isButtonLink: true, linkPath: "/sign-in", isLogOut: true},
];

export const SidePanel = (props) => {
    const {sidePanelHeadH1, sidePanelHeadText} = props
    return <div className={styles.sidePanel}>

        <div className={styles.sidePanelHead}>
            <h1 className={styles.sidePanelHeadH1}>{sidePanelHeadH1}</h1>
            <p className={styles.sidePanelHeadText}>{sidePanelHeadText}</p>
        </div>

        <div className={styles.sidePanelContainer}>

            {sidePanelLineProps.map((sidePanelInfo,key) => <SidePanelLine 
                                                    key={key}
                                                    sidePanelLineImg={sidePanelInfo.sidePanelLineImg} 
                                                    sidePanelLineButton={sidePanelInfo.sidePanelLineButton}
                                                    isButtonLink={sidePanelInfo.isButtonLink} 
                                                    linkPath={sidePanelInfo.linkPath}
                                                    isLogOut={sidePanelInfo.isLogOut}
                                                />)}

        </div>

        
    </div>
}