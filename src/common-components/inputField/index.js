import { 
    FormControl, 
    Input, 
    InputLabel, 
} from '@mui/material';

import Styles from "./input.module.css";

const InputField = ({ header, type, handleChange, value, name }) => {
    return (
        <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor={name} className={Styles.label}>
                {header}
            </InputLabel>
            <Input
                name={name}
                type={type}
                value={value}
                autoComplete={type}
                className={Styles.inputs}
                disableUnderline={true}
                onChange={handleChange}
            />
        </FormControl>
    )
}

export default InputField;
