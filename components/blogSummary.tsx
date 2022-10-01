import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import dateFormat from 'dateformat';
import { Post } from "../blog/blog";

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
            <time
                className="
                    relative
                    block
                    z-10
                    pl-3.5
                    mb-3
                    text-sm
                    text-zinc-500
                    border-l-2 border-solid border-zinc-500
                "
                dateTime={post.publishedOn}
            >
                {dateFormat(post.publishedOn, 'mmmm dS, yyyy')}
            </time>
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
                <a
                    href="#"
                >
                    
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
            </h2>
            <p
                className="
                    relative
                    mt-2
                    text-sm
                "
            >
                Aute reprehenderit ea amet ut aliqua eiusmod laboris commodo mollit ad esse. Nostrud dolore mollit esse ea ea amet officia adipisicing ea.
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