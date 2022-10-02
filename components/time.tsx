import { FC } from "react";
import { twMerge } from "tailwind-merge";
import dateFormat from 'dateformat';

interface TimeProps {
    children: string;
    className?: string;
};

const Time: FC<TimeProps> = (
    {
        children,
        className
    },
    ...props
) => {
    return (
        <time
            className={twMerge(
                `
                    relative
                    block
                    z-10
                    pl-3.5
                    mb-3
                    text-sm
                    text-zinc-500
                    border-l-2 border-solid border-zinc-500
                `,
                className
            )}
            dateTime={children}
        >
            {dateFormat(children, 'mmmm dS, yyyy')}
        </time>
    );
};
export default Time;