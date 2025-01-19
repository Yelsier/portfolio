import localFont from "next/font/local";
import styles from "./Knowledge.module.css"
import TabsKnowledge from "./TabsKnowledge";

const REFINERY = localFont({ src: '../../../public/fonts/Refinery-25.ttf' })

const Knowledge = () => {

    return <section id="knowledge" className={`${styles.knowledge}`}>
        <div className={styles.decorBottom}>
        /// SKILLS.MODULE
            <br />
            loading...
        </div>
        <div className="mx-auto w-4/5 max-w-[1200px] relative">
            <h2 style={REFINERY.style} className={"text-white mb-10 text-7xl"}>CONOCIMIENTOS</h2>
            <TabsKnowledge />
        </div>
    </section>
}

export default Knowledge;