import Image from "next/image";
import localFont from 'next/font/local'
import title from './title.module.css'
import Background from "./Background";
import styles from "./home.module.css"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";

const SAIBA = localFont({ src: '../../public/fonts/SAIBA-45.otf' })
const REFINERY = localFont({ src: '../../public/fonts/Refinery-25.ttf' })

export default function Home() {
    return <>
        <div className={`fixed top-[0px] left-[0px] flex justify-between w-full z-10 items-center ${styles.header}`}>
            <div className="ml-[50px]">
                <div className={styles.descargarCVContainer}>
                    <a href={"/CV.pdf"} download={"CV_Yago_Claros_Seijo.pdf"} className={styles.descargarCV}>
                        <div className="flex gap-5">
                            <FontAwesomeIcon className="w-[20px]" icon={faCircleDown} />
                            <span>CV</span>
                        </div>
                    </a>
                </div>
            </div>
            <header className="mr-[50px]">
                <nav className={styles.menu}>
                    <ul className={styles.menulist}>
                        <li>
                            ACERCA DE MÍ
                        </li>
                        <li>
                            CONOCIMIENTOS
                        </li>
                        <li>
                            PROYECTOS
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        <div className={`h-screen ${styles.home}`}>
            <Background />
            <div className="mx-auto w-4/5 max-w-[1200px] relative">
                <div className="flex items-center justify-center h-screen ">
                    <div className="flex flex-col">
                        <h1 className={`${SAIBA.className} ${title.title}`}><span title="Yago">Yago</span> <span title="Claros">Claros</span> <span title="Seijo">Seijo</span></h1>
                        <div className="mt-10 flex items-center justify-between">
                            <h2 className={title.subtitle}>FULL STACK DEVELOPER</h2>
                            <div className="flex items-center justify-center gap-10">
                                <Link title="LinkedIn" href={"https://www.linkedin.com/in/yago-claros/"} target="_blank" className={styles.enlace}>
                                    <FontAwesomeIcon className="w-[20px]" icon={faLinkedin} />
                                    <span>LinkedIn</span>
                                </Link>
                                <Link title="Github" href={"https://github.com/Yelsier/portfolio"} target="_blank" className={styles.enlace}>
                                    <FontAwesomeIcon className="w-[20px]" icon={faGithub} />
                                    <span>Codigo Fuente</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className={`${styles.about} `}>
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
        <div className={`h-screen ${styles.knowledge}`}>
            <h2>CONOCIMIENTOS</h2>
        </div>
        <div className={`h-screen ${styles.projects}`}>
            <h2>PROYECTOS</h2>
        </div>
    </>
}
