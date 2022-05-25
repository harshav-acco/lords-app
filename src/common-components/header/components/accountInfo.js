import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


const AccountInfo = (props) => {
    const { forAccount } = props;

    if (forAccount === "logout") {
        return (
            <div className='leftSpace cPointer'>
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
