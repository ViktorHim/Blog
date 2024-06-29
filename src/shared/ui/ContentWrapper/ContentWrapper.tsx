import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Sidebar } from "widgets/Sidebar";

interface ContentWrapperProps {
    className?: string
}

export const ContentWrapper : FC<ContentWrapperProps> = (props) => {
    const {
        className,
        children
    } = props;

    return (
        <div className={classNames("content-page", {}, [className])}>
            <Sidebar/>
            {children}
        </div>
    )
}