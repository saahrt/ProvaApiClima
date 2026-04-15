import Link from "next/link";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import styles from "./page.module.css";

export default function SobrePage() {
  return (
    <div className={styles.wrapper}>
      <Cabecalho />
      
      <main className={styles.principal}>
        <div className={styles.card}>
          <h1 className={styles.titulo}>Sobre o Projeto</h1>
          
          <div className={styles.info}>
            <p><strong>Nome:</strong> Raynna Sarah Basilio Almeida</p>
            <p><strong>Matrícula:</strong> 2421560991007</p>
            <p><strong>Curso:</strong> Sistemas para Internet - 4° período</p>
            <p><strong>Instituição:</strong> FAETERJ – Unidade Barra Mansa</p>
          </div>

          <p className={styles.descricao}>
            Este projeto é um mini portal de previsão do tempo desenvolvido como parte da avaliação prática
            da disciplina de Programação e Design para Web II. O objetivo é demonstrar o uso do Next.js 14,
            consumo de APIs externas e estruturação de componentes reutilizáveis.
          </p>

          <Link href="/" className={styles.botaoVoltar}>
            Voltar para a Página Principal
          </Link>
        </div>
      </main>

      <Rodape />
    </div>
  );
}
