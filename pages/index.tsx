import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import Section from "../components/Section";
import DisplayHeader from "../components/DisplayHeader";
import Paragraph from "../components/Paragraph";
import SignUpSection from "../components/SignUpSection";

const weeks = [
    "Create a static site: Basic HTML and CSS",
    "Advanced CSS",
    "React components and JS variables",
    "Dynamic data: useState and useEffect",
    "Building backends: MongoDB and NextJS endpoints",
    "User accounts: NextAuth",
    "UI/UX patterns",
]

export default function Home() {
    return (
        <>
            <Head>
                <title>Web dev for makers: learn to build webapps in four weeks</title>
            </Head>
            <Section>
                <SectionHeader className="text-brand text-center">web dev for makers</SectionHeader>
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
            </Section>
            <hr/>
            <SignUpSection/>
            <hr/>
            <Section>
                <div className="md:flex items-center sm:-mx-8">
                    <div className="md:w-2/3 sm:px-8">
                        <DisplayHeader>In-person, <b>project-based learning</b></DisplayHeader>
                        <Paragraph>Come out of each lesson knowing <b>how to build something new.</b> Learn and build in a beautiful space in downtown Manhattan.</Paragraph>
                        <Paragraph className="underline-links mt-6 opacity-50"><a href="https://contrary.com/">Contrary Capital office</a> in Flatiron District →</Paragraph>
                    </div>
                    <div className="md:w-1/3 sm:px-8 mt-8 sm:mt-0">
                        <img src="/contrary.jpg" alt="photo of contrary capital office"/>
                    </div>
                </div>
            </Section>
            <hr/>
            <Section>
                <DisplayHeader>Learn to <b>build whatever you want</b></DisplayHeader>
                <Paragraph className="mb-16">Build webapps as complex as social media networks using a <b>production-ready, state-of-the-art stack.</b></Paragraph>
                {weeks.map((week, i) => (
                    <div className="flex sm:text-xl my-4">
                        <p className="w-24 sm:w-40 flex-shrink-0">Lesson {i + 1}</p>
                        <p>{week}</p>
                    </div>
                ))}
            </Section>
            <hr/>
            <SignUpSection/>
        </>
    );
}