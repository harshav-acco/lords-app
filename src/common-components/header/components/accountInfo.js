import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../contexts/AuthContext';

const AccountInfo = (props) => {
    const { forAccount } = props;
    let navigateTo = useNavigate();
    const { logout } = useAuth();

    async function handleLogout() {

        try {
            await logout()
            navigateTo("/login");
        } catch {
            console.log("Failed to log out")
        }
  }

    if (forAccount === "logout") {
        return (
            <div className='leftSpace cPointer' onClick={handleLogout}>
                <LogoutIcon style={{ color: "#e1d5b4" }} />
                <span className='standardFontSize goldFont vAlignTop'>
                    Logout
                </span>
            </div>
        );
    }

    return (
        <div className='leftSpace cPointer'>
            <SettingsIcon style={{ color: "#e1d5b4" }} />
            <span className='standardFontSize goldFont vAlignTop'>
                Account
            </span>
        </div>
    )
};

export default AccountInfo;
