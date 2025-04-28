# Portfólio Pessoal - Davi Silva dos Santos

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg) ![Languages](https://img.shields.io/badge/Idiomas-5-brightgreen.svg) **Navegação Rápida:** [🇧🇷 Português](#-português-brasil---versão-principal) | [🇬🇧 English](#-english-version) | [🇪🇸 Español](#-versión-en-español) | [🇫🇷 Français](#-version-française) | [🇩🇪 Deutsch](#-deutsche-version)

*(Data da última atualização deste README: 28 de Abril de 2025, 20:26 - Horário de Brasília)*

---

## 🇧🇷 Português (Brasil) - Versão Principal

### Visão Geral

Este repositório contém o código-fonte do meu portfólio pessoal como Analista de Dados Júnior. O objetivo principal é apresentar minhas habilidades, projetos e experiência em Data Analysis e Data Science de forma profissional, moderna e interativa.

O site foi desenvolvido com foco em design minimalista, responsividade (Mobile First), performance e uma experiência de usuário agradável, incluindo suporte multi-idioma e temas de cores dinâmicos baseados no idioma selecionado.

### 🚀 Demo Online

Você pode visualizar a versão ao vivo do portfólio aqui:
**[Link para o Deploy]** (Ex: `https://davi-portfolio.netlify.app/`)

### 📸 Screenshots

*Instrução: Insira aqui screenshots do seu portfólio em desktop e mobile, talvez mostrando diferentes temas de cores.*

**(Desktop - Tema PT-BR)**
![Screenshot Desktop](images/placeholder-desktop.png)

**(Mobile - Tema EN)**
![Screenshot Mobile](images/placeholder-mobile.png)

### ✨ Funcionalidades Principais

* **Design Responsivo:** Totalmente adaptável a diferentes tamanhos de tela (Mobile First).
* **UI/UX Moderna:** Estilo minimalista e limpo, com animações suaves e microinterações.
* **Multi-idioma:**
    * Suporte para Português (pt-BR), Inglês (en), Espanhol (es), Francês (fr) e Alemão (de).
    * Detecção automática do idioma do navegador.
    * Seleção manual de idioma via botões no cabeçalho.
* **Temas Dinâmicos:** Esquema de cores da interface adaptado automaticamente com base no idioma selecionado, usando cores representativas.
* **Modo Escuro:** Adaptação automática ao tema escuro do sistema operacional do usuário (`prefers-color-scheme`).
* **Seções Principais:** Apresentação (Hero), Projetos em Destaque, Habilidades Técnicas e Formulário de Contato.
* **Integração com Backend (Supabase):** O formulário de contato envia os dados diretamente para uma tabela no Supabase.
* **SEO Básico:** Título (`<title>`) e meta descrição (`<meta name="description">`) atualizados dinamicamente conforme o idioma.
* **Performance:**
    * Construído sem frameworks JS pesados (Vanilla JS).
    * Uso de CSS moderno (Flexbox, Grid, Variáveis).
    * Lazy loading para imagens dos projetos.
    * Animações de entrada acionadas via Intersection Observer.
* **Página de Direitos Autorais:** Página dedicada (`rights.html`) com termos de uso, também multi-idioma e integrada ao tema.

### 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização moderna.
    * Flexbox e Grid Layout para responsividade.
    * Variáveis CSS (Custom Properties) para temas dinâmicos e manutenção.
    * Media Queries (`prefers-color-scheme` para Dark Mode).
    * Transições e Animações CSS.
* **JavaScript (Vanilla ES6+):**
    * Manipulação do DOM.
    * Lógica de tradução e troca de temas.
    * Detecção de idioma do navegador e `localStorage`.
    * Intersection Observer API para animações de scroll.
    * Fetch API (implícita no cliente Supabase) para envio do formulário.
* **Supabase:** Plataforma BaaS (Backend as a Service) utilizada para:
    * Armazenar envios do formulário de contato em um banco de dados PostgreSQL.
    * API para interagir com o banco de dados via JavaScript.
* **Google Fonts:** Para as fontes 'Poppins' e 'Roboto'.
* **Git & GitHub:** Controle de versão e hospedagem do código.

*(Nenhum framework como React, Vue, Angular, etc., foi utilizado neste projeto.)*

### 📂 Estrutura do Projeto

.
├── images/             # Imagens de preview dos projetos, placeholders, etc.
├── index.html          # Página principal do portfólio
├── rights.html         # Página de Direitos Autorais e Termos de Uso
├── style.css           # Folha de estilos única para todo o site
├── script.js           # Script JavaScript único com toda a lógica
├── supabase_schema.sql # Script SQL para criar a tabela no Supabase
└── README.md           # Este arquivo de documentação


### ⚙️ Configuração e Instalação Local

Para rodar este projeto localmente, siga os passos abaixo:

**Pré-requisitos:**
* Um navegador web moderno (Chrome, Firefox, Edge, Safari).
* Git instalado (opcional, para clonar).
* Uma conta gratuita no [Supabase](https://supabase.com/).

**Passos:**

1.  **Clone o Repositório:**
    ```bash
    git clone [Link para seu Repositório GitHub]
    cd nome-da-pasta-do-repositorio
    ```
    Ou baixe o ZIP diretamente do GitHub.

2.  **Configure o Supabase:**
    * Crie um novo projeto no [Supabase](https://supabase.com/).
    * No painel do seu projeto, vá para **Project Settings** (ícone de engrenagem na barra lateral esquerda) > **API**.
    * Copie a **Project URL** e a **Project API Keys** (`anon` `public`).
    * Abra o arquivo `script.js` no seu editor de código.
    * Localize as constantes `SUPABASE_URL` e `SUPABASE_ANON_KEY` (próximo ao topo do arquivo).
    * **Substitua** as strings `'SUA_SUPABASE_URL'` e `'SUA_SUPABASE_ANON_KEY'` pelas suas credenciais copiadas do Supabase. **Atenção:** Mantenha as aspas.
    * No painel do Supabase, vá para **SQL Editor** (ícone de terminal na barra lateral).
    * Clique em **+ New query**.
    * Copie todo o conteúdo do arquivo `supabase_schema.sql` deste repositório.
    * Cole o código SQL no editor do Supabase e clique em **RUN**. Isso criará a tabela `contact_submissions`.
    * **IMPORTANTE (Segurança):**
        * Vá para **Authentication** (ícone de usuários) > **Policies**.
        * Encontre a tabela `contact_submissions`. Se o RLS (Row Level Security) não estiver habilitado, **habilite-o**.
        * Certifique-se de que a política chamada `"Allow anonymous inserts"` (criada pelo script SQL) existe e está habilitada para a role `anon` na operação `INSERT`. **Esta etapa é crucial para permitir que o formulário funcione e para proteger seu banco de dados.**

3.  **Execute Localmente:**
    * Simplesmente abra o arquivo `index.html` diretamente no seu navegador web.
    * O site deve carregar, e o formulário de contato agora deve enviar dados para a sua tabela no Supabase.

### 🔧 Configuração e Personalização

Veja como adaptar o portfólio com suas informações:

* **Informações Pessoais:**
    * **Nome:** Edite o nome nos rodapés de `index.html` e `rights.html` e na chave `footerOwnerName` no objeto `translations` em `script.js`.
    * **Título do Cargo:** Edite o texto dentro da tag `<p class="job-title">` em `index.html` e atualize a chave `jobTitle` em `translations` (em `script.js`) para todos os idiomas.
    * **Links Sociais e Contato:** Atualize os links `href` dentro da `div.social-links` nos rodapés de `index.html` e `rights.html`.

* **Projetos:**
    * **Estrutura:** Em `index.html`, localize a seção `id="projects"`. Cada projeto está dentro de um `<article class="project-card">`.
    * **Imagem:** Altere o `src` e `alt` da tag `<img>`. Coloque suas imagens na pasta `images/`. Use nomes descritivos.
    * **Título e Descrição:** Edite os atributos `data-translate` (ex: `project1Title`, `project1Desc`). **Lembre-se** de adicionar ou modificar as chaves correspondentes no objeto `translations` em `script.js` para todos os idiomas.
    * **Link:** Atualize o `href` na tag `<a>` do botão "Ver Projeto".
    * **Adicionar/Remover:** Copie/cole ou remova blocos `<article class="project-card">` inteiros. Se adicionar, crie novas chaves de tradução (ex: `project4Title`, `project4Desc`) e adicione-as ao `script.js`.

* **Habilidades:**
    * Em `index.html`, localize a seção `id="skills"`. Cada skill está em uma `<div class="skill-item">`.
    * Edite o texto dentro da tag `<p>` (nome da skill).
    * **Ícone:** Substitua o conteúdo do `<span class="skill-icon">` pelo seu ícone preferido (recomenda-se usar SVG inline para melhor performance e escalabilidade, ou uma tag `<img>`). Ajuste o estilo no CSS se necessário.
    * **Adicionar/Remover:** Copie/cole ou remova blocos `<div class="skill-item">`.

* **Traduções:**
    * Abra `script.js`. O objeto `translations` contém todos os textos.
    * Para modificar um texto existente, encontre a chave correspondente (ex: `greeting`, `project1Desc`) dentro do idioma desejado (`pt-BR`, `en`, etc.) e altere o valor da string.
    * Para adicionar um novo texto traduzível:
        1.  No HTML (`index.html` ou `rights.html`), adicione o atributo `data-translate="suaNovaChaveUnica"` ao elemento HTML que conterá o texto.
        2.  Em `script.js`, adicione a chave `"suaNovaChaveUnica"` com o texto traduzido correspondente dentro de **cada** objeto de idioma (`pt-BR`, `en`, `es`, `fr`, `de`).
    * **Título e Descrição (SEO):** Edite as chaves `pageTitle` e `metaDescription` em `translations`.

* **Temas de Cores:**
    * Abra `style.css`.
    * As cores base (padrão/inglês) e as variáveis de modo escuro estão definidas em `:root` e `@media (prefers-color-scheme: dark)`.
    * Os temas para cada idioma são definidos nos seletores `html.lang-pt-BR`, `html.lang-es`, etc. Você pode ajustar os valores das variáveis CSS (`--primary-color`, `--secondary-color`, etc.) dentro desses blocos para mudar as cores de cada tema.

* **Tabela Supabase:** Se precisar alterar a estrutura da tabela (adicionar/remover colunas), edite o arquivo `supabase_schema.sql` e execute as alterações (comandos `ALTER TABLE`, etc.) no SQL Editor do Supabase. Lembre-se de ajustar a lógica de envio no `script.js` se adicionar novos campos ao formulário.

### ☁️ Deploy

Este é um site estático (HTML, CSS, JS) e pode ser facilmente hospedado em plataformas como:

* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)
* [GitHub Pages](https://pages.github.com/)

**Instruções Gerais:**

1.  Crie uma conta na plataforma escolhida.
2.  Conecte seu repositório GitHub.
3.  Configure as opções de build (normalmente, não são necessários comandos de build para este projeto).
4.  Faça o deploy.

**Considerações de Segurança (Supabase Keys):**

* A chave `SUPABASE_ANON_KEY` é considerada pública e segura para ser exposta no frontend **DESDE QUE** você tenha configurado corretamente o **Row Level Security (RLS)** e as **Policies** na sua tabela Supabase.
* **NUNCA** exponha sua `SUPABASE_SERVICE_ROLE_KEY` no código frontend.
* Se estiver usando um repositório GitHub **público**, esteja ciente de que sua `anon key` estará visível. A segurança depende inteiramente do RLS configurado no Supabase.

### ❗ Solução de Problemas (Troubleshooting)

* **Formulário não envia:**
    * Verifique se as credenciais `SUPABASE_URL` e `SUPABASE_ANON_KEY` em `script.js` estão corretas e sem erros de digitação.
    * Confirme se o nome da tabela em `supabase.from('contact_submissions')` no `script.js` corresponde exatamente ao nome da tabela criada no Supabase.
    * **Verifique o RLS e as Policies no Supabase:** Garanta que o RLS está habilitado para a tabela e que existe uma política permitindo `INSERT` para a role `anon`. Este é o erro mais comum.
    * Abra o console do desenvolvedor do navegador (F12) e veja se há mensagens de erro relacionadas ao Supabase ou JavaScript.
* **Estilos/Temas não aplicam corretamente:**
    * Limpe o cache do seu navegador.
    * Verifique se as classes `lang-xx` estão sendo adicionadas corretamente ao elemento `<html>` ao trocar de idioma (inspecione o elemento no navegador).
    * Confirme se os nomes das variáveis CSS estão corretos e se não há erros de sintaxe no `style.css`.
* **Traduções não funcionam:**
    * Verifique se o atributo `data-translate` no HTML corresponde exatamente à chave no objeto `translations` em `script.js`.
    * Verifique se a chave existe para o idioma selecionado.
    * Procure por erros de JavaScript no console do navegador.
* **Animações não ocorrem:**
    * Verifique se a classe `.animate-on-scroll` está nos elementos desejados no HTML.
    * Confirme se o Intersection Observer está sendo inicializado corretamente (procure erros no console). Navegadores muito antigos podem não suportá-lo (o fallback atual simplesmente mostra os elementos).

### 🤝 Contribuições

No momento, este é um projeto pessoal. No entanto, sugestões e feedback são bem-vindos! Você pode abrir uma *Issue* no GitHub para relatar bugs ou sugerir melhorias.

### 📜 Licença

Distribuído sob a licença MIT. Veja `LICENSE` (se existir) para mais informações, ou considere o conteúdo como proprietário conforme descrito em `rights.html`.

*(Instrução: Se optar por uma licença como MIT, crie um arquivo LICENSE na raiz do projeto com o texto da licença. Se não, remova a badge da licença e esta seção, ou apenas referencie a página rights.html)*

### 📞 Contato

Davi Silva dos Santos

* **LinkedIn:** [https://www.linkedin.com/in/davi-silva-dos-santos-sql-python-en-pt](https://www.linkedin.com/in/davi-silva-dos-santos-sql-python-en-pt)
* **Email:** `seu.email@exemplo.com`
* **Formulário no Site:** [Link para a seção de contato no seu site]

---
---

## 🇬🇧 English Version

*Disclaimer: This is a translation of the original Portuguese README. Please refer to the Portuguese version as the primary source if discrepancies arise.*

### Overview

This repository contains the source code for my personal portfolio as a Junior Data Analyst. The main goal is to showcase my skills, projects, and experience in Data Analysis and Data Science in a professional, modern, and interactive way.

The website was developed with a focus on minimalist design, responsiveness (Mobile First), performance, and a pleasant user experience, including multi-language support and dynamic color themes based on the selected language.

### 🚀 Live Demo

You can view the live version of the portfolio here:
**[Link to Deploy]** (e.g., `https://davi-portfolio.netlify.app/`)

### 📸 Screenshots

*Instruction: Insert screenshots of your portfolio on desktop and mobile here, perhaps showing different color themes.*

**(Desktop - PT-BR Theme)**
![Desktop Screenshot](images/placeholder-desktop.png)

**(Mobile - EN Theme)**
![Mobile Screenshot](images/placeholder-mobile.png)

### ✨ Key Features

* **Responsive Design:** Fully adaptable to different screen sizes (Mobile First).
* **Modern UI/UX:** Minimalist and clean style, with smooth animations and microinteractions.
* **Multi-language:**
    * Support for Portuguese (pt-BR), English (en), Spanish (es), French (fr), and German (de).
    * Automatic browser language detection.
    * Manual language selection via header buttons.
* **Dynamic Themes:** Interface color scheme automatically adapted based on the selected language, using representative colors.
* **Dark Mode:** Automatic adaptation to the user's operating system dark theme (`prefers-color-scheme`).
* **Main Sections:** Hero, Featured Projects, Technical Skills, and Contact Form.
* **Backend Integration (Supabase):** The contact form sends data directly to a table in Supabase.
* **Basic SEO:** Title (`<title>`) and meta description (`<meta name="description">`) dynamically updated according to the language.
* **Performance:**
    * Built without heavy JS frameworks (Vanilla JS).
    * Use of modern CSS (Flexbox, Grid, Variables).
    * Lazy loading for project images.
    * Entry animations triggered via Intersection Observer.
* **Copyright Page:** Dedicated page (`rights.html`) with terms of use, also multi-language and integrated with the theme.

### 🛠️ Technologies Used

* **HTML5:** Semantic structure.
* **CSS3:** Modern styling.
    * Flexbox and Grid Layout for responsiveness.
    * CSS Variables (Custom Properties) for dynamic themes and maintenance.
    * Media Queries (`prefers-color-scheme` for Dark Mode).
    * CSS Transitions and Animations.
* **JavaScript (Vanilla ES6+):**
    * DOM Manipulation.
    * Translation and theme switching logic.
    * Browser language detection and `localStorage`.
    * Intersection Observer API for scroll animations.
    * Fetch API (implicit in Supabase client) for form submission.
* **Supabase:** BaaS (Backend as a Service) platform used for:
    * Storing contact form submissions in a PostgreSQL database.
    * API to interact with the database via JavaScript.
* **Google Fonts:** For 'Poppins' and 'Roboto' fonts.
* **Git & GitHub:** Version control and code hosting.

*(No frameworks like React, Vue, Angular, etc., were used in this project.)*

### 📂 Project Structure

.
├── images/             # Project preview images, placeholders, etc.
├── index.html          # Main portfolio page
├── rights.html         # Copyright and Terms of Use page
├── style.css           # Single stylesheet for the entire site
├── script.js           # Single JavaScript file with all logic
├── supabase_schema.sql # SQL script to create the table in Supabase
└── README.md           # This documentation file


### ⚙️ Local Setup and Installation

To run this project locally, follow the steps below:

**Prerequisites:**
* A modern web browser (Chrome, Firefox, Edge, Safari).
* Git installed (optional, for cloning).
* A free account on [Supabase](https://supabase.com/).

**Steps:**

1.  **Clone the Repository:**
    ```bash
    git clone [Link to your GitHub Repository]
    cd repository-folder-name
    ```
    Or download the ZIP directly from GitHub.

2.  **Configure Supabase:**
    * Create a new project on [Supabase](https://supabase.com/).
    * In your project dashboard, go to **Project Settings** (gear icon in the left sidebar) > **API**.
    * Copy the **Project URL** and the **Project API Keys** (`anon` `public`).
    * Open the `script.js` file in your code editor.
    * Locate the constants `SUPABASE_URL` and `SUPABASE_ANON_KEY` (near the top of the file).
    * **Replace** the strings `'SUA_SUPABASE_URL'` and `'SUA_SUPABASE_ANON_KEY'` with your credentials copied from Supabase. **Attention:** Keep the quotes.
    * In the Supabase dashboard, go to **SQL Editor** (terminal icon in the sidebar).
    * Click **+ New query**.
    * Copy the entire content of the `supabase_schema.sql` file from this repository.
    * Paste the SQL code into the Supabase editor and click **RUN**. This will create the `contact_submissions` table.
    * **IMPORTANT (Security):**
        * Go to **Authentication** (users icon) > **Policies**.
        * Find the `contact_submissions` table. If RLS (Row Level Security) is not enabled, **enable it**.
        * Ensure the policy named `"Allow anonymous inserts"` (created by the SQL script) exists and is enabled for the `anon` role on the `INSERT` operation. **This step is crucial for the form to work and to protect your database.**

3.  **Run Locally:**
    * Simply open the `index.html` file directly in your web browser.
    * The site should load, and the contact form should now send data to your table in Supabase.

### 🔧 Configuration and Customization

Here's how to adapt the portfolio with your information:

* **Personal Information:**
    * **Name:** Edit the name in the footers of `index.html` and `rights.html` and the `footerOwnerName` key in the `translations` object in `script.js`.
    * **Job Title:** Edit the text inside the `<p class="job-title">` tag in `index.html` and update the `jobTitle` key in `translations` (in `script.js`) for all languages.
    * **Social Links and Contact:** Update the `href` links inside the `div.social-links` in the footers of `index.html` and `rights.html`.

* **Projects:**
    * **Structure:** In `index.html`, locate the `id="projects"` section. Each project is inside an `<article class="project-card">`.
    * **Image:** Change the `src` and `alt` of the `<img>` tag. Place your images in the `images/` folder. Use descriptive names.
    * **Title and Description:** Edit the `data-translate` attributes (e.g., `project1Title`, `project1Desc`). **Remember** to add or modify the corresponding keys in the `translations` object in `script.js` for all languages.
    * **Link:** Update the `href` in the `<a>` tag of the "View Project" button.
    * **Add/Remove:** Copy/paste or remove entire `<article class="project-card">` blocks. If adding, create new translation keys (e.g., `project4Title`, `project4Desc`) and add them to `script.js`.

* **Skills:**
    * In `index.html`, locate the `id="skills"` section. Each skill is in a `<div class="skill-item">`.
    * Edit the text inside the `<p>` tag (skill name).
    * **Icon:** Replace the content of the `<span class="skill-icon">` with your preferred icon (using inline SVG is recommended for better performance and scalability, or an `<img>` tag). Adjust the style in CSS if necessary.
    * **Add/Remove:** Copy/paste or remove `<div class="skill-item">` blocks.

* **Translations:**
    * Open `script.js`. The `translations` object contains all the texts.
    * To modify an existing text, find the corresponding key (e.g., `greeting`, `project1Desc`) within the desired language (`pt-BR`, `en`, etc.) and change the string value.
    * To add a new translatable text:
        1.  In the HTML (`index.html` or `rights.html`), add the attribute `data-translate="yourNewUniqueKey"` to the HTML element that will contain the text.
        2.  In `script.js`, add the key `"yourNewUniqueKey"` with the corresponding translated text inside **each** language object (`pt-BR`, `en`, `es`, `fr`, `de`).
    * **Title and Description (SEO):** Edit the `pageTitle` and `metaDescription` keys in `translations`.

* **Color Themes:**
    * Open `style.css`.
    * The base colors (default/English) and dark mode variables are defined in `:root` and `@media (prefers-color-scheme: dark)`.
    * Themes for each language are defined in the `html.lang-pt-BR`, `html.lang-es`, etc., selectors. You can adjust the CSS variable values (`--primary-color`, `--secondary-color`, etc.) within these blocks to change the colors of each theme.

* **Supabase Table:** If you need to change the table structure (add/remove columns), edit the `supabase_schema.sql` file and run the changes (e.g., `ALTER TABLE` commands) in the Supabase SQL Editor. Remember to adjust the submission logic in `script.js` if you add new fields to the form.

### ☁️ Deployment

This is a static site (HTML, CSS, JS) and can be easily hosted on platforms like:

* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)
* [GitHub Pages](https://pages.github.com/)

**General Instructions:**

1.  Create an account on your chosen platform.
2.  Connect your GitHub repository.
3.  Configure build options (usually, no build commands are needed for this project).
4.  Deploy.

**Security Considerations (Supabase Keys):**

* The `SUPABASE_ANON_KEY` is considered public and safe to expose in the frontend **AS LONG AS** you have correctly configured **Row Level Security (RLS)** and **Policies** on your Supabase table.
* **NEVER** expose your `SUPABASE_SERVICE_ROLE_KEY` in the frontend code.
* If using a **public** GitHub repository, be aware that your `anon key` will be visible. Security relies entirely on the RLS configured in Supabase.

### ❗ Troubleshooting

* **Form doesn't send:**
    * Check if the `SUPABASE_URL` and `SUPABASE_ANON_KEY` credentials in `script.js` are correct and have no typos.
    * Confirm that the table name in `supabase.from('contact_submissions')` in `script.js` exactly matches the table name created in Supabase.
    * **Check RLS and Policies in Supabase:** Ensure RLS is enabled for the table and that a policy allowing `INSERT` for the `anon` role exists. This is the most common error.
    * Open the browser's developer console (F12) and check for errors related to Supabase or JavaScript.
* **Styles/Themes not applying correctly:**
    * Clear your browser cache.
    * Check if the `lang-xx` classes are being added correctly to the `<html>` element when switching languages (inspect the element in the browser).
    * Confirm that CSS variable names are correct and there are no syntax errors in `style.css`.
* **Translations not working:**
    * Check if the `data-translate` attribute in the HTML exactly matches the key in the `translations` object in `script.js`.
    * Check if the key exists for the selected language.
    * Look for JavaScript errors in the browser console.
* **Animations not occurring:**
    * Check if the `.animate-on-scroll` class is on the desired elements in the HTML.
    * Confirm that the Intersection Observer is initializing correctly (check the console for errors). Very old browsers might not support it (the current fallback simply shows the elements).

### 🤝 Contributions

Currently, this is a personal project. However, suggestions and feedback are welcome! You can open an *Issue* on GitHub to report bugs or suggest improvements.

### 📜 License

Distributed under the MIT License. See `LICENSE` (if it exists) for more information, or consider the content proprietary as described in `rights.html`.

*(Instruction: If you opt for a license like MIT, create a LICENSE file in the project root with the license text. Otherwise, remove the license badge and this section, or just reference the rights.html page)*

### 📞 Contact

Davi Silva dos Santos

* **LinkedIn:** [https://www.linkedin.com/in/davi-silva-dos-santos-sql-python-en-pt](https://www.linkedin.com/in/davi-silva-dos-santos-sql-python-en-pt)
* **Email:** `your.email@example.com`
* **Form on Site:** [Link to the contact section on your site]

---
---

## 🇪🇸 Versión en Español

*Aviso: Esta es una traducción del README original en portugués. Por favor, consulte la versión en portugués como fuente principal si surgen discrepancias.*

### Descripción General

Este repositorio contiene el código fuente de mi portafolio personal como Analista de Datos Junior. El objetivo principal es presentar mis habilidades, proyectos y experiencia en Análisis de Datos y Ciencia de Datos de forma profesional, moderna e interactiva.

El sitio web fue desarrollado con un enfoque en diseño minimalista, responsividad (Mobile First), rendimiento y una experiencia de usuario agradable, incluyendo soporte multi-idioma y temas de color dinámicos basados en el idioma seleccionado.

### 🚀 Demo en Vivo

Puedes visualizar la versión en vivo del portafolio aquí:
**[Enlace al Deploy]** (Ej: `https://davi-portfolio.netlify.app/`)

### 📸 Capturas de Pantalla

*Instrucción: Inserte aquí capturas de pantalla de su portafolio en escritorio y móvil, quizás mostrando diferentes temas de color.*

**(Escritorio - Tema PT-BR)**
![Captura de Escritorio](images/placeholder-desktop.png)

**(Móvil - Tema EN)**
![Captura Móvil](images/placeholder-mobile.png)

### ✨ Funcionalidades Principales

* **Diseño Responsivo:** Totalmente adaptable a diferentes tamaños de pantalla (Mobile First).
* **UI/UX Moderna:** Estilo minimalista y limpio, con animaciones suaves y microinteracciones.
* **Multi-idioma:**
    * Soporte para Portugués (pt-BR), Inglés (en), Español (es), Francés (fr) y Alemán (de).
    * Detección automática del idioma del navegador.
    * Selección manual de idioma mediante botones en la cabecera.
* **Temas Dinámicos:** Esquema de color de la interfaz adaptado automáticamente según el idioma seleccionado, usando colores representativos.
* **Modo Oscuro:** Adaptación automática al tema oscuro del sistema operativo del usuario (`prefers-color-scheme`).
* **Secciones Principales:** Presentación (Hero), Proyectos Destacados, Habilidades Técnicas y Formulario de Contacto.
* **Integración con Backend (Supabase):** El formulario de contacto envía los datos directamente a una tabla en Supabase.
* **SEO Básico:** Título (`<title>`) y meta descripción (`<meta name="description">`) actualizados dinámicamente según el idioma.
* **Rendimiento:**
    * Construido sin frameworks JS pesados (Vanilla JS).
    * Uso de CSS moderno (Flexbox, Grid, Variables).
    * Lazy loading para imágenes de los proyectos.
    * Animaciones de entrada activadas mediante Intersection Observer.
* **Página de Derechos de Autor:** Página dedicada (`rights.html`) con términos de uso, también multi-idioma e integrada al tema.

### 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica.
* **CSS3:** Estilización moderna.
    * Flexbox y Grid Layout para responsividad.
    * Variables CSS (Custom Properties) para temas dinámicos y mantenimiento.
    * Media Queries (`prefers-color-scheme` para Modo Oscuro).
    * Transiciones y Animaciones CSS.
* **JavaScript (Vanilla ES6+):**
    * Manipulación del DOM.
    * Lógica de traducción y cambio de temas.
    * Detección de idioma del navegador y `localStorage`.
    * Intersection Observer API para animaciones de scroll.
    * Fetch API (implícita en el cliente Supabase) para envío del formulario.
* **Supabase:** Plataforma BaaS (Backend as a Service) utilizada para:
    * Almacenar envíos del formulario de contacto en una base de datos PostgreSQL.
    * API para interactuar con la base de datos vía JavaScript.
* **Google Fonts:** Para las fuentes 'Poppins' y 'Roboto'.
* **Git & GitHub:** Control de versiones y alojamiento del código.

*(Ningún framework como React, Vue, Angular, etc., fue utilizado en este proyecto.)*

### 📂 Estructura del Proyecto

.
├── images/             # Imágenes de vista previa de proyectos, placeholders, etc.
├── index.html          # Página principal del portafolio
├── rights.html         # Página de Derechos de Autor y Términos de Uso
├── style.css           # Hoja de estilos única para todo el sitio
├── script.js           # Script JavaScript único con toda la lógica
├── supabase_schema.sql # Script SQL para crear la tabla en Supabase
└── README.md           # Este archivo de documentación


### ⚙️ Configuración e Instalación Local

Para ejecutar este proyecto localmente, sigue los pasos a continuación:

**Prerrequisitos:**
* Un navegador web moderno (Chrome, Firefox, Edge, Safari).
* Git instalado (opcional, para clonar).
* Una cuenta gratuita en [Supabase](https://supabase.com/).

**Pasos:**

1.  **Clona el Repositorio:**
    ```bash
    git clone [Enlace a tu Repositorio GitHub]
    cd nombre-de-la-carpeta-del-repositorio
    ```
    O descarga el ZIP directamente desde GitHub.

2.  **Configura Supabase:**
    * Crea un nuevo proyecto en [Supabase](https://supabase.com/).
    * En el panel de tu proyecto, ve a **Project Settings** (icono de engranaje en la barra lateral izquierda) > **API**.
    * Copia la **Project URL** y la **Project API Keys** (`anon` `public`).
    * Abre el archivo `script.js` en tu editor de código.
    * Localiza las constantes `SUPABASE_URL` y `SUPABASE_ANON_KEY` (cerca de la parte superior del archivo).
    * **Reemplaza** las cadenas `'SUA_SUPABASE_URL'` y `'SUA_SUPABASE_ANON_KEY'` con tus credenciales copiadas de Supabase. **Atención:** Mantén las comillas.
    * En el panel de Supabase, ve a **SQL Editor** (icono de terminal en la barra lateral).
    * Haz clic en **+ New query**.
    * Copia todo el contenido del archivo `supabase_schema.sql` de este repositorio.
    * Pega el código SQL en el editor de Supabase y haz clic en **RUN**. Esto creará la tabla `contact_submissions`.
    * **IMPORTANTE (Seguridad):**
        * Ve a **Authentication** (icono de usuarios) > **Policies**.
        * Encuentra la tabla `contact_submissions`. Si RLS (Row Level Security) no está habilitado, **habilítalo**.
        * Asegúrate de que la política llamada `"Allow anonymous inserts"` (creada por el script SQL) existe y está habilitada para el rol `anon` en la operación `INSERT`. **Este paso es crucial para que el formulario funcione y para proteger tu base de datos.**

3.  **Ejecuta Localmente:**
    * Simplemente abre el archivo `index.html` directamente en tu navegador web.
    * El sitio debería cargarse, y el formulario de contacto ahora debería enviar datos a tu tabla en Supabase.

### 🔧 Configuración y Personalización

Así es como puedes adaptar el portafolio con tu información:

* **Información Personal:**
    * **Nombre:** Edita el nombre en los pies de página de `index.html` y `rights.html` y la clave `footerOwnerName` en el objeto `translations` en `script.js`.
    * **Título del Cargo:** Edita el texto dentro de la etiqueta `<p class="job-title">` en `index.html` y actualiza la clave `jobTitle` en `translations` (en `script.js`) para todos los idiomas.
    * **Enlaces Sociales y Contacto:** Actualiza los enlaces `href` dentro del `div.social-links` en los pies de página de `index.html` y `rights.html`.

* **Proyectos:**
    * **Estructura:** En `index.html`, localiza la sección `id="projects"`. Cada proyecto está dentro de un `<article class="project-card">`.
    * **Imagen:** Cambia el `src` y `alt` de la etiqueta `<img>`. Coloca tus imágenes en la carpeta `images/`. Usa nombres descriptivos.
    * **Título y Descripción:** Edita los atributos `data-translate` (ej: `project1Title`, `project1Desc`). **Recuerda** añadir o modificar las claves correspondientes en el objeto `translations` en `script.js` para todos los idiomas.
    * **Enlace:** Actualiza el `href` en la etiqueta `<a>` del botón "Ver Proyecto".
    * **Añadir/Eliminar:** Copia/pega o elimina bloques `<article class="project-card">` enteros. Si añades, crea nuevas claves de traducción (ej: `project4Title`, `project4Desc`) y añádelas a `script.js`.

* **Habilidades:**
    * En `index.html`, localiza la sección `id="skills"`. Cada habilidad está en un `<div class="skill-item">`.
    * Edita el texto dentro de la etiqueta `<p>` (nombre de la habilidad).
    * **Icono:** Reemplaza el contenido del `<span class="skill-icon">` con tu icono preferido (se recomienda usar SVG inline para mejor rendimiento y escalabilidad, o una etiqueta `<img>`). Ajusta el estilo en CSS si es necesario.
    * **Añadir/Eliminar:** Copia/pega o elimina bloques `<div class="skill-item">`.

* **Traducciones:**
    * Abre `script.js`. El objeto `translations` contiene todos los textos.
    * Para modificar un texto existente, encuentra la clave correspondiente (ej: `greeting`, `project1Desc`) dentro del idioma deseado (`pt-BR`, `en`, etc.) y cambia el valor de la cadena.
    * Para añadir un nuevo texto traducible:
        1.  En el HTML (`index.html` o `rights.html`), añade el atributo `data-translate="tuNuevaClaveUnica"` al elemento HTML que contendrá el texto.
        2.  En `script.js`, añade la clave `"tuNuevaClaveUnica"` con el texto traducido correspondiente dentro de **cada** objeto de idioma (`pt-BR`, `en`, `es`, `fr`, `de`).
    * **Título y Descripción (SEO):** Edita las claves `pageTitle` y `metaDescription` en `translations`.

* **Temas de Color:**
    * Abre `style.css`.
    * Los colores base (predeterminado/inglés) y las variables de modo oscuro se definen en `:root` y `@media (prefers-color-scheme: dark)`.
    * Los temas para cada idioma se definen en los selectores `html.lang-pt-BR`, `html.lang-es`, etc. Puedes ajustar los valores de las variables CSS (`--primary-color`, `--secondary-color`, etc.) dentro de estos bloques para cambiar los colores de cada tema.

* **Tabla Supabase:** Si necesitas cambiar la estructura de la tabla (añadir/eliminar columnas), edita el archivo `supabase_schema.sql` y ejecuta los cambios (ej: comandos `ALTER TABLE`) en el Editor SQL de Supabase. Recuerda ajustar la lógica de envío en `script.js` si añades nuevos campos al formulario.

### ☁️ Despliegue (Deploy)

Este es un sitio estático (HTML, CSS, JS) y puede alojarse fácilmente en plataformas como:

* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)
* [GitHub Pages](https://pages.github.com/)

**Instrucciones Generales:**

1.  Crea una cuenta en la plataforma elegida.
2.  Conecta tu repositorio GitHub.
3.  Configura las opciones de build (normalmente, no se necesitan comandos de build para este proyecto).
4.  Despliega.

**Consideraciones de Seguridad (Claves Supabase):**

* La clave `SUPABASE_ANON_KEY` se considera pública y segura para exponerse en el frontend **SIEMPRE Y CUANDO** hayas configurado correctamente la **Seguridad a Nivel de Fila (RLS)** y las **Políticas** en tu tabla Supabase.
* **NUNCA** expongas tu `SUPABASE_SERVICE_ROLE_KEY` en el código frontend.
* Si usas un repositorio GitHub **público**, ten en cuenta que tu `anon key` será visible. La seguridad depende enteramente del RLS configurado en Supabase.

### ❗ Solución de Problemas

* **Formulario no envía:**
    * Verifica que las credenciales `SUPABASE_URL` y `SUPABASE_ANON_KEY` en `script.js` sean correctas y no tengan errores tipográficos.
    * Confirma que el nombre de la tabla en `supabase.from('contact_submissions')` en `script.js` coincide exactamente con el nombre de la tabla creada en Supabase.
    * **Verifica el RLS y las Políticas en Supabase:** Asegúrate de que RLS esté habilitado para la tabla y que exista una política que permita `INSERT` para el rol `anon`. Este es el error más común.
    * Abre la consola de desarrollador del navegador (F12) y comprueba si hay mensajes de error relacionados con Supabase o JavaScript.
* **Estilos/Temas no se aplican correctamente:**
    * Limpia la caché de tu navegador.
    * Verifica que las clases `lang-xx` se estén añadiendo correctamente al elemento `<html>` al cambiar de idioma (inspecciona el elemento en el navegador).
    * Confirma que los nombres de las variables CSS son correctos y que no hay errores de sintaxis en `style.css`.
* **Traducciones no funcionan:**
    * Verifica que el atributo `data-translate` en el HTML coincide exactamente con la clave en el objeto `translations` en `script.js`.
    * Verifica que la clave existe para el idioma seleccionado.
    * Busca errores de JavaScript en la consola del navegador.
* **Animaciones no ocurren:**
    * Verifica que la clase `.animate-on-scroll` esté en los elementos deseados en el HTML.
    * Confirma que el Intersection Observer se está inicializando correctamente (comprueba la consola por errores). Navegadores muy antiguos podrían no soportarlo (el fallback actual simplemente muestra los elementos).

### 🤝 Contribuciones

Actualmente, este es un proyecto personal. Sin embargo, ¡las sugerencias y comentarios son bienvenidos! Puedes abrir un *Issue* en GitHub para reportar errores o sugerir mejoras.

### 📜 Licencia

Distribuido bajo la Licencia MIT. Consulta `LICENSE` (si existe) para más información, o considera el contenido como propietario según se describe en `rights.html`.

*(Instrucción: Si optas por una licencia como MIT, crea un archivo LICENSE en la raíz del proyecto con el texto de la licencia. Si no, elimina la insignia de licencia y esta sección, o simplemente referencia la página rights.html)*

### 📞 Contacto

Davi Silva dos Santos

* **LinkedIn:** [https://www.linkedin.com/in/davi-silva-dos-santos-sql-python-en-pt](https://www.linkedin.com/in/davi-silva-dos-santos-sql-python-en-pt)
* **Email:** `tu.email@ejemplo.com`
* **Formulario en el Sitio:** [Enlace a la sección de contacto en tu sitio]

---
---

## 🇫🇷 Version Française

*Avertissement : Ceci est une traduction du README original en portugais. Veuillez vous référer à la version portugaise comme source principale en cas de divergences.*

### Aperçu

Ce dépôt contient le code source de mon portfolio personnel en tant qu'Analyste de Données Junior. L'objectif principal est de présenter mes compétences, projets et expérience en Analyse de Données et Science des Données de manière professionnelle, moderne et interactive.

Le site web a été développé en mettant l'accent sur un design minimaliste, la responsivité (Mobile First), la performance et une expérience utilisateur agréable, incluant un support multilingue et des thèmes de couleurs dynamiques basés sur la langue sélectionnée.

### 🚀 Démo en Ligne

Vous pouvez visualiser la version en direct du portfolio ici :
**[Lien vers le Déploiement]** (Ex : `https://davi-portfolio.netlify.app/`)

### 📸 Captures d'écran

*Instruction : Insérez ici des captures d'écran de votre portfolio sur ordinateur et mobile, en montrant peut-être différents thèmes de couleurs.*

**(Ordinateur - Thème PT-BR)**
![Capture d'écran Ordinateur](images/placeholder-desktop.png)

**(Mobile - Thème EN)**
![Capture d'écran Mobile](images/placeholder-mobile.png)

### ✨ Fonctionnalités Principales

* **Design Réactif :** Entièrement adaptable à différentes tailles d'écran (Mobile First).
* **UI/UX Moderne :** Style minimaliste et épuré, avec des animations fluides et des micro-interactions.
* **Multilingue :**
    * Support pour le Portugais (pt-BR), l'Anglais (en), l'Espagnol (es), le Français (fr) et l'Allemand (de).
    * Détection automatique de la langue du navigateur.
    * Sélection manuelle de la langue via les boutons de l'en-tête.
* **Thèmes Dynamiques :** Schéma de couleurs de l'interface automatiquement adapté en fonction de la langue sélectionnée, utilisant des couleurs représentatives.
* **Mode Sombre :** Adaptation automatique au thème sombre du système d'exploitation de l'utilisateur (`prefers-color-scheme`).
* **Sections Principales :** Présentation (Hero), Projets à la Une, Compétences Techniques et Formulaire de Contact.
* **Intégration Backend (Supabase) :** Le formulaire de contact envoie les données directement à une table dans Supabase.
* **SEO Basique :** Titre (`<title>`) et méta-description (`<meta name="description">`) mis à jour dynamiquement selon la langue.
* **Performance :**
    * Construit sans frameworks JS lourds (Vanilla JS).
    * Utilisation de CSS moderne (Flexbox, Grid, Variables).
    * Lazy loading pour les images des projets.
    * Animations d'entrée déclenchées via Intersection Observer.
* **Page Droits d'Auteur :** Page dédiée (`rights.html`) avec les conditions d'utilisation, également multilingue et intégrée au thème.

### 🛠️ Technologies Utilisées

* **HTML5 :** Structure sémantique.
* **CSS3 :** Stylisation moderne.
    * Flexbox et Grid Layout pour la réactivité.
    * Variables CSS (Custom Properties) pour les thèmes dynamiques et la maintenance.
    * Media Queries (`prefers-color-scheme` pour le Mode Sombre).
    * Transitions et Animations CSS.
* **JavaScript (Vanilla ES6+) :**
    * Manipulation du DOM.
    * Logique de traduction et de changement de thème.
    * Détection de la langue du navigateur et `localStorage`.
    * Intersection Observer API pour les animations au défilement.
    * Fetch API (implicite dans le client Supabase) pour l'envoi du formulaire.
* **Supabase :** Plateforme BaaS (Backend as a Service) utilisée pour :
    * Stocker les soumissions du formulaire de contact dans une base de données PostgreSQL.
    * API pour interagir avec la base de données via JavaScript.
* **Google Fonts :** Pour les polices 'Poppins' et 'Roboto'.
* **Git & GitHub :** Contrôle de version et hébergement du code.

*(Aucun framework tel que React, Vue, Angular, etc., n'a été utilisé dans ce projet.)*

### 📂 Structure du Projet

.
├── images/             # Images d'aperçu des projets, placeholders, etc.
├── index.html          # Page principale du portfolio
├── rights.html         # Page des Droits d'Auteur et Conditions d'Utilisation
├── style.css           # Feuille de styles unique pour tout le site
├── script.js           # Script JavaScript unique avec toute la logique
├── supabase_schema.sql # Script SQL pour créer la table dans Supabase
└── README.md           # Ce fichier de documentation


### ⚙️ Configuration et Installation Locale

Pour exécuter ce projet localement, suivez les étapes ci-dessous :

**Prérequis :**
* Un navigateur web moderne (Chrome, Firefox, Edge, Safari).
* Git installé (optionnel, pour cloner).
* Un compte gratuit sur [Supabase](https://supabase.com/).

**Étapes :**

1.  **Clonez le Dépôt :**
    ```bash
    git clone [Lien vers votre Dépôt GitHub]
    cd nom-du-dossier-du-depot
    ```
    Ou téléchargez le ZIP directement depuis GitHub.

2.  **Configurez Supabase :**
    * Créez un nouveau projet sur [Supabase](https://supabase.com/).
    * Dans le tableau de bord de votre projet, allez dans **Project Settings** (icône d'engrenage dans la barre latérale gauche) > **API**.
    * Copiez l'**URL du Projet** et les **Clés API du Projet** (`anon` `public`).
    * Ouvrez le fichier `script.js` dans votre éditeur de code.
    * Localisez les constantes `SUPABASE_URL` et `SUPABASE_ANON_KEY` (près du début du fichier).
    * **Remplacez** les chaînes `'SUA_SUPABASE_URL'` et `'SUA_SUPABASE_ANON_KEY'` par vos identifiants copiés depuis Supabase. **Attention :** Conservez les guillemets.
    * Dans le tableau de bord Supabase, allez dans **SQL Editor** (icône de terminal dans la barre latérale).
    * Cliquez sur **+ New query**.
    * Copiez tout le contenu du fichier `supabase_schema.sql` de ce dépôt.
    * Collez le code SQL dans l'éditeur Supabase et cliquez sur **RUN**. Cela créera la table `contact_submissions`.
    * **IMPORTANT (Sécurité) :**
        * Allez dans **Authentication** (icône d'utilisateurs) > **Policies**.
        * Trouvez la table `contact_submissions`. Si RLS (Row Level Security) n'est pas activé, **activez-le**.
        * Assurez-vous que la politique nommée `"Allow anonymous inserts"` (créée par le script SQL) existe et est activée pour le rôle `anon` sur l'opération `INSERT`. **Cette étape est cruciale pour que le formulaire fonctionne et pour protéger votre base de données.**

3.  **Exécutez Localement :**
    * Ouvrez simplement le fichier `index.html` directement dans votre navigateur web.
    * Le site devrait se charger, et le formulaire de contact devrait maintenant envoyer des données à votre table dans Supabase.

### 🔧 Configuration et Personnalisation

Voici comment adapter le portfolio avec vos informations :

* **Informations Personnelles :**
    * **Nom :** Modifiez le nom dans les pieds de page de `index.html` et `rights.html` et la clé `footerOwnerName` dans l'objet `translations` dans `script.js`.
    * **Titre du Poste :** Modifiez le texte à l'intérieur de la balise `<p class="job-title">` dans `index.html` et mettez à jour la clé `jobTitle` dans `translations` (dans `script.js`) pour toutes les langues.
    * **Liens Sociaux et Contact :** Mettez à jour les liens `href` à l'intérieur de la `div.social-links` dans les pieds de page de `index.html` et `rights.html`.

* **Projets :**
    * **Structure :** Dans `index.html`, localisez la section `id="projects"`. Chaque projet se trouve dans un `<article class="project-card">`.
    * **Image :** Changez le `src` et `alt` de la balise `<img>`. Placez vos images dans le dossier `images/`. Utilisez des noms descriptifs.
    * **Titre et Description :** Modifiez les attributs `data-translate` (ex : `project1Title`, `project1Desc`). **N'oubliez pas** d'ajouter ou de modifier les clés correspondantes dans l'objet `translations` dans `script.js` pour toutes les langues.
    * **Lien :** Mettez à jour le `href` dans la balise `<a>` du bouton "Voir le Projet".
    * **Ajouter/Supprimer :** Copiez/collez ou supprimez des blocs `<article class="project-card">` entiers. Si vous en ajoutez, créez de nouvelles clés de traduction (ex : `project4Title`, `project4Desc`) et ajoutez-les à `script.js`.

* **Compétences :**
    * Dans `index.html`, localisez la section `id="skills"`. Chaque compétence est dans une `<div class="skill-item">`.
    * Modifiez le texte à l'intérieur de la balise `<p>` (nom de la compétence).
    * **Icône :** Remplacez le contenu du `<span class="skill-icon">` par votre icône préférée (il est recommandé d'utiliser SVG inline pour de meilleures performances et une meilleure évolutivité, ou une balise `<img>`). Ajustez le style dans CSS si nécessaire.
    * **Ajouter/Supprimer :** Copiez/collez ou supprimez des blocs `<div class="skill-item">`.

* **Traductions :**
    * Ouvrez `script.js`. L'objet `translations` contient tous les textes.
    * Pour modifier un texte existant, trouvez la clé correspondante (ex : `greeting`, `project1Desc`) dans la langue souhaitée (`pt-BR`, `en`, etc.) et changez la valeur de la chaîne.
    * Pour ajouter un nouveau texte traduisible :
        1.  Dans le HTML (`index.html` ou `rights.html`), ajoutez l'attribut `data-translate="votreNouvelleCleUnique"` à l'élément HTML qui contiendra le texte.
        2.  Dans `script.js`, ajoutez la clé `"votreNouvelleCleUnique"` avec le texte traduit correspondant à l'intérieur de **chaque** objet de langue (`pt-BR`, `en`, `es`, `fr`, `de`).
    * **Titre et Description (SEO) :** Modifiez les clés `pageTitle` et `metaDescription` dans `translations`.

* **Thèmes de Couleurs :**
    * Ouvrez `style.css`.
    * Les couleurs de base (par défaut/anglais) et les variables du mode sombre sont définies dans `:root` et `@media (prefers-color-scheme: dark)`.
    * Les thèmes pour chaque langue sont définis dans les sélecteurs `html.lang-pt-BR`, `html.lang-es`, etc. Vous pouvez ajuster les valeurs des variables CSS (`--primary-color`, `--secondary-color`, etc.) à l'intérieur de ces blocs pour changer les couleurs de chaque thème.

* **Table Supabase :** Si vous devez modifier la structure de la table (ajouter/supprimer des colonnes), modifiez le fichier `supabase_schema.sql` et exécutez les modifications (ex : commandes `ALTER TABLE`) dans l'éditeur SQL de Supabase. N'oubliez pas d'ajuster la logique d'envoi dans `script.js` si vous ajoutez de nouveaux champs au formulaire.

### ☁️ Déploiement

Ceci est un site statique (HTML, CSS, JS) et peut être facilement hébergé sur des plateformes comme :

* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)
* [GitHub Pages](https://pages.github.com/)

**Instructions Générales :**

1.  Créez un compte sur la plateforme choisie.
2.  Connectez votre dépôt GitHub.
3.  Configurez les options de build (normalement, aucune commande de build n'est nécessaire pour ce projet).
4.  Déployez.

**Considérations de Sécurité (Clés Supabase) :**

* La clé `SUPABASE_ANON_KEY` est considérée comme publique et sûre à exposer dans le frontend **À CONDITION QUE** vous ayez correctement configuré la **Sécurité au Niveau des Lignes (RLS)** et les **Politiques** sur votre table Supabase.
* **N'exposez JAMAIS** votre `SUPABASE_SERVICE_ROLE_KEY` dans le code frontend.
* Si vous utilisez un dépôt GitHub **public**, sachez que votre `anon key` sera visible. La sécurité repose entièrement sur le RLS configuré dans Supabase.

### ❗ Dépannage (Troubleshooting)

* **Le formulaire n'envoie pas :**
    * Vérifiez que les identifiants `SUPABASE_URL` et `SUPABASE_ANON_KEY` dans `script.js` sont corrects et sans fautes de frappe.
    * Confirmez que le nom de la table dans `supabase.from('contact_submissions')` dans `script.js` correspond exactement au nom de la table créée dans Supabase.
    * **Vérifiez le RLS et les Politiques dans Supabase :** Assurez-vous que le RLS est activé pour la table et qu'il existe une politique autorisant `INSERT` pour le rôle `anon`. C'est l'erreur la plus courante.
    * Ouvrez la console développeur du navigateur (F12) et vérifiez s'il y a des messages d'erreur liés à Supabase ou JavaScript.
* **Les styles/thèmes ne s'appliquent pas correctement :**
    * Videz le cache de votre navigateur.
    * Vérifiez que les classes `lang-xx` sont ajoutées correctement à l'élément `<html>` lors du changement de langue (inspectez l'élément dans le navigateur).
    * Confirmez que les noms des variables CSS sont corrects et qu'il n'y a pas d'erreurs de syntaxe dans `style.css`.
* **Les traductions ne fonctionnent pas :**
    * Vérifiez que l'attribut `data-translate` dans le HTML correspond exactement à la clé dans l'objet `translations` dans `script.js`.
    * Vérifiez que la clé existe pour la langue sélectionnée.
    * Recherchez des erreurs JavaScript dans la console du navigateur.
* **Les animations ne se produisent pas :**
    * Vérifiez que la classe `.animate-on-scroll` se trouve sur les éléments souhaités dans le HTML.
    * Confirmez que l'Intersection Observer s'initialise correctement (vérifiez la console pour les erreurs). Les navigateurs très anciens pourraient ne pas le supporter (le fallback actuel affiche simplement les éléments).

### 🤝 Contributions

Actuellement, il s'agit d'un projet personnel. Cependant, les suggestions et commentaires sont les bienvenus ! Vous pouvez ouvrir une *Issue* sur GitHub pour signaler des bugs ou suggérer des améliorations.

### 📜 Licence

Distribué sous la licence MIT. Voir `LICENSE` (si elle existe) pour plus d'informations, ou considérez le contenu comme propriétaire tel que décrit dans `rights.html`.

*(Instruction : Si vous optez pour une licence comme MIT, créez un fichier LICENSE à la racine du projet avec le texte de la licence. Sinon, supprimez le badge de licence et cette section, ou référencez simplement la page rights.html)*

### 📞 Contact

Davi Silva dos Santos

* **LinkedIn :** [https://www.linkedin.com/in/davi-silva-dos-santos-sql-python-en-pt](https://www.linkedin.com/in/davi-silva-dos-santos-sql-python-en-pt)
* **Email :** `votre.email@exemple.com`
* **Formulaire sur le Site :** [Lien vers la section contact de votre site]

---
---

## 🇩🇪 Deutsche Version

*Haftungsausschluss: Dies ist eine Übersetzung des ursprünglichen portugiesischen READMEs. Bei Abweichungen gilt die portugiesische Version als Hauptquelle.*

### Überblick

Dieses Repository enthält den Quellcode für mein persönliches Portfolio als Junior Data Analyst. Das Hauptziel ist es, meine Fähigkeiten, Projekte und Erfahrungen in der Datenanalyse und Data Science professionell, modern und interaktiv zu präsentieren.

Die Website wurde mit Fokus auf minimalistisches Design, Responsivität (Mobile First), Leistung und eine angenehme Benutzererfahrung entwickelt, einschließlich Mehrsprachigkeitsunterstützung und dynamischer Farbthemen basierend auf der ausgewählten Sprache.

### 🚀 Live-Demo

Sie können die Live-Version des Portfolios hier ansehen:
**[Link zum Deployment]** (z.B. `https://davi-portfolio.netlify.app/`)

### 📸 Screenshots

*Anweisung: Fügen Sie hier Screenshots Ihres Portfolios auf Desktop und Mobilgeräten ein, eventuell mit verschiedenen Farbthemen.*

**(Desktop - PT-BR Thema)**
![Desktop Screenshot](images/placeholder-desktop.png)

**(Mobil - EN Thema)**
![Mobile Screenshot](images/placeholder-mobile.png)

### ✨ Hauptfunktionen

* **Responsives Design:** Vollständig anpassbar an verschiedene Bildschirmgrößen (Mobile First).
* **Moderne UI/UX:** Minimalistischer und sauberer Stil, mit sanften Animationen und Mikrointeraktionen.
* **Mehrsprachigkeit:**
    * Unterstützung für Portugiesisch (pt-BR), Englisch (en), Spanisch (es), Französisch (fr) und Deutsch (de).
    * Automatische Erkennung der Browsersprache.
    * Manuelle Sprachauswahl über Schaltflächen im Header.
* **Dynamische Themen:** Farbschema der Benutzeroberfläche wird automatisch an die ausgewählte Sprache angepasst, wobei repräsentative Farben verwendet werden.
* **Dunkelmodus:** Automatische Anpassung an das dunkle Thema des Betriebssystems des Benutzers (`prefers-color-scheme`).
* **Hauptbereiche:** Vorstellung (Hero), Hervorgehobene Projekte, Technische Fähigkeiten und Kontaktformular.
* **Backend-Integration (Supabase):** Das Kontaktformular sendet die Daten direkt an eine Tabelle in Supabase.
* **Grundlegendes SEO:** Titel (`<title>`) und Meta-Beschreibung (`<meta name="description">`) werden dynamisch entsprechend der Sprache aktualisiert.
* **Performance:**
    * Ohne schwere JS-Frameworks erstellt (Vanilla JS).
    * Verwendung von modernem CSS (Flexbox, Grid, Variablen).
    * Lazy Loading für Projektbilder.
    * Eingangsanimationen ausgelöst durch Intersection Observer.
* **Urheberrechtsseite:** Eigene Seite (`rights.html`) mit Nutzungsbedingungen, ebenfalls mehrsprachig und in das Thema integriert.

### 🛠️ Verwendete Technologien

* **HTML5:** Semantische Struktur.
* **CSS3:** Modernes Styling.
    * Flexbox und Grid Layout für Responsivität.
    * CSS-Variablen (Custom Properties) für dynamische Themen und Wartung.
    * Media Queries (`prefers-color-scheme` für Dunkelmodus).
    * CSS-Übergänge und Animationen.
* **JavaScript (Vanilla ES6+):**
    * DOM-Manipulation.
    * Logik für Übersetzung und Themenwechsel.
    * Erkennung der Browsersprache und `localStorage`.
    * Intersection Observer API für Scroll-Animationen.
    * Fetch API (implizit im Supabase-Client) für Formularübermittlung.
* **Supabase:** BaaS (Backend as a Service) Plattform, verwendet für:
    * Speichern von Kontaktformular-Einsendungen in einer PostgreSQL-Datenbank.
    * API zur Interaktion mit der Datenbank über JavaScript.
* **Google Fonts:** Für die Schriftarten 'Poppins' und 'Roboto'.
* **Git & GitHub:** Versionskontrolle und Code-Hosting.

*(In diesem Projekt wurden keine Frameworks wie React, Vue, Angular usw. verwendet.)*

### 📂 Projektstruktur

.
├── images/             # Projektvorschau-Bilder, Platzhalter usw.
├── index.html          # Hauptseite des Portfolios
├── rights.html         # Seite für Urheberrecht und Nutzungsbedingungen
├── style.css           # Einziges Stylesheet für die gesamte Website
├── script.js           # Einziges JavaScript-Skript mit der gesamten Logik
├── supabase_schema.sql # SQL-Skript zum Erstellen der Tabelle in Supabase
└── README.md           # Diese Dokumentationsdatei


### ⚙️ Lokale Einrichtung und Installation

Um dieses Projekt lokal auszuführen, folgen Sie den nachstehenden Schritten:

**Voraussetzungen:**
* Ein moderner Webbrowser (Chrome, Firefox, Edge, Safari).
* Git installiert (optional, zum Klonen).
* Ein kostenloses Konto bei [Supabase](https://supabase.com/).

**Schritte:**

1.  **Repository klonen:**
    ```bash
    git clone [Link zu Ihrem GitHub Repository]
    cd repository-ordner-name
    ```
    Oder laden Sie das ZIP direkt von GitHub herunter.

2.  **Supabase konfigurieren:**
    * Erstellen Sie ein neues Projekt auf [Supabase](https://supabase.com/).
    * Gehen Sie in Ihrem Projekt-Dashboard zu **Project Settings** (Zahnrad-Symbol in der linken Seitenleiste) > **API**.
    * Kopieren Sie die **Project URL** und die **Project API Keys** (`anon` `public`).
    * Öffnen Sie die Datei `script.js` in Ihrem Code-Editor.
    * Suchen Sie die Konstanten `SUPABASE_URL` und `SUPABASE_ANON_KEY` (nahe dem Anfang der Datei).
    * **Ersetzen** Sie die Zeichenketten `'SUA_SUPABASE_URL'` und `'SUA_SUPABASE_ANON_KEY'` durch Ihre von Supabase kopierten Anmeldedaten. **Achtung:** Behalten Sie die Anführungszeichen bei.
    * Gehen Sie im Supabase-Dashboard zum **SQL Editor** (Terminal-Symbol in der Seitenleiste).
    * Klicken Sie auf **+ New query**.
    * Kopieren Sie den gesamten Inhalt der Datei `supabase_schema.sql` aus diesem Repository.
    * Fügen Sie den SQL-Code in den Supabase-Editor ein und klicken Sie auf **RUN**. Dadurch wird die Tabelle `contact_submissions` erstellt.
    * **WICHTIG (Sicherheit):**
        * Gehen Sie zu **Authentication** (Benutzer-Symbol) > **Policies**.
        * Suchen Sie die Tabelle `contact_submissions`. Wenn RLS (Row Level Security) nicht aktiviert ist, **aktivieren Sie es**.
        * Stellen Sie sicher, dass die Richtlinie namens `"Allow anonymous inserts"` (durch das SQL-Skript erstellt) existiert und für die Rolle `anon` bei der `INSERT`-Operation aktiviert ist. **Dieser Schritt ist entscheidend, damit das Formular funktioniert und Ihre Datenbank geschützt ist.**

3.  **Lokal ausführen:**
    * Öffnen Sie einfach die Datei `index.html` direkt in Ihrem Webbrowser.
    * Die Seite sollte geladen werden, und das Kontaktformular sollte nun Daten an Ihre Tabelle in Supabase senden.

### 🔧 Konfiguration und Anpassung

So passen Sie das Portfolio mit Ihren Informationen an:

* **Persönliche Informationen:**
    * **Name:** Bearbeiten Sie den Namen in den Fußzeilen von `index.html` und `rights.html` sowie den Schlüssel `footerOwnerName` im `translations`-Objekt in `script.js`.
    * **Berufsbezeichnung:** Bearbeiten Sie den Text im `<p class="job-title">`-Tag in `index.html` und aktualisieren Sie den Schlüssel `jobTitle` in `translations` (in `script.js`) für alle Sprachen.
    * **Soziale Links und Kontakt:** Aktualisieren Sie die `href`-Links im `div.social-links` in den Fußzeilen von `index.html` und `rights.html`.

* **Projekte:**
    * **Struktur:** Suchen Sie in `index.html` den Abschnitt `id="projects"`. Jedes Projekt befindet sich in einem `<article class="project-card">`.
    * **Bild:** Ändern Sie `src` und `alt` des `<img>`-Tags. Legen Sie Ihre Bilder im Ordner `images/` ab. Verwenden Sie beschreibende Namen.
    * **Titel und Beschreibung:** Bearbeiten Sie die `data-translate`-Attribute (z.B. `project1Title`, `project1Desc`). **Denken Sie daran**, die entsprechenden Schlüssel im `translations`-Objekt in `script.js` für alle Sprachen hinzuzufügen oder zu ändern.
    * **Link:** Aktualisieren Sie den `href` im `<a>`-Tag der Schaltfläche "Projekt ansehen".
    * **Hinzufügen/Entfernen:** Kopieren/einfügen oder entfernen Sie ganze `<article class="project-card">`-Blöcke. Wenn Sie etwas hinzufügen, erstellen Sie neue Übersetzungsschlüssel (z.B. `project4Title`, `project4Desc`) und fügen Sie sie `script.js` hinzu.

* **Fähigkeiten (Skills):**
    * Suchen Sie in `index.html` den Abschnitt `id="skills"`. Jede Fähigkeit befindet sich in einem `<div class="skill-item">`.
    * Bearbeiten Sie den Text im `<p>`-Tag (Name der Fähigkeit).
    * **Symbol (Icon):** Ersetzen Sie den Inhalt des `<span class="skill-icon">` durch Ihr bevorzugtes Symbol (die Verwendung von Inline-SVG wird für bessere Leistung und Skalierbarkeit empfohlen, oder ein `<img>`-Tag). Passen Sie bei Bedarf den Stil im CSS an.
    * **Hinzufügen/Entfernen:** Kopieren/einfügen oder entfernen Sie `<div class="skill-item">`-Blöcke.

* **Übersetzungen:**
    * Öffnen Sie `script.js`. Das `translations`-Objekt enthält alle Texte.
    * Um einen vorhandenen Text zu ändern, suchen Sie den entsprechenden Schlüssel (z.B. `greeting`, `project1Desc`) in der gewünschten Sprache (`pt-BR`, `en`, etc.) und ändern Sie den Wert der Zeichenkette.
    * Um einen neuen übersetzbaren Text hinzuzufügen:
        1.  Fügen Sie im HTML (`index.html` oder `rights.html`) das Attribut `data-translate="ihrNeuerEinzigerSchlüssel"` zu dem HTML-Element hinzu, das den Text enthalten soll.
        2.  Fügen Sie in `script.js` den Schlüssel `"ihrNeuerEinzigerSchlüssel"` mit dem entsprechenden übersetzten Text in **jedes** Sprachobjekt (`pt-BR`, `en`, `es`, `fr`, `de`) ein.
    * **Titel und Beschreibung (SEO):** Bearbeiten Sie die Schlüssel `pageTitle` und `metaDescription` in `translations`.

* **Farbthemen:**
    * Öffnen Sie `style.css`.
    * Die Grundfarben (Standard/Englisch) und die Variablen für den Dunkelmodus sind in `:root` und `@media (prefers-color-scheme: dark)` definiert.
    * Die Themen für jede Sprache sind in den Selektoren `html.lang-pt-BR`, `html.lang-es` usw. definiert. Sie können die Werte der CSS-Variablen (`--primary-color`, `--secondary-color` usw.) innerhalb dieser Blöcke anpassen, um die Farben jedes Themas zu ändern.

* **Supabase-Tabelle:** Wenn Sie die Tabellenstruktur ändern müssen (Spalten hinzufügen/entfernen), bearbeiten Sie die Datei `supabase_schema.sql` und führen Sie die Änderungen (z.B. `ALTER TABLE`-Befehle) im Supabase SQL Editor aus. Denken Sie daran, die Sendelogik in `script.js` anzupassen, wenn Sie neue Felder zum Formular hinzufügen.

### ☁️ Deployment

Dies ist eine statische Website (HTML, CSS, JS) und kann problemlos auf Plattformen wie gehostet werden:

* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)
* [GitHub Pages](https://pages.github.com/)

**Allgemeine Anleitung:**

1.  Erstellen Sie ein Konto auf der gewählten Plattform.
2.  Verbinden Sie Ihr GitHub-Repository.
3.  Konfigurieren Sie die Build-Optionen (normalerweise sind für dieses Projekt keine Build-Befehle erforderlich).
4.  Stellen Sie die Seite bereit (Deploy).

**Sicherheitsüberlegungen (Supabase Keys):**

* Der `SUPABASE_ANON_KEY` gilt als öffentlich und sicher für die Exposition im Frontend, **SOLANGE** Sie die **Row Level Security (RLS)** und die **Policies** in Ihrer Supabase-Tabelle korrekt konfiguriert haben.
* Stellen Sie **NIEMALS** Ihren `SUPABASE_SERVICE_ROLE_KEY` im Frontend-Code bereit.
* Wenn Sie ein **öffentliches** GitHub-Repository verwenden, beachten Sie, dass Ihr `anon key` sichtbar sein wird. Die Sicherheit hängt vollständig von der in Supabase konfigurierten RLS ab.

### ❗ Fehlerbehebung (Troubleshooting)

* **Formular sendet nicht:**
    * Überprüfen Sie, ob die Anmeldedaten `SUPABASE_URL` und `SUPABASE_ANON_KEY` in `script.js` korrekt sind und keine Tippfehler enthalten.
    * Bestätigen Sie, dass der Tabellenname in `supabase.from('contact_submissions')` in `script.js` exakt mit dem in Supabase erstellten Tabellennamen übereinstimmt.
    * **Überprüfen Sie RLS und Policies in Supabase:** Stellen Sie sicher, dass RLS für die Tabelle aktiviert ist und eine Richtlinie existiert, die `INSERT` für die Rolle `anon` erlaubt. Dies ist der häufigste Fehler.
    * Öffnen Sie die Entwicklerkonsole des Browsers (F12) und prüfen Sie auf Fehlermeldungen im Zusammenhang mit Supabase oder JavaScript.
* **Stile/Themen werden nicht korrekt angewendet:**
    * Leeren Sie den Cache Ihres Browsers.
    * Überprüfen Sie, ob die `lang-xx`-Klassen beim Sprachwechsel korrekt zum `<html>`-Element hinzugefügt werden (inspizieren Sie das Element im Browser).
    * Bestätigen Sie, dass die Namen der CSS-Variablen korrekt sind und keine Syntaxfehler in `style.css` vorliegen.
* **Übersetzungen funktionieren nicht:**
    * Überprüfen Sie, ob das `data-translate`-Attribut im HTML exakt mit dem Schlüssel im `translations`-Objekt in `script.js` übereinstimmt.
    * Überprüfen Sie, ob der Schlüssel für die ausgewählte Sprache existiert.
    * Suchen Sie nach JavaScript-Fehlern in der Browserkonsole.
* **Animationen treten nicht auf:**
    * Überprüfen Sie, ob die Klasse `.animate-on-scroll` auf den gewünschten Elementen im HTML vorhanden ist.
    * Bestätigen Sie, dass der Intersection Observer korrekt initialisiert wird (prüfen Sie die Konsole auf Fehler). Sehr alte Browser unterstützen ihn möglicherweise nicht (der aktuelle Fallback zeigt die Elemente einfach an).

### 🤝 Beiträge

Derzeit ist dies ein persönliches Projekt. Vorschläge und Feedback sind jedoch willkommen! Sie können ein *Issue* auf GitHub öffnen, um Fehler zu melden oder Verbesserungen vorzuschlagen.

### 📜 Lizenz

Verteilt unter der MIT-Lizenz. Siehe `LICENSE` (falls vorhanden) für weitere Informationen, oder betrachten Sie den Inhalt als proprietär, wie in `rights.html` beschrieben.

*(Anweisung: Wenn Sie sich für eine Lizenz wie MIT entscheiden, erstellen Sie eine LICENSE-Datei im Projektstammverzeichnis mit dem Lizenztext. Andernfalls entfernen Sie das Lizenzabzeichen und diesen Abschnitt oder verweisen Sie einfach auf die Seite rights.html)*

### 📞 Kontakt

Davi Silva dos Santos

* **LinkedIn:** [https://www.linkedin.com/in/davi-silva-dos-santos-sql-python-en-pt](https://www.linkedin.com/in/davi-silva-dos-santos-sql-python-en-pt)
* **E-Mail:** `ihre.email@beispiel.com`
* **Formular auf der Website:** [Link zum Kontaktbereich auf Ihrer Website]

---
