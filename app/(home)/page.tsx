import Header from "./Header/Header";
import About from "./About/About";
import Knowledge from "./Knowledge/Knowledge";
import Projects from "./Projects/Projects";
import Home from "./Home/Home";
import Transition from "./Components/Transition";

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <Home />
                <About />
                <Transition FromElement={<Knowledge />} ToElement={<Projects />} />
            </main>
        </>
    );
}

