import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { LinkProps } from "react-router-dom";
import { FC } from "react";
import { Link } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme,
}

export const AppLink: FC<AppLinkProps> = (props : AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link 
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    )
}