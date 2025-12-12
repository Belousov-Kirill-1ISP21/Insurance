import styles from '@shared/css/profile/main-panel/main-panel-line.module.css';

export const MainPanelLine = (props) => {
    const {mainPanelLineH1, mainPanelLineText} = props
    return <div className={styles.mainPanelLine}>
        <h1 className={styles.mainPanelLineH1}>{mainPanelLineH1}</h1>
        <p className={styles.mainPanelLineText}>{mainPanelLineText}</p>     
    </div>
}