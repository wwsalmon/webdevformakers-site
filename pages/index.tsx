export default function Home() {
    return (
        <>
            <div className="max-w-5xl mx-auto my-24">
                <p className="text-brand uppercase font-bold text-2xl text-center">web dev for makers</p>
                <h1 className="font-display text-8xl leading-[1.2] my-16 text-center">
                    From <b>zero experience</b> to <b>building webapps</b> in <b>four weeks</b>
                </h1>
                <div className="flex items-center text-xl leading-normal -mx-4 underline-links">
                    <div className="w-1/2 px-4">
                        <p>A project-based fullstack dev course that cuts the fat and <b>just teaches you to build, build, build.</b></p>
                    </div>
                    <div className="w-1/2 px-4 text-right">
                        <p>Taught by <a href="https://twitter.com/wwsalmon">Samson Zhang</a>, developer of</p>
                        <p>
                            <a href="https://contrary.com/">contrary.com</a> / <a href="https://postulate.us/">postulate.us</a> / <a href="https://updately.us/">updately.us</a>
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="flex items-center justify-center my-16">
                <p className="text-2xl uppercase font-bold">pilot cohort <span className="text-brand"><span className="font-black">nyc</span> starting june 27</span></p>
                <a href="" className="block font-display text-white bg-brand px-10 py-3 text-xl font-medium ml-6">sign up</a>
            </div>
            <hr/>
        </>
    );
}