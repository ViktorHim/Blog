import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import "app/styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <ThemeSwitcher/>
        </div>
    );
};