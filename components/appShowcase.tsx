import { FC, HTMLAttributes } from "react";
import { GoRepo } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IconBaseProps } from "react-icons";

interface ShowcaseProps {
    name: string;
    description: string;
    url: string;
    icon?: React.ComponentType<IconBaseProps> | React.FC<HTMLAttributes<HTMLImageElement>>;
    children?: React.ReactNode;
};

const Showcase: FC<ShowcaseProps> = ({
    name,
    description,
    url,
    icon: Icon,
    children,
    ...props
}) => {
    return (
        <div className="relative group">
            <h2 className=" text-zinc-100 text-lg font-semibold tracking-tight">
                <span
                        className="
                        absolute
                        -inset-x-4 sm:-inset-x-6 -inset-y-6
                        sm:rounded-2xl transition group-hover:bg-zinc-800/50
                    "
                >
                </span>
                <a
                    href={url}
                    target="_blank"
                >
                    <span className="absolute z-20 -inset-x-4 sm:-inset-x-6 -inset-y-6 "></span>
                    <span className="relative flex items-center">
                        {Icon && (
                            <Icon 
                                className="
                                    w-5 h-5
                                    inline
                                    mr-3
                                "
                            />
                        )}
                        {name}
                    </span>
                </a>
            </h2>
            <p className="relative mt-2 text-sm">
                {description}
            </p>
            {children}
        </div>
    );
};

type WebsiteShowcaseProps = ShowcaseProps;

const WebsiteShowcase: FC<WebsiteShowcaseProps> = (props) => {
    return (
        <Showcase
            {...props}
            icon={(iconProps: HTMLAttributes<HTMLImageElement>) => <img {...iconProps} src={`https://www.google.com/s2/favicons?sz=32&domain=${new URL(props.url).hostname}`} />}
        />
    );
};

type GitHubShowcaseProps = ShowcaseProps & {
    stars: number;
    forks: number;
    language: string;
};

const GitHubShowcase: FC<GitHubShowcaseProps> = (
    {
        name,
        description,
        url,
        language,
        stars,
        forks
    },
    ...props
) => {
    return (
        <Showcase
            name={name}
            description={description}
            url={url}
            icon={GoRepo}
        >
            <span className="relative flex gap-4 mt-3 text-xs">
                <div className="flex gap-1 items-center">
                    <div className="w-3 aspect-square rounded-full bg-cyan-500"></div>
                    {language}
                </div>
                <div className="flex gap-1 items-center">
                    <FaRegStar />
                    {stars}
                </div>
                <div className="flex gap-1 items-center">
                    <FaCodeFork />
                    {forks}
                </div>
            </span>
        </Showcase>
    );
}

export { 
    WebsiteShowcase,
    GitHubShowcase
};