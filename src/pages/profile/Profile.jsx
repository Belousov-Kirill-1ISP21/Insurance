import styles from '@shared/css/profile/profile.module.css';
import { SidePanel } from '@features/user-profile/ui/side-panel/SidePanel';
import { MainPanel } from '@features/user-profile/ui/main-panel/MainPanel';
import { useSelector } from 'react-redux';

const sidePanelProps = [
    {id:0, sidePanelHeadH1:'Фамилия имя', sidePanelHeadText: 'yourname@gmail.com'},
];

const mainPanelProps = [
    {id:0, mainPanelHeadH1:'Личная информация', mainPanelHeadText: 'Основная информация о вашем профиле'},
];

export const ProfilePage = (props) => {
    const { user } = useSelector(state => state.auth);

    const updatedSidePanelProps = [
        {id:0, 
         sidePanelHeadH1: user?.name || 'Пользователь', 
         sidePanelHeadText: user?.email || 'email@example.com'
        },
    ];

    const updatedMainPanelProps = [
        {id:0, 
         mainPanelHeadH1: user?.name || 'Пользователь', 
         mainPanelHeadText: user?.email || 'Основная информация',
         profileData: user
        },
    ];

    return <div className={styles.wrapper}>

        <div className={styles.panelsContainer}>

            <div className={styles.sidePanelContainer}>

                {updatedSidePanelProps.map((sidePanelInfo,key) => <SidePanel 
                                                    key={key}
                                                    sidePanelHeadH1={sidePanelInfo.sidePanelHeadH1} 
                                                    sidePanelHeadText={sidePanelInfo.sidePanelHeadText}
                                                />)}

            </div>

            <div className={styles.mainPanelContainer}>

                {updatedMainPanelProps.map((mainPanelInfo,key) => <MainPanel 
                                                    key={key}
                                                    mainPanelHeadH1={mainPanelInfo.mainPanelHeadH1} 
                                                    mainPanelHeadText={mainPanelInfo.mainPanelHeadText}
                                                    profileData={mainPanelInfo.profileData}
                                                />)}

            </div>

        </div>

    </div>
}