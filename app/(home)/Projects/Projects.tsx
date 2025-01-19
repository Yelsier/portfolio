import localFont from "next/font/local";
import styles from "./Projects.module.css"
import Image from "next/image"
import Link from "next/link";
import NextJS from "@/public/logos/nextjs.svg"
import WordPress from "@/public/logos/wordpress.svg"
import Slider from "../Components/Slider";

const REFINERY = localFont({ src: '../../../public/fonts/Refinery-25.ttf' })

const projects = [
    {
        img: "aeperfecto.ico",
        title: "AEPERFECTO",
        hechoEn: "NextJS",
        hechoEnImg: <NextJS />,
        link: "https://aeperfecto.com"
    },
    {
        img: "transformat.ico",
        title: "TRANSFORMA'T",
        hechoEn: "NextJS",
        hechoEnImg: <NextJS />,
        link: "https://transformat.cat"
    },
    {
        img: "fab.webp",
        title: "FAB",
        hechoEn: "NextJS",
        hechoEnImg: <NextJS />,
        link: "https://federacio.info"
    },
    {
        img: "reparapcs.ico",
        title: "REPARAPCS",
        hechoEn: "NextJS",
        hechoEnImg: <NextJS />,
        link: "https://reparapcs.com"
    },
    {
        img: "progat.jpg",
        title: "PROGAT BADIA",
        hechoEn: "WordPress",
        hechoEnImg: <WordPress />,
        link: "https://progatbadia.org"
    },

]

const Projects = () => {

    return <section id="projects" className={`h-screen ${styles.projects}`}>
        <div className="">
            <h2 style={REFINERY.style} className={"text-white mb-44 text-7xl"}>PROYECTOS</h2>
            <Slider name="projects" gap={20} elements={projects.map((project, index) => {
                return <div className="relative flex-shrink-0">
                    <div className={styles.cardDecor}>
                        PROJECT :: WEB_{index % projects.length}
                    </div>
                    <div className={styles.card}>
                        <div className={styles.backdrop}>
                        </div>
                        <Image src={`/projects_logos/${project.img}`} width={150} height={150} alt={`Logo ${project.title}`} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.hechoEnContainer}><span>Hecho en:</span><span className={styles.hechoEn}>{project.hechoEnImg} {project.hechoEn}</span></p>
                            <Link className={styles.cardLink} href={project.link} target="_blank">Ver</Link>
                        </div>
                    </div>
                </div>
            })} />
        </div>
    </section >
}

export default Projects;
