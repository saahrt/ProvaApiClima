"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [clima, setClima] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const buscarClima = async (cidade: string) => {
    setLoading(true);
    setError("");
    setClima(null);

    const key = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Cidade não encontrada");
      const data = await res.json();
      setClima(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Cabecalho />
      
      <main className={styles.principal}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitulo}>WeatherNow</h1>
          <p className={styles.heroSubtitulo}>Consulte o clima em tempo real</p>
          
          <SearchBar onSearch={buscarClima} isLoading={loading} />
          
          <div className={styles.navigation}>
             <Link href="/sobre" className={styles.sobreLink}>Sobre o Projeto</Link>
          </div>
        </section>

        {error && <p className={styles.erro}>{error}</p>}

        {clima && (
          <div className={styles.resultado}>
            <WeatherCard
              cidade={clima.name}
              temperatura={clima.main.temp}
              sensacao={clima.main.feels_like}
              descricao={clima.weather[0].description}
              icone={clima.weather[0].icon}
              showLink={true}
            />
          </div>
        )}
      </main>

      <Rodape />
    </div>
  );
}
