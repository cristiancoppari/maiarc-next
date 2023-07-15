import type { ReactNode } from "react";

const Container = ({
    children,
    classes,
}: {
    children: ReactNode;
    classes?: string;
}) => {
    return (
        <div className={`container py-12 ${classes ? classes : ""}`}>
            {children}
        </div>
    );
};

export default Container;
