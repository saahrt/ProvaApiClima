import styles from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <p className={styles.texto}>
          Clima Agora &mdash; Projeto acadêmico &bull; FAETERJ{" "}
          {new Date().getFullYear()}
        </p>
        <p className={styles.credito}>
          Dados fornecidos por{" "}
          <a
            href="https://open-meteo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-Meteo
          </a>
        </p>
      </div>
    </footer>
  );
}
