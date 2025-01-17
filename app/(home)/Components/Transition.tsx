"use client"

import { useScroll, useMotionValueEvent, useTransform, useMotionTemplate, motion } from "framer-motion";
import { useRef, useState } from "react";

const Transition: React.FC<{ FromElement: React.ReactNode, ToElement: React.ReactNode }> = ({ FromElement, ToElement }) => {
    const element1ContainerRef = useRef(null);
    const element1Ref = useRef<HTMLDivElement>(null);
    const element2Ref = useRef<HTMLDivElement>(null);
    const [isFixed, setIsFixed] = useState(false); // Estado para controlar la posición
    const [isEnd, setIsEnd] = useState(false);

    const { scrollYProgress } = useScroll({
        target: element1ContainerRef,
        offset: ["end end", "end start"], // Detecta cuando el final de element1 llega al final del viewport
    });

    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        setIsFixed(progress !== 0)
        setIsEnd(progress === 1)
    })

    const scroll = useTransform(scrollYProgress, [0, 1], [-70, 140]);
    const scroll2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const scroll3 = useTransform(scrollYProgress, [0, 1], [-30, 120]);

    const clipPath = useMotionTemplate`
    polygon(0 0, ${scroll}% 0%, ${scroll}% 15%, ${scroll2}% 15%, ${scroll2}% 30%, ${scroll3}% 30%, ${scroll3}% 50%, ${scroll}% 50%, ${scroll}% 65%, ${scroll3}% 65%, ${scroll3}% 80%, ${scroll2}% 80%, ${scroll2}% 100%, 0 100%)
    `;

    return (
        <>
            <div className="relative">
                {/* Aplicamos posición fija si `isFixed` es true */}
                <div ref={element1ContainerRef} style={{ height: element1Ref?.current?.offsetHeight }}>
                    <motion.div
                        ref={element1Ref}
                        style={isFixed && !isEnd ? { position: "fixed", bottom: 0, left: 0, width: "100%" } : {}}
                    >
                        {FromElement}
                    </motion.div>
                </div>
                <div className="pointer-events-none" style={{ height: element2Ref?.current?.offsetHeight }}>
                    <div
                        style={isFixed && !isEnd ? { position: "fixed", bottom: 0, left: 0, width: "100%" } : {}}
                    >
                        <motion.div
                            style={{ clipPath }}
                            ref={element2Ref}>
                            {ToElement}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Transition;