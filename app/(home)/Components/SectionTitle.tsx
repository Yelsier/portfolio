import localFont from "next/font/local";

const REFINERY = localFont({ src: '../../../public/fonts/Refinery-25.ttf' })

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <h2 style={REFINERY.style} className={"text-white mb-10 text-5xl sm:text-7xl"}>{children}</h2>
}

export default SectionTitle;