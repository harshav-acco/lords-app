import React from 'react';
import { Avatar } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import Styles from "./styles.module.css";
import Signup from '../../components/signup';

const Auth = (props) => {
    return (
        <div className={Styles.mainContainer}>
            <div className='alignCenter jCenter h100'>
                <div className={`${Styles.container} alignCenter jCenter flexColumn`}>
                    <Avatar className={Styles.avatar}>
                        <PeopleAltIcon className={Styles.icon} style={{ height: 80, width: 80 }} />
                    </Avatar>
                    <Signup />
                </div>
            </div>
        </div>
    )
}

export default Auth;
