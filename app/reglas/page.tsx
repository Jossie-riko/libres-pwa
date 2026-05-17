import Link from "next/link";

export default function Reglas() {

  return (

    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0f172a, #111827)",
        color: "white",
        padding: 30
      }}
    >

      <div
        style={{
          maxWidth: 1000,
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
              fontSize: 35
            }}
          >
            📜 REGLAS
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
            background: "#1e293b",
            borderRadius: 30,
            padding: 40,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.4)"
          }}
        >

          <h2
            style={{
              fontSize: 40,
              marginBottom: 25
            }}
          >
            🎱 Modo Libre
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              fontSize: 18,
              color: "#cbd5e1"
            }}
          >
            En el modo libre cada jugador suma puntos durante la partida.
            El objetivo es alcanzar primero el puntaje acordado antes de iniciar.
          </p>

          <div
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 20
            }}
          >

            <div
              style={{
                background: "#0f172a",
                padding: 25,
                borderRadius: 20
              }}
            >
              <h3>👥 Jugadores</h3>
              <p>2, 4, 6, 8 o 10 jugadores.</p>
            </div>

            <div
              style={{
                background: "#0f172a",
                padding: 25,
                borderRadius: 20
              }}
            >
              <h3>➕ Puntos</h3>
              <p>Cada jugador puede sumar o restar puntos.</p>
            </div>

            <div
              style={{
                background: "#0f172a",
                padding: 25,
                borderRadius: 20
              }}
            >
              <h3>🔄 Reinicio</h3>
              <p>La partida puede reiniciarse en cualquier momento.</p>
            </div>

          </div>

        </div>

      </div>

    </main>

  );
}