import React from 'react';
import { Avatar } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import Styles from "./styles.module.css";
import Login from '../../components/login';

const Auth = (props) => {
    return (
        <div className={Styles.mainContainer}>
            <div className='alignCenter jCenter h100'>
                <div className={`${Styles.container} alignCenter jCenter flexColumn`}>
                    <Avatar className={Styles.avatar}>
                        <PeopleAltIcon className={Styles.icon} style={{ height: 80, width: 80 }} />
                    </Avatar>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Auth;
