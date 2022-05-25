import HeaderDate from "./components/date";
import SearchComp from "./components/search";
import LoginDetails from "./components/loginDetails";
import AccountInfo from "./components/accountInfo";

import Styles from "./header.module.css";
// common styles
import "../../App.css";

const Header = () => {
    return (
        <div className={`alignCenter ${Styles.container}`}>
            <div className={Styles.logo}>
                Logo
            </div>
            <HeaderDate />
            <SearchComp />
            <LoginDetails />
            <AccountInfo />
            <AccountInfo forAccount={"logout"}/>
        </div>
    )
};

export default Header;
