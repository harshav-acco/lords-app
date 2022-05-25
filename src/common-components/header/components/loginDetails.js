import Styles from '../header.module.css';

const LoginDetails = (props) => {
    return (
        <div className={`${Styles.loginDetails} flexColumn leftSpace `}>
            <div className={Styles.loginDetails__name}>
                Logged in as ruparel22
            </div>
            <div className={Styles.loginDetails__lastLogIn}>
                Last logged in: <span>03/05/2022 12:05</span>
            </div>
        </div>
    )
};

export default LoginDetails;
