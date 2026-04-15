# WeatherNow — Portal de Clima

Este é um mini portal de previsão do tempo desenvolvido com **Next.js 14** (App Router) e **TypeScript** para a prova prática da disciplina de Programação e Design para Web II na FAETERJ.

## Funcionalidades

- Busca de clima atual por cidade (Nome, Temperatura, Sensação, Descrição, Ícone).
- Detalhes avançados em rota dinâmica (Umidade, Vento, País).
- Design sóbrio e responsivo.
- Consumo da API do OpenWeatherMap.

## Configuração da API Key

Para rodar o projeto localmente, você precisa configurar sua chave de API do OpenWeatherMap:

1. Crie um arquivo chamado `.env.local` na raiz do projeto.
2. Adicione a sua chave de API no seguinte formato:
   ```env
   NEXT_PUBLIC_WEATHER_KEY=sua_chave_aqui
   ```

*Nota: O arquivo `.env.local` está configurado no `.gitignore` para não ser enviado ao repositório.*

## Como Executar Localmente

Siga os passos abaixo para rodar o projeto:

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

- `app/`: Contém as rotas e layouts da aplicação (App Router).
- `components/`: Componentes reutilizáveis como `WeatherCard` e `SearchBar`.
- `public/`: Arquivos estáticos.
- `.env.local`: Variáveis de ambiente (Chave da API).

---
**Desenvolvido por:** Raynna Sarah Basilio Almeida
**Disciplina:** Programação e Design para Web II - FAETERJ
