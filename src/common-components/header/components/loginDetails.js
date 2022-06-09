import Styles from '../header.module.css';
import { useAuth } from '../../../contexts/AuthContext';

const LoginDetails = (props) => {
    const { currentUser } = useAuth();
    return (
        <div className={`${Styles.loginDetails} flexColumn leftSpace `}>
            <div className={Styles.loginDetails__name}>
                Logged in as {currentUser.email}
            </div>
            <div className={Styles.loginDetails__lastLogIn}>
                Last logged in: <span>03/05/2022 12:05</span>
            </div>
        </div>
    )
};

export default LoginDetails;
