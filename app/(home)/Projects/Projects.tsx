import localFont from "next/font/local";
import styles from "./Projects.module.css"
import Image from "next/image"
import Link from "next/link";
import NextJS from "@/public/logos/nextjs.svg"

const REFINERY = localFont({ src: '../../../public/fonts/Refinery-25.ttf' })

const Projects = () => {
    return <section className={`h-screen ${styles.projects}`}>
        <div className="mx-auto w-4/5 max-w-[1200px] relative">
            <h2 style={REFINERY.style} className={"text-white mb-44 text-7xl"}>PROYECTOS</h2>
            <div className="flex gap-4">
                <div className="relative">
                    <div className={styles.cardDecor}>
                        PROJECT :: WEB_1
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}
                            style={{ maskImage: "url('/aeperfecto.ico')" }}
                        />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>AEPERFECTO</h3>
                            <p className={styles.hechoEn}><span>Hecho en:</span><span className="flex items-center"><NextJS /> NextJS</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Projects;