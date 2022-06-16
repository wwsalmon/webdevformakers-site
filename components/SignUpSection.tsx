import Section from "./Section";

export default function SignUpSection() {
    return (
        <Section className="sm:flex items-center justify-center">
            <p className="text-xl sm:text-2xl uppercase font-bold mr-6">pilot cohort<br className="sm:hidden"/> <span className="text-brand"><span className="font-black">nyc</span> starting june 27</span></p>
            <a href="" className="inline-block font-display text-white bg-brand px-10 py-3 text-xl font-medium mt-4 sm:mt-0">sign up</a>
        </Section>
    )
}