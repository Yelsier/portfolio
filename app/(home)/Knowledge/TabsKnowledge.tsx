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
            <h3 className="hidden">Código</h3>
            <ul style={{ display: tab == "codigo" ? "block" : "none" }}>
                <li>
                    <div className={styles.decorText}></div>
                    <div className={styles.contentList}>
                        <div className="flex items-center gap-4">
                            <icons.HTML />
                            <h4>HTML</h4>
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
                            <h4>CSS</h4>
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
                            <h4>TypeScript</h4>
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
                            <h4>Java</h4>
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
                            <h4>C#</h4>
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
                            <h4>PHP</h4>
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
                            <h4>C++</h4>
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
                            <h4>Python</h4>
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
                            <h4>MongoDB</h4>
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
                            <h4>Mongoose</h4>
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
                            <h4>Prisma ORM</h4>
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
                            <h4>PostgreSQL</h4>
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
                            <h4>MySQL</h4>
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
                            <h4>NextJS</h4>
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
                            <h4>React</h4>
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
                            <h4>Azure</h4>
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
                            <h4>WordPress</h4>
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
                            <h4>NodeJS</h4>
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
                            <h4>Vercel</h4>
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
                            <h4>Github</h4>
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
                            <h4>VSCode</h4>
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
                            <h4>Git</h4>
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
                            <h4>Microsoft Office</h4>
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
                            <h4>Figma</h4>
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
                            <h4>Docker</h4>
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