import {ReactNode} from "react";

export default function LinkButton({href, children, className}: { href: string, children: ReactNode, className?: string }) {
    return (
        <a
            href={href}
            className={`inline-block font-display text-white bg-brand px-6 py-3 text-xl font-medium mt-4 sm:mt-0 rounded-md ${className || ""}`}
        >
            {children}
        </a>
    );
}