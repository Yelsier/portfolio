"use client";
import React, { CSSProperties, useEffect, useState } from "react";
import styles from "./Background.module.css";

interface GlitchSquare {
    id: number;
    x: number; // Posición horizontal
    y: number; // Posición vertical
    width: number; // Ancho del cuadrado
    height: number; // Alto del cuadrado
    opacity: number; // Opacidad del cuadrado
    color: "white" | "gray"; // Color del cuadrado
    animationDelay?: number; // Retraso de la animación
    animationLength?: number; // Largo al que se reduce el cuadrado (entre 1 y minAnimationLength)
}

const maxOpacity = 0.1;
const minOpacity = 0.05;

const maxSquares = 40;

const maxWidth = 8; // Máximo ancho en porcentaje
const minWidth = 4; // Mínimo ancho en porcentaje

const maxHeight = 500;
const minHeight = 200;

const maxAnimationDelay = 2;
const minAnimationLength = 0.3;

const GlitchEffect: React.FC = () => {
    const [squares, setSquares] = useState<GlitchSquare[]>([]);

    useEffect(() => {
        // Función para generar cuadrados
        const generateSquares = (count: number, color: "white" | "gray", yPosition: number) => {
            const newSquares: GlitchSquare[] = [];
            let currentX = 0; // Puntero para el inicio de cada cuadrado

            for (let i = 0; i < count; i++) {
                // Generar ancho aleatorio
                const width = Math.random() * (maxWidth - minWidth) + minWidth;

                // Evitar que el siguiente cuadrado exceda el ancho total (100%)
                if (currentX + width > 100) {
                    newSquares.push({
                        id: i,
                        x: currentX,
                        y: yPosition,
                        width: 100 - currentX, // Ancho restante
                        height: Math.random() * (maxHeight - minHeight) + minHeight,
                        opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
                        color,
                        animationDelay: Math.random() * maxAnimationDelay, // Retraso de la animación
                        animationLength: Math.random() * (1 - minAnimationLength) + minAnimationLength, // Largo de la animación
                    });
                    break;
                }

                newSquares.push({
                    id: i,
                    x: currentX,
                    y: yPosition,
                    width,
                    height: Math.random() * (maxHeight - minHeight) + minHeight,
                    opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
                    color,
                    animationDelay: Math.random() * maxAnimationDelay, // Retraso de la animación
                    animationLength: Math.random() * (1 - minAnimationLength) + minAnimationLength, // Largo de la animación
                });

                // Actualizar el puntero para el siguiente cuadrado
                currentX += width;
            }

            return newSquares;
        };

        const whiteSquares = generateSquares(maxSquares, "white", 0); // Blancos en la parte superior
        const blackSquares = generateSquares(maxSquares, "gray", 100); // Negros en la parte inferior

        setSquares([...whiteSquares, ...blackSquares]);
    }, []);

    return (
        <div
            style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            {squares.map((square) => (
                <div
                    className={styles.square}
                    key={square.id + square.color}
                    style={{
                        position: "absolute",
                        top: `${square.y === 0 ? 0 : "auto"}`, // Blancos arriba
                        bottom: `${square.y === 100 ? 0 : "auto"}`, // Negros abajo
                        left: `${square.x}%`,
                        width: `${square.width}%`,
                        height: `${square.height}px`,
                        backgroundColor: square.color,
                        opacity: square.opacity,
                        transform: "translateY(0) translateX(0)", // Evitar desplazamientos
                        pointerEvents: "none", // Evitar que interfiera con eventos
                        transformOrigin: `${square.y === 0 ? "top" : "bottom"}`,
                        animationDelay: `${square.animationDelay}s`,
                        "--animationLength": `${square.animationLength}`
                    } as CSSProperties}
                />
            ))}
        </div>
    );
};

export default GlitchEffect;
