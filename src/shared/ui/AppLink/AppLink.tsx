import cls from "./AppLink.module.scss";
import {classNames} from "shared/lib/classNames";
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";


export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = ({
   className,
   to,
   children,
    theme= AppLinkTheme.PRIMARY,
   ...otherProps
}) => {
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {},[className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;