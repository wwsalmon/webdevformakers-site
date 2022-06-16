import {HTMLProps} from "react";

export default function Section(props: HTMLProps<HTMLDivElement>) {
    let domProps = {...props};
    delete domProps.className;

    return (
        <div className={`max-w-5xl mx-auto my-24 px-4 ${props.className || ""}`}>
            {props.children}
        </div>
    )
}
