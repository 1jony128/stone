import {FC} from "react";
import Button, {ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames";
import cls from "widgets/Sidebar/ui/Sidebar.module.scss";

interface ThemeSwitcherProps {
    className?: string
}

const LangSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {t, i18n} = useTranslation()
    const onClick = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return <Button
        className={classNames(cls.Lang, {}, [className])}
        theme={ThemeButton.Clear}
        onClick={onClick}
    >{t("Язык")}</Button>
};

export default LangSwitcher;