import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import i18n from "shared/config/i18n/i18n";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = ({className} : LanguageSwitcherProps) => {

    const {t} = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    }
    console.log(i18n.language);
    return (
        <Button
            onClick={onToggle}
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.LanguageSwitcher, {}, [className])}
        >
            {i18n.language}
        </Button>
    )
}