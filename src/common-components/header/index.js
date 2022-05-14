import HeaderDate from "./components/date";
import SearchComp from "./components/search";

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
        </div>
    )
};

export default Header;
