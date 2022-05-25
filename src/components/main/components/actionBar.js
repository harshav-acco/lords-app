import Styles from "../main.module.css";

const ActionBar = (props) => {
    return (
        <div className={`w100 ${Styles.action}`}>
            <div 
                className=
                {
                    `w100 alignCenter whiteFont textBold jCenter ${Styles.action__credit}`
                }
            >
                Available Credit: 3.17
            </div>
        </div>
    )
};

export default ActionBar;
