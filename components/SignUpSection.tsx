import Section from "./Section";
import LinkButton from "./LinkButton";

export default function SignUpSection() {
    return (
        <Section className="sm:flex items-center justify-center">
            <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSeTjlQbaDD_kHhymRfJISfz22uhGltvpDP8ZRwG_sabb5qwVw/viewform?usp=sf_link">
                get notified about future cohorts
            </LinkButton>
        </Section>
    )
}