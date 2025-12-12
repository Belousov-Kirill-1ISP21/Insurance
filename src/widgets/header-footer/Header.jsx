import styles from '@shared/css/general/header.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@shared/store/slices/authSlice';
import { fetchPolicies } from '@shared/store/slices/policiesSlice';

export const Header = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const handleLogout = () => {
        dispatch(logout());
    };

    const handlePrefetchPolicies = () => {
        dispatch(fetchPolicies());
    };

    return (
        <div className={styles.header} id="header">
        
        <div className={styles.headerLeft}>
            
            <button className={styles.headerLogoButton}>
                <Link to="/" className={styles.headerLeftLink}>Страхование онлайн</Link>
            </button>
            
            <div className={styles.headerLeftButtonContainer}>
            
                <button className={styles.headerLeftButton}>
                    <Link 
                        to="/admin" 
                        className={styles.headerLeftButtonContainerLink}
                        onMouseEnter={handlePrefetchPolicies} 
                    >
                        Админ панель
                    </Link>
                </button>

                <button className={styles.headerLeftButton}>
                    <Link 
                        to="/catalog" 
                        className={styles.headerLeftButtonContainerLink}
                        onMouseEnter={handlePrefetchPolicies} 
                    >
                        Каталог
                    </Link>
                </button>
           
                <button className={styles.headerLeftButton}>
                    <Link to="/about-us" className={styles.headerLeftButtonContainerLink}>
                        О компании
                    </Link>
                </button>
                
                <button className={styles.headerLeftContactButton}>
                    <p className={styles.headerLeftContactButtonText}>Контакты: </p> 
                    <p className={styles.headerLeftContactButtonTextInText}>+7 495 123-45-67</p> 
                </button>
            </div>
        </div>

        <div className={styles.headerRight}>
                {isAuthenticated ? (
                    <>
                        <Link to="/profile" className={styles.headerRightLink}>
                            <button className={styles.headerRightButton}>Личный кабинет</button>
                        </Link>
                        <button className={styles.headerRightButton} onClick={handleLogout}>
                            Выйти
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/sign-up" className={styles.headerRightLink}>
                            <button className={styles.headerRightButton}>Регистрация</button>
                        </Link>
                        <Link to="/sign-in" className={styles.headerRightLink}>
                            <button className={styles.headerRightButton}>Авторизация</button>
                        </Link>
                    </>
                )}
        </div>
        
    </div>
    )
}