import Head from "next/head";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import BigTitle from "../components/BigTitle";
import Link from "next/link";
import YTEmbed from "../components/YTEmbed";

export default function Videos() {
    return (
        <>
            <Head>
                <title>Course videos | Web dev for makers</title>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@wwsalmon" />
                <meta name="twitter:title" content="Course videos | Web dev for makers" />
                <meta name="twitter:description" content="2.5 hours of videos taking you from zero experience to coding a social media app, using state-of-the-art, production-ready tools." />
                <meta name="twitter:image" content="https://webdevformakers.vercel.app/logo.png" />
            </Head>
            <Section>
                <Link href="/">
                    <a>
                        <img src="/logo.png" alt="Web Dev for Makers Logo" className="w-24 mx-auto rounded-md"/>
                    </a>
                </Link>
                <BigTitle>
                    Course videos
                </BigTitle>
                <div className="prose max-w-xl mx-auto">
                    <p className="text-center">All videos made for NYC pilot course</p>
                    <h2 className="text-center">Table of contents</h2>
                    <p className="text-center">Scroll down for embedded videos</p>
                    <ul>
                        <li>1.1: Setting up dev environment, 4:09 <a href="https://www.google.com/url?q=https://youtu.be/SCIGOD_NKTs&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw33d_KusKZIAuNZ5vVINohF"  >https://youtu.be/SCIGOD_NKTs</a></li>
                        <li>1.2: Intro to HTML and CSS, 8:18 <a href="https://www.google.com/url?q=https://youtu.be/f_fBttqdGYA&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw1rSBS2q9iG7IETJDtDFdn8"  >https://youtu.be/f_fBttqdGYA</a></li>
                        <li>1.2 demo: Building a personal website, 17:08 (you can skim through this one) <a href="https://www.google.com/url?q=https://youtu.be/gix3Cve-p3k&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw0EB1Kqdms4i8Sg8LGGXS_Q"  >https://youtu.be/gix3Cve-p3k</a></li>
                        <li>1.3: Advanced CSS, 6:50 <a href="https://www.google.com/url?q=https://youtu.be/Qnsz4JWS4ug&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw2Hrp--ItQG6UjBK6Pimffz"  >https://youtu.be/Qnsz4JWS4ug</a></li>
                        <li>2.1: Deploying your website (4:01) <a href="https://www.google.com/url?q=https://youtu.be/ibtMh4r1SgQ&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw27TN77MhhoV4WAIzGDf1KF"  >https://youtu.be/ibtMh4r1SgQ</a></li>
                        <li>2.2: Intro to Javascript and React components (12:39) <a href="https://www.google.com/url?q=https://youtu.be/q0edoM8w7hI&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw14EQvP0eWkKGeSvNRxC4RO"  >https://youtu.be/q0edoM8w7hI</a></li>
                        <li>2.3: Intro to React useState (6:10) <a href="https://www.google.com/url?q=https://youtu.be/CfDYHVySkJ8&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw1AKcJ8uaz6AS67FCxdE7aN"  >https://youtu.be/CfDYHVySkJ8</a></li>
                        <li>3.1 Styling with TailwindCSS (5:24) <a href="https://www.google.com/url?q=https://youtu.be/274KiM1sVpA&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw1DLCjlMGNlskk1qqVsmgbG"  >https://youtu.be/274KiM1sVpA</a></li>
                        <li>3.2 Making a todo list app (6:47) <a href="https://www.google.com/url?q=https://youtu.be/UjywWPC3tHk&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw3aBtPmCYpGiTMuBvzEcP_j"  >https://youtu.be/UjywWPC3tHk</a></li>
                        <li>3.3 Fetching data from APIs/making a weather app (7:22) <a href="https://www.google.com/url?q=https://youtu.be/BQV89Vcrn4s&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw1QioQ1PxYZR5caUAb69G8s"  >https://youtu.be/BQV89Vcrn4s</a></li>
                        <li>3.3 demo: nicely styled weather app (18:03) <a href="https://youtu.be/1IRgI_WjVVQ"  >https://youtu.be/1IRgI_WjVVQ</a></li>
                        <li>4.1 Making a backend with MongoDB (12:27): <a href="https://www.google.com/url?q=https://youtu.be/r5YUy9fGQwY&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw2in8S4dXfPKtYEQ5xM0pwv"  >https://youtu.be/r5YUy9fGQwY</a></li>
                        <li>5.1 User login (7:07): <a href="https://www.google.com/url?q=https://youtu.be/4DDqBwuMFnE&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw0lOZLOk79XAFVfX04RBRwv"  >https://youtu.be/4DDqBwuMFnE</a></li>
                        <li>5.2 User accounts and user data (8:23) <a href="https://www.google.com/url?q=https://youtu.be/XViRWG9-q9M&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw0zQ0HziTBBRbI4tHp82HFH"  >https://youtu.be/XViRWG9-q9M</a></li>
                        <li>5.3 Post feed and MongoDB aggregations (4:39) <a href="https://www.google.com/url?q=https://youtu.be/gR49vDPmdOs&amp;sa=D&amp;source=calendar&amp;usd=2&amp;usg=AOvVaw1Hb4O3yB_JwYaGMU7GwCXO"  >https://youtu.be/gR49vDPmdOs</a></li>
                        <li>5.4 Post comments (9:51) <a href="https://youtu.be/5tWoVVUNRn4"  >https://youtu.be/5tWoVVUNRn4</a></li>
                        <li>6.1 Webapp design process (5:28) <a href="https://youtu.be/mHtazu6CnV4"  >https://youtu.be/mHtazu6CnV4</a></li>
                        <li>6.2 UI/UX design (4:56) <a href="https://youtu.be/N9k1BmuiCh4"  >https://youtu.be/N9k1BmuiCh4</a></li>
                    </ul>
                    <h2 className="text-center mb-4">Videos</h2>
                </div>
                {["SCIGOD_NKTs", "f_fBttqdGYA", "gix3Cve-p3k", "Qnsz4JWS4ug", "ibtMh4r1SgQ", "q0edoM8w7hI", "CfDYHVySkJ8", "274KiM1sVpA", "UjywWPC3tHk", "BQV89Vcrn4s", "1IRgI_WjVVQ", "r5YUy9fGQwY", "4DDqBwuMFnE", "XViRWG9-q9M", "gR49vDPmdOs", "5tWoVVUNRn4", "mHtazu6CnV4", "N9k1BmuiCh4"].map(id => (
                    <YTEmbed src={`https://www.youtube.com/embed/${id}`} key={id} className="mb-4"/>
                ))}
            </Section>
        </>
    )
}