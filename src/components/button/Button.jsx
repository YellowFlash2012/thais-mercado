import "./button.styles.jsx"
import { BaseButton, GoogleSignBtn, InvertedBtn } from "./button.styles.jsx"

export const BUTTON_TYPE_CLASSES = {
    base:'base',
    google: 'google-sign-in',
    inverted:'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]:BaseButton,
        [BUTTON_TYPE_CLASSES.google]:GoogleSignBtn,
        [BUTTON_TYPE_CLASSES.inverted]:InvertedBtn,
    }[buttonType]
)

const Button = ({ children, buttonType,...otherProps }) => {
    const CustomBtn = getButton(buttonType);
    return (
        <CustomBtn
            {...otherProps}
        >
            {children}
        </CustomBtn>
    );
};
export default Button;
