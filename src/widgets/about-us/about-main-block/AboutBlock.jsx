import styles from '@shared/css/about-us/about-main-block/about-block.module.css';

export const AboutBlock = (props) => {

    const {aboutBlockH1, aboutBlockText, aboutBlockImg, isImgLeft} = props;
    return <div className={styles.aboutBlock}>

        {(() => {
                if (isImgLeft) {
                    return (
                        <div className={styles.aboutBlockContainer}>
                            <div className={styles.aboutBlockImgContainer}>
                                <img src={aboutBlockImg} className={styles.aboutBlockImg}/> 
                            </div>
                            <div className={styles.aboutBlockRightTextContainer}>
                                <h1 className={styles.aboutBlockRightH1}>{aboutBlockH1}</h1>
                                <p className={styles.aboutBlockRightText}>{aboutBlockText}</p>
                            </div>
                        </div>
                        
                    );
                } 
                else {
                    return (
                        <div className={styles.aboutBlockContainer}>
                            <div className={styles.aboutBlockTextContainer}>
                                <h1 className={styles.aboutBlockH1}>{aboutBlockH1}</h1>
                                <p className={styles.aboutBlockText}>{aboutBlockText}</p>
                            </div>
                            <div className={styles.aboutBlockImgContainer}>
                                <img src={aboutBlockImg} className={styles.aboutBlockImg}/> 
                            </div>
                        </div>
                    );
                }
            })()}
        
    </div>
}