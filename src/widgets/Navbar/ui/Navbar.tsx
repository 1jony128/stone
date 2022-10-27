import React, {FC} from 'react';
import cls from "./Navbar.module.scss"
import {classNames} from "shared/lib/classNames";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import LangSwitcher from "shared/ui/LangSwitcher/ui/LangSwitcher";


interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.logo}>

            </div>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={"/"}
                    className={cls.mainItem}
                >
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={"/about"}
                >
                    О сайте
                </AppLink>
            </div>

        </div>
    );
};

export default Navbar;