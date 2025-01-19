import localFont from "next/font/local";
import Background from "./Background";
import styles from "./Home.module.css"
import titleStyles from "./Title.module.css"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SAIBA = localFont({ src: '../../../public/fonts/SAIBA-45.otf' })

const Home = () => {

    return <section className={`h-screen ${styles.home}`}>
        <Background />
        <div className="mx-auto w-4/5 max-w-[1200px] relative z-10">
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col">
                    <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl lg:flex-row lg:gap-10 flex flex-col ${SAIBA.className} ${titleStyles.title}`}><span title="Yago">Yago</span> <span title="Claros">Claros</span> <span title="Seijo">Seijo</span></h1>
                    <div className="lg:flex-row mt-10 flex items-center justify-between flex-col gap-10" >
                        <h2 className={titleStyles.subtitle}>FULL STACK DEVELOPER</h2>
                        <div className="sm:flex-row flex items-center justify-center flex-col gap-10">
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
    </section>
}

export default Home;