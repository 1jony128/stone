import cls from "./Button.module.scss"
import {classNames} from "shared/lib/classNames";
import {ButtonHTMLAttributes, FC} from "react";


export enum ThemeButton {
    Clear = "clear"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme: ThemeButton
}

const Button: FC<ButtonProps> = ({className, theme,children, ...otherProps}) => {
    return (
        <button
            className={classNames(cls.Button, {}, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;