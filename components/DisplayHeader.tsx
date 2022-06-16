import {HTMLProps} from "react";

export default function DisplayHeader(props: HTMLProps<HTMLDivElement>) {
    let domProps = {...props};
    delete domProps.className;

    return (
        <h2 className={`my-4 text-5xl font-display leading-[1.2] ${props.className || ""}`}>
            {props.children}
        </h2>
    )
}