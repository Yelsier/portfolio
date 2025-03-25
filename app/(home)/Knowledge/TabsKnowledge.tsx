"use client"

import { JSX, SVGProps, useState } from "react";
import styles from "./Knowledge.module.css"
import icons from "../Components/SVGIcons";

const skillsList: { [key: string]: { title: string, percent: number, icon: (props: SVGProps<SVGSVGElement>) => JSX.Element }[] } = {
    "Código": [
        {
            title: "HTML",
            percent: 100,
            icon: icons.HTML
        },
        {
            title: "CSS",
            percent: 100,
            icon: icons.CSS
        },
        {
            title: "TypeScript",
            percent: 95,
            icon: icons.TypeScript
        },
        {
            title: "Java",
            percent: 90,
            icon: icons.Java
        },
        {
            title: "C#",
            percent: 90,
            icon: icons.CSharp
        },
        {
            title: "PHP",
            percent: 70,
            icon: icons.PHP
        },
        {
            title: "C++",
            percent: 70,
            icon: icons.CPlusPlus
        },
        {
            title: "Python",
            percent: 70,
            icon: icons.Python
        }
    ],
    "Bases de datos": [
        {
            title: "MongoDB",
            percent: 95,
            icon: icons.MongoDB
        },
        {
            title: "Mongoose",
            percent: 90,
            icon: icons.MongoDB
        },
        {
            title: "Prisma ORM",
            percent: 90,
            icon: icons.Prisma
        },
        {
            title: "PostgreSQL",
            percent: 85,
            icon: icons.PostgreSQL
        },
        {
            title: "MySQL",
            percent: 80,
            icon: icons.MySQL
        }
    ],
    "Plataformas": [
        {
            title: "NextJS",
            percent: 95,
            icon: icons.NextJS
        },
        {
            title: "React",
            percent: 95,
            icon: icons.React
        },
        {
            title: "Azure",
            percent: 90,
            icon: icons.Azure
        },
        {
            title: "WordPress",
            percent: 90,
            icon: icons.WordPress
        },
        {
            title: "NodeJS",
            percent: 85,
            icon: icons.NodeJS
        },
        {
            title: "Vercel",
            percent: 75,
            icon: icons.Vercel
        },
        {
            title: "Github",
            percent: 75,
            icon: icons.GitHub
        }
    ],
    "Herramientas": [
        {
            title: "VSCode",
            percent: 95,
            icon: icons.VSCode
        },
        {
            title: "Git",
            percent: 90,
            icon: icons.Git
        },
        {
            title: "Microsoft Office",
            percent: 90,
            icon: icons.MOffice
        },
        {
            title: "Figma",
            percent: 50,
            icon: icons.Figma
        },
        {
            title: "Docker",
            percent: 40,
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
                                        {skill.percent}%
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