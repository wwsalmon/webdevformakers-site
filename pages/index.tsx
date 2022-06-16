import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Web dev for makers: learn to build webapps in four weeks</title>
            </Head>
            <div className="max-w-5xl mx-auto my-24 px-6">
                <p className="text-brand uppercase font-bold text-xl sm:text-2xl text-center">web dev for makers</p>
                <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[1.2] sm:leading-[1.2] md:leading-[1.2] my-12 sm:my-16 text-center">
                    From <b>zero experience</b> to <b>building webapps</b> in <b>four weeks</b>
                </h1>
                <div className="sm:flex items-center sm:text-xl leading-normal -mx-4 underline-links">
                    <div className="sm:w-1/2 px-4 mb-8 sm:mb-0 text-center sm:text-left">
                        <p>A <b>project-based fullstack dev course</b> that cuts the fat and just <b>teaches you to build, build, build.</b></p>
                    </div>
                    <div className="sm:w-1/2 px-4 text-center sm:text-right">
                        Taught by <a href="https://twitter.com/wwsalmon">Samson Zhang</a>, developer of <br className="hidden md:block"/>
                        <a href="https://contrary.com/">contrary.com</a> / <a href="https://postulate.us/">postulate.us</a> / <a href="https://updately.us/">updately.us</a>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="sm:flex items-center justify-center my-16 px-4">
                <p className="text-xl sm:text-2xl uppercase font-bold mr-6">pilot cohort<br className="sm:hidden"/> <span className="text-brand"><span className="font-black">nyc</span> starting june 27</span></p>
                <a href="" className="inline-block font-display text-white bg-brand px-10 py-3 text-xl font-medium mt-4 sm:mt-0">sign up</a>
            </div>
            <hr/>
        </>
    );
}