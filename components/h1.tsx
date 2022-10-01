import { FC, ReactNode } from "react";

interface H1Props {
    children: ReactNode
};

const H1: FC<H1Props> = (
    {
        children
    },
    ...props
) => {
    return (
        <h1
            className="
                text-4xl sm:text-5xl
                tracking-tight
                font-bold
                text-zinc-100
            "
        >
            {children}
        </h1>
    );
};
export default H1;