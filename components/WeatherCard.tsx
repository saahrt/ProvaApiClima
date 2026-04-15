import Link from "next/link";
import styles from "./WeatherCard.module.css";

interface WeatherCardProps {
  cidade: string;
  pais?: string;
  temperatura: number;
  sensacao: number;
  descricao: string;
  icone: string;
  umidade?: number;
  vento?: number;
  showLink?: boolean;
}

export default function WeatherCard({
  cidade,
  pais,
  temperatura,
  sensacao,
  descricao,
  icone,
  umidade,
  vento,
  showLink = false,
}: WeatherCardProps) {
  const iconUrl = `https://openweathermap.org/img/wn/${icone}@2x.png`;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.cidade}>{cidade}</h2>
          {pais && <span className={styles.pais}>{pais}</span>}
        </div>
        <img src={iconUrl} alt={descricao} className={styles.icon} />
      </div>
      
      <div className={styles.tempSection}>
        <span className={styles.temp}>{Math.round(temperatura)}°C</span>
        <span className={styles.desc}>{descricao}</span>
      </div>
      
      <div className={styles.details}>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Sensação</span>
          <span className={styles.detailValue}>{Math.round(sensacao)}°C</span>
        </div>
        {umidade !== undefined && (
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Umidade</span>
            <span className={styles.detailValue}>{umidade}%</span>
          </div>
        )}
        {vento !== undefined && (
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Vento</span>
            <span className={styles.detailValue}>{vento} m/s</span>
          </div>
        )}
      </div>

      {showLink && (
        <div className={styles.linkContainer}>
          <Link href={`/cidade/${encodeURIComponent(cidade)}`} className={styles.link}>
            Ver detalhes completos
          </Link>
        </div>
      )}
    </div>
  );
}
