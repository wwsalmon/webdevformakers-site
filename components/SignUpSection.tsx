import Section from "./Section";
import LinkButton from "./LinkButton";

export default function SignUpSection() {
    return (
        <Section className="sm:flex items-center justify-center">
            <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSdaeQV8ILYO5guoWKih6Ppe9jY1fq2lntYlg80pWxWeexx_oA/viewform?usp=sf_link">
                get notified about future cohorts
            </LinkButton>
        </Section>
    )
}