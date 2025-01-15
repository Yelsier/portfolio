import localFont from "next/font/local";
import styles from "./About.module.css"

const REFINERY = localFont({ src: '../../../public/fonts/Refinery-25.ttf' })

const About = () => {

    return <section className={`${styles.about} `}>
        <div className="mx-auto w-4/5 max-w-[700px] relative">
            <h2 style={REFINERY.style} className={"text-white mb-10 text-7xl"}>ACERCA DE MÍ</h2>
            <div className="mb-10">
                <div className={styles.cajaDescripcion}>/// ABOUT.DESCRIPTION_1</div>
                <div className="flex gap-1">
                    <div className={styles.decorText}></div>
                    <p className="text-white text-lg">Soy un desarrollador web autodidacta con experiencia en tecnologías como TypeScript, React y MongoDB. Mi pasión es construir aplicaciones funcionales y modernas, enfocándome en crear soluciones eficientes y escalables que se adapten a las necesidades de los usuarios y empresas.</p>
                </div>
            </div>
            <div>
                <div className={styles.cajaDescripcion}>/// ABOUT.DESCRIPTION_2</div>
                <div className="flex gap-1">
                    <div className={styles.decorText}></div>
                    <p className="text-white text-lg">Me destaco por ser resolutivo y por mi habilidad para analizar problemas desde diferentes perspectivas, encontrando soluciones rápidas e innovadoras. Mi compromiso con el aprendizaje constante me impulsa a mantenerme actualizado con las últimas tendencias y herramientas del desarrollo web, lo que me permite abordar cada desafío con una mentalidad proactiva y un enfoque en la mejora continua.</p>
                </div>
            </div>
        </div>
        <div className={styles.decorBottom}>
        /// SKILLS.MODULE
            <br />
            loading...
        </div>
    </section >
}

export default About;