import Styles from '../header.module.css';

import { getDate, getTime } from '../../../utils';

const HeaderDate = () => {
    return (
        <div className={`flexRow leftSpace ${Styles.date}`}>
            <div className={`noWrap ${Styles.date__date}`}>{getDate()}</div>
            <div className={`leftSpace ${Styles.date__time}`}>{getTime()}</div>
            <div className={`leftSpace flexRow ${Styles.date__eastern}`}>
                (&nbsp;
                    <div className={Styles.eastern__time}>+05:30</div>
                &nbsp;)
            </div>
        </div>
    )
};

export default HeaderDate;
