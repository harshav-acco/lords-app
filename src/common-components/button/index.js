import { Button } from '@mui/material';

import Styles from './button.module.css';

const CustomButton = ({ disable, text, handleClick }) => {
    return (
        <Button
            disabled={disable}
            disableRipple
            fullWidth
            variant="outlined"
            className={Styles.button}
            type="submit"
            onClick={handleClick}
        >
            {text}
        </Button>
    )
};

export default CustomButton;
