import styles from "./About.module.css"
import SectionTitle from "../Components/SectionTitle";
import icons from "../Components/SVGIcons";

const About = () => {

    return <section role="region" id="about" className={`${styles.about} pt-32 `}>
        <div className="mx-auto w-4/5 max-w-[700px] relative">
            <SectionTitle>ACERCA DE MÍ</SectionTitle>
            <div className="mb-10">
                <div className={styles.cajaDescripcion}>{"///"} ABOUT.DESCRIPTION_1</div>
                <div className="flex gap-1">
                    <div className={styles.decorText}></div>
                    <p className="text-white text-lg lg:text-justify">Soy un desarrollador web autodidacta con experiencia en tecnologías como <icons.TypeScript /> TypeScript, <icons.React /> React y <icons.MongoDB /> MongoDB. Me apasiona crear sistemas que optimicen el desarrollo de aplicaciones, logrando que el proceso sea más ágil y eficiente.</p>
                </div>
            </div>
            <div>
                <div className={styles.cajaDescripcion}>{"///"} ABOUT.DESCRIPTION_2</div>
                <div className="flex gap-1">
                    <div className={styles.decorText}></div>
                    <p className="text-white text-lg lg:text-justify">Me destaco por ser resolutivo y por mi capacidad para analizar problemas desde múltiples perspectivas, identificando soluciones rápidas e innovadoras. <br /> Además, me mantengo en constante aprendizaje para estar siempre al día con las últimas tecnologías y tendencias del sector.</p>
                </div>
            </div>
        </div>
    </section >
}

export default About;