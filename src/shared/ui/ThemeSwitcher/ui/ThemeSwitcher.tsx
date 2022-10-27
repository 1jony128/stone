import cls from "./ThemeSwitcher.module.scss"
import {classNames} from "shared/lib/classNames";
import {FC} from "react";
import {Theme, useTheme} from "app/providers/ThemeProviders";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import Button, {ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toogleTheme} = useTheme()
    return (
        <Button
            theme={ThemeButton.Clear}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toogleTheme}
        >
            {
                (theme === Theme.LIGHT)
                ?   <LightIcon />
                :   <DarkIcon />
            }

        </Button>
    );
};

export default ThemeSwitcher;