import styles from '@shared/css/profile/side-panel/side-panel-line.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '@shared/store/slices/authSlice';

export const SidePanelLine = (props) => {
    const dispatch = useDispatch();
    const {sidePanelLineImg, sidePanelLineButton, isButtonLink, linkPath, isLogOut} = props
    
    const handleLogout = () => {
        dispatch(logout());
    };

    return <div className={styles.sidePanelLine}>
            <img src={sidePanelLineImg} className={styles.sidePanelLineImg}/>

            {(() => {
                if (isButtonLink) {
                    if (isLogOut) {
                        return (
                            <Link to={linkPath} className={styles.sidePanelLineButtonLink}>
                                <button className={styles.sidePanelLineButton} onClick={handleLogout}>{sidePanelLineButton}</button>
                            </Link>
                        );
                    }
                    else {
                        return (
                            <Link to={linkPath} className={styles.sidePanelLineButtonLink}>
                                <button className={styles.sidePanelLineButton}>{sidePanelLineButton}</button>
                            </Link>
                        );
                    }
                } 
                else {
                    return (
                        <div className={styles.sidePanelLineButtonContainer}>
                            <button className={styles.sidePanelLineButton}>{sidePanelLineButton}</button>
                        </div>
                    );
                }

            })()}
            
    </div>
}