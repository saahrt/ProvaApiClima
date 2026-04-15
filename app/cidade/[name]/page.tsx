import WeatherCard from "@/components/WeatherCard";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import Link from "next/link";
import styles from "./page.module.css";

async function getWeatherData(cidade: string) {
  const key = process.env.NEXT_PUBLIC_WEATHER_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`;
  
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function CidadePage({ params }: { params: { name: string } }) {
  const data = await getWeatherData(params.name);

  return (
    <div className={styles.wrapper}>
      <Cabecalho />
      
      <main className={styles.principal}>
        <div className={styles.header}>
          <Link href="/" className={styles.voltar}>← Voltar</Link>
          <h1 className={styles.titulo}>Detalhes da Cidade</h1>
        </div>

        {data ? (
          <div className={styles.resultado}>
            <WeatherCard
              cidade={data.name}
              pais={data.sys.country}
              temperatura={data.main.temp}
              sensacao={data.main.feels_like}
              descricao={data.weather[0].description}
              icone={data.weather[0].icon}
              umidade={data.main.humidity}
              vento={data.wind.speed}
              showLink={false}
            />
          </div>
        ) : (
          <p className={styles.erro}>Dados não encontrados para esta cidade.</p>
        )}
      </main>

      <Rodape />
    </div>
  );
}
