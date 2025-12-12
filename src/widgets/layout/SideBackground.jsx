import styles from '@shared/css/general/side-background.module.css';

export const SideBackground = (props) => {
    const {isDark} = props;

    return <div className={styles.sideBackground}>

            {(() => {
                if (isDark) {
                    return (
                        <img className={styles.sideDarkBackgroundImg}/>
                    );
                } 
                else {
                    return (
                        <img className={styles.sideBackgroundImg}/>
                    );
                }
            })()}
        
    </div>
}