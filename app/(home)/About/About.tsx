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
                    <p className="text-white text-lg lg:text-justify">Soy desarrollador y aprendí a programar por mi cuenta. En mis proyectos suelo trabajar con <icons.TypeScript /> TypeScript, <icons.React /> React y <icons.MongoDB /> MongoDB.</p>
                </div>
            </div>
            <div>
                <div className={styles.cajaDescripcion}>{"///"} ABOUT.DESCRIPTION_2</div>
                <div className="flex gap-1">
                    <div className={styles.decorText}></div>
                    <p className="text-white text-lg lg:text-justify">Creo que me enganché a programar por lo mismo que me gustan los puzles. Disfruto dándole vueltas a un problema y probando ideas hasta que alguna encaja. Lo que más me tira es programar videojuegos. También me encanta optimizar las cosas. Cuando algo ya funciona, suelo seguir probando hasta que entra en mis baremos.</p>
                </div>
            </div>
        </div>
    </section >
}

export default About;
