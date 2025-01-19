"use client"

import { useState } from "react";
import styles from "./Knowledge.module.css"
import icons from "../Components/SVGIcons";

const TabsKnowledge = () => {

    const [tab, setTab] = useState("codigo");

    return <>
        <nav className={styles.tabs}>
            <ul>
                <li onClick={() => setTab("codigo")} className={`${tab == "codigo" ? styles.current : ""}`}>Código</li>
                <li onClick={() => setTab("db")} className={`${tab == "db" ? styles.current : ""}`}>Bases de datos</li>
                <li onClick={() => setTab("platforms")} className={`${tab == "platforms" ? styles.current : ""}`}>Plataformas</li>
                <li onClick={() => setTab("tools")} className={`${tab == "tools" ? styles.current : ""}`}>Herramientas</li>
            </ul>
        </nav>
        <div className={styles.tabContent}>
            <h3 className="hidden">Lenguajes de programación</h3>
            <ul style={{ display: tab == "codigo" ? "block" : "none" }}>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.HTML />
                            <span>HTML</span>
                        </div>
                        <div>
                            100%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.CSS />
                            <span>CSS</span>
                        </div>
                        <div>
                            100%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.TypeScript />
                            <span>TypeScript</span>
                        </div>
                        <div>
                            95%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.Java />
                            <span>Java</span>
                        </div>
                        <div>
                            90%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.CSharp />
                            <span>C#</span>
                        </div>
                        <div>
                            90%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.PHP />
                            <span>PHP</span>
                        </div>
                        <div>
                            70%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.CPlusPlus />
                            <span>C++</span>
                        </div>
                        <div>
                            70%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.Python />
                            <span>Python</span>
                        </div>
                        <div>
                            70%
                        </div>
                    </div>
                </li>
            </ul>
            <h3 className="hidden">Bases de datos</h3>
            <ul style={{ display: tab == "db" ? "block" : "none" }}>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.MongoDB />
                            <span>MongoDB</span>
                        </div>
                        <div>
                            95%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.MongoDB />
                            <span>Mongoose</span>
                        </div>
                        <div>
                            90%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.Prisma />
                            <span>Prisma ORM</span>
                        </div>
                        <div>
                            90%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.PostgreSQL />
                            <span>PostgreSQL</span>
                        </div>
                        <div>
                            85%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.MySQL />
                            <span>MySQL</span>
                        </div>
                        <div>
                            80%
                        </div>
                    </div>
                </li>
            </ul>
            <h3 className="hidden">Plataformas</h3>
            <ul style={{ display: tab == "platforms" ? "block" : "none" }}>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.NextJS />
                            <span>NextJS</span>
                        </div>
                        <div>
                            95%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.React />
                            <span>React</span>
                        </div>
                        <div>
                            95%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.Azure />
                            <span>Azure</span>
                        </div>
                        <div>
                            90%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.WordPress />
                            <span>WordPress</span>
                        </div>
                        <div>
                            90%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.NodeJS />
                            <span>NodeJS</span>
                        </div>
                        <div>
                            85%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.Vercel />
                            <span>Vercel</span>
                        </div>
                        <div>
                            75%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.GitHub />
                            <span>Github</span>
                        </div>
                        <div>
                            75%
                        </div>
                    </div>
                </li>
            </ul>
            <h3 className="hidden">Herramientas</h3>
            <ul style={{ display: tab == "tools" ? "block" : "none" }}>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.VSCode />
                            <span>VSCode</span>
                        </div>
                        <div>
                            95%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.Git />
                            <span>Git</span>
                        </div>
                        <div>
                            90%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.MOffice />
                            <span>Microsoft Office</span>
                        </div>
                        <div>
                            90%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.Figma />
                            <span>Figma</span>
                        </div>
                        <div>
                            50%
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.Docker />
                            <span>Docker</span>
                        </div>
                        <div>
                            40%
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </>
}

export default TabsKnowledge;