import type { ITitleSubtitle } from "@/types/sections";
import Container from "@/components/Container/Container";

const TitleSubtitle = ({ title, text, children }: ITitleSubtitle) => {
    return (
        <section className="text-center">
            <Container>
                <h2 className="h2 mx-auto mb-8 uppercase md:w-11/12">
                    {title}
                </h2>

                <p className="mx-auto md:w-2/3">{text}</p>
            </Container>

            <>{children}</>
        </section>
    );
};

export default TitleSubtitle;