import styles from '@shared/css/authentication/sign-in/sign-in.module.css';
import { AuthHeader } from '@features/auth/ui/auth-header/AuthHeader';
import { SignInForm } from '@features/auth/ui/sign-in-form/SignInForm';
import { SideBackground } from '@widgets/layout/SideBackground';

export const SignInPage = (props) => {

    return <div className={styles.wrapper}>

        <div className={styles.main}>
            <AuthHeader isSignUp={false}/>
            <SignInForm/>
        </div>
        <div className={styles.sideBackgroundContainer}>
            <SideBackground isDark={true}/>
        </div>

    </div>
}