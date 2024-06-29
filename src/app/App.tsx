import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import "app/styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { ContentWrapper } from "shared/ui/ContentWrapper/ContentWrapper";
import { Suspense } from "react";

export const App = () => { 
    const {theme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <ContentWrapper>
                    <AppRouter/>
                </ContentWrapper>
            </Suspense>
        </div>
    );
};