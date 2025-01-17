import localFont from "next/font/local";
import styles from "./Projects.module.css"

const REFINERY = localFont({ src: '../../../public/fonts/Refinery-25.ttf' })

const Projects = () => {
    return <section className={`h-screen ${styles.projects}`}>
        <div className="mx-auto w-4/5 max-w-[1200px] relative">
            <h2 style={REFINERY.style} className={"text-white mb-10 text-7xl"}>PROYECTOS</h2>
        </div>
    </section>
}

export default Projects;