import styles from '@shared/css/general/auth-header.module.css';
import { Link } from 'react-router-dom';

export const AuthHeader = (props) => {
    const { isSignUp } = props;

    return <div className={styles.authHeader}>

        <div className={styles.authHeaderContainer}>   

            <Link to="/" className={styles.authHeaderLogoButtonLink}>
                <button className={styles.authHeaderLogoButton}>Главная</button>
            </Link>
        
            {(() => {
                if (isSignUp) {
                    return (
                        <Link to="/sign-in" className={styles.authHeaderRightLink}>
                            <button className={styles.authHeaderRightButton}>Авторизация</button>
                        </Link>
                    );
                } 
                else {
                    return (
                        <>
                            <Link to="/sign-up" className={styles.authHeaderRightLink}>
                                <button className={styles.authHeaderRightButton}>Регистрация</button>
                            </Link> 
                        </>
                    );
                }
            })()}
            
        </div>
        
    </div>
}