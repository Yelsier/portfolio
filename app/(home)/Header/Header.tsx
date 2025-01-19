import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css"

const Header = () => {
    return <header className={`fixed top-[0px] left-[0px] flex justify-between w-full z-10 items-center ${styles.header}`}>
        <div className="ml-[50px]">
            <div className={styles.descargarCVContainer}>
                <a href={"/CV.pdf"} download={"CV_Yago_Claros_Seijo.pdf"} className={styles.descargarCV}>
                    <div className="flex gap-5">
                        <FontAwesomeIcon aria-hidden className="w-[20px]" icon={faCircleDown} />
                        <span>CV</span>
                    </div>
                </a>
            </div>
        </div>
        <div className="mr-[50px]">
            <nav className={styles.menu} aria-label="Menú principal">
                <ul className={styles.menulist}>
                    <li>
                        <a href="#about">
                            ACERCA DE MÍ
                        </a>
                    </li>
                    <li>
                        <a href="#knowledge">
                            CONOCIMIENTOS
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            PROYECTOS
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header;