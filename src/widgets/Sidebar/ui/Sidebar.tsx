import cls from "./Sidebar.module.scss"
import {classNames} from "shared/lib/classNames";
import React, {FC, useState} from "react";
import ThemeSwitcher from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
import LangSwitcher from "shared/ui/LangSwitcher/ui/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string
}

const Sidebar: FC<SidebarProps> = ({className}) => {

    const [collabsed, setColabsed] = useState(false)


    function onToggle() {
        setColabsed(prevState => !prevState)
    }

    const {t} = useTranslation()

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collabsed]: collabsed}, [className])}
        >
            <button onClick={onToggle}>
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

export default Sidebar;