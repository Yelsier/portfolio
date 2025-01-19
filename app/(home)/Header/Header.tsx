"use client"
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css"
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return <header className={`${styles.header}`}>
        <div className="ml-4 md:ml-10">
            <div className={styles.descargarCVContainer}>
                <a href={"/CV.pdf"} download={"CV_Yago_Claros_Seijo.pdf"} className={styles.descargarCV}>
                    <div className="flex gap-5">
                        <FontAwesomeIcon aria-hidden className="w-[20px]" icon={faCircleDown} />
                        <span>CV</span>
                    </div>
                </a>
            </div>
        </div>
        <div className="mr-4 h-[48px] md:mr-10 min-w-[50px]">
            <nav className={`${styles.menu} ${menuOpen ? styles.open : styles.close}`} aria-label="Menú principal">
                <button onClick={() => setMenuOpen(true)} className={styles.menuButton} aria-label="Abrir menú móvil">☰</button>
                <button onClick={() => setMenuOpen(false)} className={styles.menuButtonCerrar} aria-label="Cerrar menú móvil">
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className={`${styles.mobileController} `}>
                    <ul className={styles.menulist}>
                        <li>
                            <a href="#about" onClick={() => setMenuOpen(false)}>
                                ACERCA DE MÍ
                            </a>
                        </li>
                        <li>
                            <a href="#knowledge" onClick={() => setMenuOpen(false)}>
                                CONOCIMIENTOS
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => setMenuOpen(false)}>
                                PROYECTOS
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
}

export default Header;