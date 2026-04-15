"use client";

import { useState, FormEvent } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (cidade: string) => void;
  isLoading: boolean;
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [cidade, setCidade] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (cidade.trim()) {
      onSearch(cidade.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Digite o nome de uma cidade..."
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        className={styles.input}
      />
      <button type="submit" disabled={isLoading} className={styles.button}>
        {isLoading ? "Buscando..." : "Buscar"}
      </button>
    </form>
  );
}
