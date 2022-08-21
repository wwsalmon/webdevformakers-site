import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import Section from "../components/Section";
import DisplayHeader from "../components/DisplayHeader";
import Paragraph from "../components/Paragraph";
import SignUpSection from "../components/SignUpSection";
import LinkButton from "../components/LinkButton";
import {ReactNode} from "react";
import YTEmbed from "../components/YTEmbed";
import BigTitle from "../components/BigTitle";

const weeks = [
    "Personal website: HTML and CSS",
    "Personal website: React components and useState",
    "Weather app: Advanced React and fetching from APIs",
    "Social media app: Making a backend with MongoDB",
    "Social media app: User data",
    "Webapp design process and UI/UX design",
]

function SectionFlex({children}: {children: ReactNode}) {
    return (
        <div className="md:flex items-center sm:-mx-8">
            {children}
        </div>
    )
}

function SectionLeft({children}: {children: ReactNode}) {
    return (
        <div className="md:w-2/3 sm:px-8">
            {children}
        </div>
    )
}

function SectionRight({children}: {children: ReactNode}) {
    return (
        <div className="md:w-1/3 sm:px-8 mt-8 sm:mt-0">
            {children}
        </div>
    )
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Web dev for makers: learn to build webapps in three weeks</title>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@wwsalmon" />
                <meta name="twitter:title" content="Web dev for makers: learn to build webapps in three weeks" />
                <meta name="twitter:description" content="A project-based fullstack dev course taking you from zero experience to coding a social media app, using state-of-the-art, production-ready tools." />
                <meta name="twitter:image" content="https://webdevformakers.vercel.app/logo.png" />
            </Head>
            <Section>
                <img src="/logo.png" alt="Web Dev for Makers Logo" className="w-24 mx-auto rounded-md -mb-16"/>
                <SectionHeader className="text-brand text-center">web dev for makers</SectionHeader>
                <BigTitle>
                    From <b>zero experience</b> to <b>building webapps</b> in <b>three weeks</b>
                </BigTitle>
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
            <Section>
                <SectionFlex>
                    <SectionLeft>
                        <DisplayHeader><b>Tried and true</b> curriculum</DisplayHeader>
                        <p className="text-xl sm:text-2xl uppercase font-bold mr-6 mb-8">pilot cohort<br className="sm:hidden"/> <span className="text-brand"><span className="font-black">nyc</span> june 27 - july 20</span></p>
                        <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSdaeQV8ILYO5guoWKih6Ppe9jY1fq2lntYlg80pWxWeexx_oA/viewform?usp=sf_link">Get notified about future cohorts</LinkButton>
                    </SectionLeft>
                    <SectionRight>
                        <img src="/pilot.jpg" alt="photo of Manhattan office" className="rounded-md"/>
                    </SectionRight>
                </SectionFlex>
            </Section>
            <hr/>
            <Section>
                <SectionFlex>
                    <SectionLeft>
                        <DisplayHeader>Learn to <b>build whatever you want</b></DisplayHeader>
                        <Paragraph className="mb-16">Build webapps as complex as social media networks using a <b>production-ready, state-of-the-art stack.</b></Paragraph>
                        {weeks.map((week, i) => (
                            <div className="flex sm:text-xl my-4">
                                <p className="w-24 sm:w-40 flex-shrink-0 opacity-50">Lesson {i + 1}</p>
                                <p>{week}</p>
                            </div>
                        ))}
                    </SectionLeft>
                    <SectionRight>
                        {["SCIGOD_NKTs", "f_fBttqdGYA", "4DDqBwuMFnE"].map(id => (
                            <YTEmbed src={`https://www.youtube.com/embed/${id}`} key={id} className="mb-4"/>
                        ))}
                        <LinkButton href="/videos">Watch course videos</LinkButton>
                    </SectionRight>
                </SectionFlex>
            </Section>
            <hr/>
            <Section>
                <div className="md:flex items-center sm:-mx-8">
                    <div className="md:w-2/3 sm:px-8">
                        <DisplayHeader>In-person, <b>project-based learning</b></DisplayHeader>
                        <Paragraph>Come out of each lesson knowing <b>how to build something new.</b> Learn and build in a beautiful space in downtown Manhattan.</Paragraph>
                        <Paragraph className="mt-6 opacity-50">Class space in Flatiron District →</Paragraph>
                        <Paragraph className="opacity-50">Future cohorts TBA</Paragraph>
                    </div>
                    <div className="md:w-1/3 sm:px-8 mt-8 sm:mt-0">
                        <img src="/contrary.jpg" alt="photo of Manhattan office" className="rounded-md"/>
                    </div>
                </div>
            </Section>
            <hr/>
            <SignUpSection/>
        </>
    );
}