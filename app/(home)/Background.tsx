"use client";
import React, { useEffect, useState } from "react";

interface GlitchSquare {
    id: number;
    x: number; // Posición horizontal
    y: number; // Posición vertical
    width: number; // Ancho del cuadrado
    height: number; // Alto del cuadrado
    opacity: number; // Opacidad del cuadrado
}

const maxOpacity = 0.2;
const minOpacity = 0.1;

const maxSquares = 30;

const maxWidth = 5; // Máximo ancho en porcentaje
const minWidth = 2; // Mínimo ancho en porcentaje

const maxHeight = 700;
const minHeight = 200;

const GlitchEffect: React.FC = () => {
    const [squares, setSquares] = useState<GlitchSquare[]>([]);

    useEffect(() => {
        // Función para generar cuadrados
        const generateSquares = (count: number) => {
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
                        y: Math.random() * 100, // Posición vertical aleatoria (puedes fijarla si quieres)
                        width: 100 - currentX, // Ancho restante
                        height: Math.random() * (maxHeight - minHeight) + minHeight,
                        opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
                    });
                    break
                };

                newSquares.push({
                    id: i,
                    x: currentX,
                    y: Math.random() * 100, // Posición vertical aleatoria (puedes fijarla si quieres)
                    width,
                    height: Math.random() * (maxHeight - minHeight) + minHeight,
                    opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
                });

                // Actualizar el puntero para el siguiente cuadrado
                currentX += width;
            }

            return newSquares;
        };

        setSquares(generateSquares(maxSquares));
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
                    key={square.id}
                    style={{
                        position: "absolute",
                        top: `0`,
                        left: `${square.x}%`,
                        width: `${square.width}%`,
                        height: `${square.height}px`,
                        backgroundColor: "white",
                        opacity: square.opacity,
                        transform: "translateY(0) translateX(0)", // Evitar desplazamientos
                        pointerEvents: "none", // Evitar que interfiera con eventos
                    }}
                />
            ))}
        </div>
    );
};

export default GlitchEffect;
