"use client"
import { useMotionValue, animate, motion } from "framer-motion";
import { useState, useEffect, Fragment } from "react";
import useMeasure from "react-use-measure";
import { JSX } from "react/jsx-runtime";


const DEFAULT_FAST_DURATION = 35
const DEFAULT_SLOW_DURATION = 90
const DEFAULT_GAP = 50

const Slider: React.FC<{ elements: JSX.Element[], name: string, gap?: number, fastDuration?: number, slowDuration?: number }> = ({ elements, name, gap, fastDuration, slowDuration }) => {

    const [duration, setDuration] = useState((fastDuration || DEFAULT_FAST_DURATION))

    const [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        const finalPosition = -width / 2 - (gap || DEFAULT_GAP);

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                duration: duration * (1 - xTranslation.get() / finalPosition),
                ease: "linear",
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                }
            });
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 0
            });
        }

        return controls?.stop;
    }, [xTranslation, width, duration, rerender])

    return <>
        <div className={"py-5"}>
            <motion.div
                className={`flex w-max`}
                ref={ref}
                style={{ x: xTranslation, gap: gap || DEFAULT_GAP }}
                key={"carousel"}
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration((slowDuration || DEFAULT_SLOW_DURATION));
                }}
                onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration((fastDuration || DEFAULT_FAST_DURATION));
                }}
            >
                {[...elements, ...elements].map((element, index) => {
                    return <Fragment key={name + "_" + index}>{element}</Fragment>
                })}
            </motion.div>
        </div>
    </>
}

export default Slider;