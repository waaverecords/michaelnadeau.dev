import { FC } from "react";
import { GoRepo } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

interface WebsiteShowcaseProps {
};

// TODO: make the component
const WebsiteShowcase: FC<WebsiteShowcaseProps> = (
    {
    },
    ...props
) => {
    return (
        <div>
        </div>
    );
};

interface GitHubShowcaseProps {
    name: string;
    description: string;
    url: string;
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
                    <span className="relative">
                        <GoRepo 
                            className="
                                w-5 h-5
                                inline
                                mr-3
                            "
                        />
                        {name}
                    </span>
                </a>
            </h2>
            <p className="relative mt-2 text-sm">
                {description}
            </p>
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
        </div>
    );
}

export { 
    WebsiteShowcase,
    GitHubShowcase
};