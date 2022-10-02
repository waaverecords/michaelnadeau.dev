import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface H1Props {
    children: ReactNode;
    className?: string;
};

const H1: FC<H1Props> = (
    {
        children,
        className
    },
    ...props
) => {
    return (
        <h1
            className={twMerge(
                `
                    text-4xl sm:text-5xl
                    tracking-tight
                    font-bold
                    text-zinc-100
                `,
                className
            )}
        >
            {children}
        </h1>
    );
};
export default H1;