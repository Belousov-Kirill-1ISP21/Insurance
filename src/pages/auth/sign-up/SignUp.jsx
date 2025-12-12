import styles from '@shared/css/authentication/sign-up/sign-up.module.css';
import { AuthHeader } from '@features/auth/ui/auth-header/AuthHeader';
import { SignUpForm } from '@features/auth/ui/sign-up-form/SignUpForm';
import { SideBackground } from '@widgets/layout/SideBackground';

export const SignUpPage = (props) => {

    return <div className={styles.wrapper}>
        
        <div className={styles.main}>
            <AuthHeader isSignUp={true}/>
            <SignUpForm/>
        </div>
        <div className={styles.sideBackgroundContainer}>
            <SideBackground isDark={true}/>
        </div>

    </div>
}