import { useNavigate } from "react-router-dom";

const NavigationLink = ({text, navigateTo, params}) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(navigateTo, params);
    };

    return (
        <span 
            className='whiteFont cPointer' 
            onClick={handleNavigation}
            style={{ alignSelf: "flex-start" }}
        >
            {text}
        </span>
    )
};

export default NavigationLink;
