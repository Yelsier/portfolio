import styles from "./Knowledge.module.css"
import TabsKnowledge from "./TabsKnowledge";
import SectionTitle from "../Components/SectionTitle";

const Knowledge = () => {

    return <section id="knowledge" className={`pt-32 2xl:pt-20 ${styles.knowledge}`}>
        <div className={styles.decorBottom}>
            {"///"} SKILLS.MODULE
            <br />
            loading...
        </div>
        <div className="mx-auto w-4/5 max-w-[1200px] relative">
            <SectionTitle>CONOCIMIENTOS</SectionTitle>
            <TabsKnowledge />
        </div>
    </section>
}

export default Knowledge;