import {ReactNode} from "react";

export default function BigTitle({children}: {children: ReactNode}) {
    return (
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[1.2] sm:leading-[1.2] md:leading-[1.2] my-12 sm:my-16 text-center">
            {children}
        </h1>
    )
}