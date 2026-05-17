"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {

  const colores = [
    "#ef4444",
    "#3b82f6",
    "#22c55e",
    "#f97316",
    "#a855f7",
    "#eab308",
    "#ec4899",
    "#14b8a6",
    "#f43f5e",
    "#8b5cf6"
  ];

  const [jugadores, setJugadores] = useState(
    Array.from({ length: 2 }, (_, i) => ({
      nombre: `Jugador ${i + 1}`,
      puntos: 0,
      color: colores[i]
    }))
  );

  const cambiarCantidad = (num: number) => {

    setJugadores(
      Array.from({ length: num }, (_, i) => ({
        nombre: `Jugador ${i + 1}`,
        puntos: 0,
        color: colores[i]
      }))
    );

  };

  const sumar = (index: number) => {

    const copia = [...jugadores];
    copia[index].puntos++;
    setJugadores(copia);

  };

  const restar = (index: number) => {

    const copia = [...jugadores];

    if (copia[index].puntos > 0) {
      copia[index].puntos--;
    }

    setJugadores(copia);

  };

  const reiniciar = () => {

    setJugadores(
      jugadores.map((j) => ({
        ...j,
        puntos: 0
      }))
    );

  };

  return (

    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0f172a, #111827)",
        color: "white",
        padding: 20
      }}
    >

      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto"
        }}
      >

        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
            background: "#111827",
            padding: 20,
            borderRadius: 20,
            border: "1px solid #334155"
          }}
        >

          <h1
            style={{
              fontSize: 35,
              fontWeight: "bold"
            }}
          >
            🎱 LIBRES PWA
          </h1>

          <div
            style={{
              display: "flex",
              gap: 20
            }}
          >

            <Link
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              Inicio
            </Link>

            <Link
              href="/reglas"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              Reglas
            </Link>

          </div>

        </nav>

        <div
          style={{
            textAlign: "center",
            marginBottom: 40
          }}
        >

          <h2
            style={{
              fontSize: 50,
              marginBottom: 10
            }}
          >
            Contador de Billar Libre
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: 18
            }}
          >
            Administra partidas de hasta 10 jugadores
          </p>

        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 30
          }}
        >

          {[2,4,6,8,10].map((num) => (

            <button
              key={num}
              onClick={() => cambiarCantidad(num)}
              style={{
                padding: "14px 22px",
                background: "#1e293b",
                border: "1px solid #475569",
                color: "white",
                borderRadius: 14,
                cursor: "pointer",
                fontWeight: "bold",
                transition: "0.3s"
              }}
            >
              {num} jugadores
            </button>

          ))}

        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 40
          }}
        >

          <button
            onClick={reiniciar}
            style={{
              background: "#dc2626",
              border: "none",
              color: "white",
              padding: "14px 28px",
              borderRadius: 14,
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            Reiniciar partida
          </button>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: 25
          }}
        >

          {jugadores.map((jugador, index) => (

            <div
              key={index}
              style={{
                background: "#1e293b",
                borderRadius: 28,
                padding: 25,
                borderTop: `10px solid ${jugador.color}`,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.4)"
              }}
            >

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20
                }}
              >

                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: jugador.color
                  }}
                />

                <h2>{jugador.nombre}</h2>

              </div>

              <h1
                style={{
                  fontSize: 75,
                  textAlign: "center",
                  marginBottom: 25
                }}
              >
                {jugador.puntos}
              </h1>

              <div
                style={{
                  display: "flex",
                  gap: 12
                }}
              >

                <button
                  onClick={() => restar(index)}
                  style={{
                    flex: 1,
                    padding: 15,
                    borderRadius: 14,
                    border: "none",
                    background: "#334155",
                    color: "white",
                    fontSize: 22,
                    cursor: "pointer"
                  }}
                >
                  -
                </button>

                <button
                  onClick={() => sumar(index)}
                  style={{
                    flex: 1,
                    padding: 15,
                    borderRadius: 14,
                    border: "none",
                    background: jugador.color,
                    color: "white",
                    fontSize: 22,
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                >
                  +
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  );
}