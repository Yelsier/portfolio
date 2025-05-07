"use client"

import { JSX, SVGProps, useState } from "react";
import styles from "./Knowledge.module.css"
import icons from "../Components/SVGIcons";

const skillsList: { [key: string]: { title: string, percent: string, icon: (props: SVGProps<SVGSVGElement>) => JSX.Element }[] } = {
    "Código": [
        {
            title: "HTML",
            percent: "Avanzado",
            icon: icons.HTML
        },
        {
            title: "CSS",
            percent: "Avanzado",
            icon: icons.CSS
        },
        {
            title: "TypeScript",
            percent: "Avanzado",
            icon: icons.TypeScript
        },
        {
            title: "Java",
            percent: "Avanzado",
            icon: icons.Java
        },
        {
            title: "C#",
            percent: "Intermedio",
            icon: icons.CSharp
        },
        {
            title: "PHP",
            percent: "Intermedio",
            icon: icons.PHP
        },
        {
            title: "C++",
            percent: "Básico",
            icon: icons.CPlusPlus
        },
        {
            title: "Python",
            percent: "Básico",
            icon: icons.Python
        }
    ],
    "Bases de datos": [
        {
            title: "MongoDB",
            percent: "Avanzado",
            icon: icons.MongoDB
        },
        {
            title: "Mongoose",
            percent: "Avanzado",
            icon: icons.MongoDB
        },
        {
            title: "Prisma ORM",
            percent: "Avanzado",
            icon: icons.Prisma
        },
        {
            title: "PostgreSQL",
            percent: "Intermedio",
            icon: icons.PostgreSQL
        },
        {
            title: "MySQL",
            percent: "Intermedio",
            icon: icons.MySQL
        }
    ],
    "Plataformas": [
        {
            title: "NextJS",
            percent: "Avanzado",
            icon: icons.NextJS
        },
        {
            title: "React",
            percent: "Avanzado",
            icon: icons.React
        },
        {
            title: "Azure",
            percent: "Intermedio",
            icon: icons.Azure
        },
        {
            title: "WordPress",
            percent: "Avanzado",
            icon: icons.WordPress
        },
        {
            title: "NodeJS",
            percent: "Avanzado",
            icon: icons.NodeJS
        },
        {
            title: "Vercel",
            percent: "Intermedio",
            icon: icons.Vercel
        },
        {
            title: "Github",
            percent: "Intermedio",
            icon: icons.GitHub
        }
    ],
    "Herramientas": [
        {
            title: "VSCode",
            percent: "Avanzado",
            icon: icons.VSCode
        },
        {
            title: "Git",
            percent: "Avanzado",
            icon: icons.Git
        },
        {
            title: "Microsoft Office",
            percent: "Intermedio",
            icon: icons.MOffice
        },
        {
            title: "Figma",
            percent: "Básico",
            icon: icons.Figma
        },
        {
            title: "Docker",
            percent: "Básico",
            icon: icons.Docker
        }
    ]
}

const TabsKnowledge = () => {

    const [tab, setTab] = useState("Código");

    return <div data-testid="tabs-knowledge">
        <nav className={styles.tabs}>
            <ul>
                {Object.keys(skillsList).map((key) => {
                    return <li key={`${key}_menu`} onClick={() => setTab(key)} className={`${tab == key ? styles.current : ""}`}>{key}</li>
                })}
            </ul>
        </nav>
        <div className={styles.tabContent}>
            {Object.keys(skillsList).map((key) => {
                return <div key={`${key}_list`}>
                    <h3 className="hidden">{key}</h3>
                    <ul style={{ display: tab == key ? "block" : "none" }} >
                        {skillsList[key].map((skill) => (
                            <li key={skill.title}>
                                <div className={styles.decorText}></div>
                                <div className={styles.contentList}>
                                    <div className="flex items-center gap-4">
                                        <skill.icon />
                                        <h4>{skill.title}</h4>
                                    </div>
                                    <div>
                                        {skill.percent}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            })}
        </div>
    </div>
}

export default TabsKnowledge;