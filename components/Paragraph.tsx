import {HTMLProps} from "react";

export default function Paragraph(props: HTMLProps<HTMLDivElement>) {
    let domProps = {...props};
    delete domProps.className;

    return (
        <p className={`sm:text-xl leading-relaxed sm:leading-relaxed ${props.className || ""}`}>
            {props.children}
        </p>
    )
}