import Link from "next/link";
import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Post } from "../blog/blog";
import Time from "./time";

interface BlogSummaryProps {
    post: Post;
};

const BlogSummary: FC<BlogSummaryProps> = (
    {
        post
    },
    ...props
) => {
    return (
        <article
            className="
                group
                relative
            "
        >
            <Time>
                {post.publishedOn}
            </Time>
            <h2
                className="
                    text-zinc-100
                    text-lg font-semibold
                    tracking-tight
                "
            >
                <span 
                        className="
                            absolute
                            -inset-x-4 sm:-inset-x-6
                            -inset-y-6
                            sm:rounded-2xl
                            transition
                            group-hover:bg-zinc-800/50
                        "
                    />
                <Link
                    href={`/articles/${post.slug}`}
                >
                    <a>
                        <span 
                            className="
                                absolute
                                z-20
                                -inset-x-4 sm:-inset-x-6
                                -inset-y-6
                            "
                        />
                        <span
                            className="relative"
                        >
                            {post.title}
                        </span>
                    </a>
                </Link>
            </h2>
            <p
                className="
                    relative
                    mt-2
                    text-sm
                "
            >
                {post.preview}
            </p>
            <div
                className="
                    relative
                    flex items-center
                    gap-x-1
                    mt-4
                    text-sm font-medium text-cyan-500
                "
            >
                Read article
                <FaChevronRight
                    className="w-2 h-2"
                />
            </div>
        </article>
    );
};
export default BlogSummary;