import Header from "./Header/Header";
import About from "./About/About";
import Knowledge from "./Knowledge/Knowledge";
import Projects from "./Projects/Projects";
import Home from "./Home/Home";

export default function Page() {
    return <>
        <Header />
        <Home />
        <About />
        <Knowledge />
        <Projects />
    </>
}
