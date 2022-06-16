import {HTMLProps} from "react";

export default function SectionHeader(props: HTMLProps<HTMLParagraphElement>) {
    let domProps = {...props};
    delete domProps.className;

    return (
        <p className={`uppercase font-bold text-xl mt-24 mb-16 ${props.className || ""}`} {...domProps}>{props.children}</p>
    )
}