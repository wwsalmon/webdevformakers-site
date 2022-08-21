export default function YTEmbed({src, className}: {src: string, className?: string}) {
    return (
        <div style={{paddingBottom: "56.25%"}} className={`w-full relative ${className || ""}`}>
            <iframe loading="lazy" src={src} className="absolute w-full h-full top-0 left-0 bottom-0 right-0"/>
        </div>
    )
}