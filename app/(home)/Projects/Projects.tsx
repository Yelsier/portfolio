import styles from "./Projects.module.css"
import Image from "next/image"
import Link from "next/link";
import NextJS from "../Components/icons/NextJS";
import WordPress from "../Components/icons/WordPress";
import Slider from "../Components/Slider";
import SectionTitle from "../Components/SectionTitle";

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
    {
        img: "asha.png",
        title: "TERRITORI ASHA",
        hechoEn: "WordPress",
        hechoEnImg: <WordPress />,
        link: "https://territorioasha.com"
    },
    {
        img: "gabigo.webp",
        title: "GABI GO",
        hechoEn: "WordPress",
        hechoEnImg: <WordPress />,
        link: "https://gabigo.es"
    },

]

const Projects = () => {

    return <section role="region" id="projects" className={`h-screen pt-32 ${styles.projects}`}>
        <div className="">
            <SectionTitle>PROYECTOS</SectionTitle>
            <p className={styles.propiedad}>Todos los proyectos son propiedad de <Link href={"https://reparapcs.com"}>À-ser reparapcs</Link></p>
            <Slider id="slider" name="projects" elements={projects.map((project, index) => {
                return <div data-testid="project" key={project.title + "_" + index} className="relative flex-shrink-0">
                    <div className={styles.cardDecor}>
                        PROJECT :: WEB_{index % projects.length}
                    </div>
                    <div className={styles.card}>
                        <div className={styles.backdrop}>
                        </div>
                        <Image className={styles.cardImage} src={`/projects_logos/${project.img}`} width={150} height={150} alt={`Logo ${project.title}`} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.hechoEnContainer}><span>Hecho en:</span><span className={styles.hechoEn}>{project.hechoEnImg} {project.hechoEn}</span></p>
                            <p className={styles.hechoEnContainer}>Dearrollado en: <Link className={styles.hechoEn} href="https://reparapcs.com">Reparapcs</Link></p>
                            <Link className={styles.cardLink} href={project.link} target="_blank">Ver</Link>
                        </div>
                    </div>
                </div>
            })} />
        </div>
    </section >
}

export default Projects;
