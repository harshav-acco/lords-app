import { Input } from 'antd';
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import Styles from '../header.module.css';

const { Search } = Input;

const SearchComp = () => {
    const onSearch = (e) => {
        console.log(e);
    }

    return (
        <div className={Styles.searchContainer}>
            <Search 
                placeholder="Search Events" 
                allowClear 
                onSearch={onSearch} 
                style={{ width: 300 }} 
                className={'customInput'}
            />
        </div>
    )
};

export default SearchComp;
