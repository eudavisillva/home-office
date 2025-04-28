document.addEventListener('DOMContentLoaded', () => {

    // --- Configuração do Supabase ---
    const SUPABASE_URL = 'SUA_SUPABASE_URL';
    const SUPABASE_ANON_KEY = 'SUA_SUPABASE_ANON_KEY';
    let supabase = null;
    try {
        if (typeof window.supabase !== 'undefined' && window.supabase.createClient) { // Verifica window.supabase
             supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
             console.log('Supabase client initialized.');
        } else { console.error('Supabase library not found.'); }
    } catch (error) { console.error("Error initializing Supabase client:", error); }


    // --- Dados de Tradução (Com conteúdo da página de Direitos) ---
    const translations = {
        'pt-BR': {
            // Página Principal
            pageTitle: "Davi Silva dos Santos - Analista de Dados Júnior", metaDescription: "Portfólio de Davi Silva dos Santos, Analista de Dados Júnior especializado em Python, SQL e Power BI.",
            greeting: "Olá, eu sou", jobTitle: "Analista de Dados Júnior | Python, SQL, Power BI", contactMe: "Entre em Contato",
            projectsTitle: "Projetos em Destaque",
            project1Title: "Análise de Vendas Mensais", project1Desc: "Dashboard interativo em Power BI para visualização de KPIs de vendas.",
            project2Title: "Segmentação de Clientes com Python", project2Desc: "Utilização de Python (Pandas, Scikit-learn) para agrupar clientes.",
            project3Title: "Automação de Relatórios com SQL", project3Desc: "Criação de scripts SQL para automatizar a geração de relatórios diários.",
            viewProject: "Ver Projeto", skillsTitle: "Habilidades Técnicas", contactTitle: "Contato",
            formName: "Nome", formEmail: "Email", formMessage: "Mensagem", formSubmit: "Enviar Mensagem",
            formSuccess: "Obrigado! Sua mensagem foi enviada com sucesso.", formError: "Desculpe, ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.", formSubmitting: "Enviando...",
            footerOwnerName: "Davi Silva dos Santos", footerRights: "Todos os direitos reservados.",
            // Página de Direitos (rights.html)
            rightsTitle: "Direitos Autorais e Termos de Uso",
            rightsIntroP1: "Esta página detalha os termos relacionados ao uso do conteúdo apresentado no website de Davi Silva dos Santos.",
            rightsHeading1: "1. Propriedade Intelectual",
            rightsH1P1: 'Salvo indicação em contrário, todo o conteúdo exibido neste website – incluindo, mas não se limitando a, textos, gráficos, dados, código-fonte (HTML, CSS, JavaScript), fotografias, imagens, vídeos, sons, ilustrações, artigos, estudos de caso, análises e a seleção e organização dos mesmos ("Conteúdo") – é propriedade de Davi Silva dos Santos.',
            rightsH1P2: "O design visual, a estrutura de navegação e os elementos funcionais deste site são igualmente protegidos por direitos autorais.",
            rightsH1P3: "Copyright © [YEAR] Davi Silva dos Santos. Todos os direitos reservados.", // [YEAR] será substituído
            rightsHeading2: "2. Uso do Conteúdo",
            rightsH2P1: "O Conteúdo deste website é disponibilizado exclusivamente para fins informativos e de avaliação profissional do portfólio de Davi Silva dos Santos.",
            rightsH2P2: "É estritamente proibido:",
            rightsH2L1: "Copiar, reproduzir, republicar, fazer upload, postar, transmitir ou distribuir qualquer parte do Conteúdo por qualquer meio sem a permissão prévia e expressa por escrito de Davi Silva dos Santos.",
            rightsH2L2: "Modificar, adaptar, traduzir ou criar trabalhos derivados baseados no Conteúdo.",
            rightsH2L3: "Utilizar o Conteúdo para fins comerciais ou de forma que possa competir direta ou indiretamente com as atividades profissionais de Davi Silva dos Santos.",
            rightsH2L4: "Remover ou alterar quaisquer avisos de direitos autorais, marcas registradas ou outros avisos de propriedade contidos no Conteúdo.",
            rightsH2P3: "O acesso ao conteúdo não concede ao usuário qualquer licença ou direito de propriedade sobre o mesmo.",
            rightsHeading3: "3. Conteúdo de Terceiros e Links Externos",
            rightsH3P1: "Este site pode conter links para websites de terceiros ou exibir conteúdo originário de terceiros (por exemplo, bibliotecas de código, fontes, ícones). Tal conteúdo e links são fornecidos apenas para conveniência e informação. Davi Silva dos Santos não se responsabiliza pela precisão, legalidade ou conteúdo de sites externos ou de materiais de terceiros.",
            rightsHeading4: "4. Isenção de Garantias",
            rightsH4P1: 'Embora todos os esforços sejam feitos para garantir a precisão e atualização do Conteúdo, este é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas. Davi Silva dos Santos não garante que o site ou seu conteúdo atenderá aos requisitos do usuário ou que será ininterrupto, oportuno, seguro ou livre de erros.',
            rightsHeading5: "5. Contato",
            rightsH5P1: "Para solicitar permissão de uso do Conteúdo ou para quaisquer outras questões relacionadas a estes termos, por favor, entre em contato através do formulário de contato no site principal ou pelo e-mail fornecido no rodapé.",
            rightsBackLink: "Voltar ao Portfólio"
        },
        'en': {
            // Main Page
            pageTitle: "Davi Silva dos Santos - Junior Data Analyst", metaDescription: "Portfolio of Davi Silva dos Santos, Junior Data Analyst specializing in Python, SQL, and Power BI.",
            greeting: "Hello, I am", jobTitle: "Junior Data Analyst | Python, SQL, Power BI", contactMe: "Get in Touch",
            projectsTitle: "Featured Projects",
            project1Title: "Monthly Sales Analysis", project1Desc: "Interactive Power BI dashboard for visualizing sales KPIs.",
            project2Title: "Customer Segmentation with Python", project2Desc: "Using Python (Pandas, Scikit-learn) to group customers.",
            project3Title: "Report Automation with SQL", project3Desc: "Creation of SQL scripts to automate daily reports.",
            viewProject: "View Project", skillsTitle: "Technical Skills", contactTitle: "Contact",
            formName: "Name", formEmail: "Email", formMessage: "Message", formSubmit: "Send Message",
            formSuccess: "Thank you! Your message has been sent successfully.", formError: "Sorry, there was an error sending your message. Please try again later.", formSubmitting: "Sending...",
            footerOwnerName: "Davi Silva dos Santos", footerRights: "All rights reserved.",
             // Rights Page
            rightsTitle: "Copyright and Terms of Use",
            rightsIntroP1: "This page details the terms related to the use of content presented on the website of Davi Silva dos Santos.",
            rightsHeading1: "1. Intellectual Property",
            rightsH1P1: 'Unless otherwise indicated, all content displayed on this website – including, but not limited to, texts, graphics, data, source code (HTML, CSS, JavaScript), photographs, images, videos, sounds, illustrations, articles, case studies, analyses, and the selection and arrangement thereof ("Content") – is the property of Davi Silva dos Santos.',
            rightsH1P2: "The visual design, navigation structure, and functional elements of this site are equally protected by copyright.",
            rightsH1P3: "Copyright © [YEAR] Davi Silva dos Santos. All rights reserved.",
            rightsHeading2: "2. Use of Content",
            rightsH2P1: "The Content of this website is made available exclusively for informational purposes and professional evaluation of Davi Silva dos Santos's portfolio.",
            rightsH2P2: "It is strictly prohibited:",
            rightsH2L1: "To copy, reproduce, republish, upload, post, transmit, or distribute any part of the Content by any means without the prior express written permission of Davi Silva dos Santos.",
            rightsH2L2: "To modify, adapt, translate, or create derivative works based on the Content.",
            rightsH2L3: "To use the Content for commercial purposes or in a manner that may directly or indirectly compete with the professional activities of Davi Silva dos Santos.",
            rightsH2L4: "To remove or alter any copyright notices, trademarks, or other proprietary notices contained in the Content.",
            rightsH2P3: "Access to the content does not grant the user any license or ownership rights thereto.",
            rightsHeading3: "3. Third-Party Content and External Links",
            rightsH3P1: "This site may contain links to third-party websites or display content originating from third parties (e.g., code libraries, fonts, icons). Such content and links are provided solely for convenience and information. Davi Silva dos Santos is not responsible for the accuracy, legality, or content of external sites or third-party materials.",
            rightsHeading4: "4. Disclaimer of Warranties",
            rightsH4P1: 'Although all efforts are made to ensure the accuracy and timeliness of the Content, it is provided "as is", without warranties of any kind, express or implied. Davi Silva dos Santos does not warrant that the site or its content will meet user requirements or that it will be uninterrupted, timely, secure, or error-free.',
            rightsHeading5: "5. Contact",
            rightsH5P1: "To request permission to use the Content or for any other questions related to these terms, please get in touch via the contact form on the main site or the email provided in the footer.",
            rightsBackLink: "Back to Portfolio"
        },
         'es': {
            // Página Principal
            pageTitle: "Davi Silva dos Santos - Analista de Datos Junior", metaDescription: "Portafolio de Davi Silva dos Santos, Analista de Datos Junior especializado en Python, SQL y Power BI.",
            greeting: "Hola, soy", jobTitle: "Analista de Datos Junior | Python, SQL, Power BI", contactMe: "Contacta Conmigo",
            projectsTitle: "Proyectos Destacados",
            project1Title: "Análisis de Ventas Mensuales", project1Desc: "Dashboard interactivo en Power BI para visualización de KPIs de ventas.",
            project2Title: "Segmentación de Clientes con Python", project2Desc: "Uso de Python (Pandas, Scikit-learn) para agrupar clientes.",
            project3Title: "Automatización de Informes con SQL", project3Desc: "Creación de scripts SQL para automatizar informes diarios.",
            viewProject: "Ver Proyecto", skillsTitle: "Habilidades Técnicas", contactTitle: "Contacto",
            formName: "Nombre", formEmail: "Correo Electrónico", formMessage: "Mensaje", formSubmit: "Enviar Mensaje",
            formSuccess: "¡Gracias! Tu mensaje ha sido enviado con éxito.", formError: "Lo sentimos, hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde.", formSubmitting: "Enviando...",
            footerOwnerName: "Davi Silva dos Santos", footerRights: "Todos los derechos reservados.",
            // Página de Derechos
            rightsTitle: "Derechos de Autor y Términos de Uso",
            rightsIntroP1: "Esta página detalla los términos relacionados con el uso del contenido presentado en el sitio web de Davi Silva dos Santos.",
            rightsHeading1: "1. Propiedad Intelectual",
            rightsH1P1: 'Salvo indicación contraria, todo el contenido mostrado en este sitio web – incluyendo, pero no limitado a, textos, gráficos, datos, código fuente (HTML, CSS, JavaScript), fotografías, imágenes, videos, sonidos, ilustraciones, artículos, estudios de caso, análisis y la selección y disposición de los mismos ("Contenido") – es propiedad de Davi Silva dos Santos.',
            rightsH1P2: "El diseño visual, la estructura de navegación y los elementos funcionales de este sitio están igualmente protegidos por derechos de autor.",
            rightsH1P3: "Copyright © [YEAR] Davi Silva dos Santos. Todos los derechos reservados.",
            rightsHeading2: "2. Uso del Contenido",
            rightsH2P1: "El Contenido de este sitio web se pone a disposición exclusivamente con fines informativos y de evaluación profesional del portafolio de Davi Silva dos Santos.",
            rightsH2P2: "Queda estrictamente prohibido:",
            rightsH2L1: "Copiar, reproducir, republicar, cargar, publicar, transmitir o distribuir cualquier parte del Contenido por cualquier medio sin el permiso previo y expreso por escrito de Davi Silva dos Santos.",
            rightsH2L2: "Modificar, adaptar, traducir o crear trabajos derivados basados en el Contenido.",
            rightsH2L3: "Utilizar el Contenido con fines comerciales o de forma que pueda competir directa o indirectamente con las actividades profesionales de Davi Silva dos Santos.",
            rightsH2L4: "Eliminar o alterar cualquier aviso de derechos de autor, marcas comerciales u otros avisos de propiedad contenidos en el Contenido.",
            rightsH2P3: "El acceso al contenido no otorga al usuario ninguna licencia o derecho de propiedad sobre el mismo.",
            rightsHeading3: "3. Contenido de Terceros y Enlaces Externos",
            rightsH3P1: "Este sitio puede contener enlaces a sitios web de terceros o mostrar contenido originario de terceros (por ejemplo, bibliotecas de código, fuentes, iconos). Dicho contenido y enlaces se proporcionan únicamente para conveniencia e información. Davi Silva dos Santos no se responsabiliza por la precisión, legalidad o contenido de sitios externos o materiales de terceros.",
            rightsHeading4: "4. Exención de Garantías",
            rightsH4P1: 'Aunque se realizan todos los esfuerzos para garantizar la precisión y actualidad del Contenido, este se proporciona "tal cual", sin garantías de ningún tipo, expresas o implícitas. Davi Silva dos Santos no garantiza que el sitio o su contenido satisfagan los requisitos del usuario ni que sea ininterrumpido, oportuno, seguro o libre de errores.',
            rightsHeading5: "5. Contacto",
            rightsH5P1: "Para solicitar permiso para usar el Contenido o para cualquier otra consulta relacionada con estos términos, póngase en contacto a través del formulario de contacto en el sitio principal o el correo electrónico proporcionado en el pie de página.",
            rightsBackLink: "Volver al Portafolio"
        },
         'fr': {
            // Page Principale
            pageTitle: "Davi Silva dos Santos - Analyste de Données Junior", metaDescription: "Portfolio de Davi Silva dos Santos, Analyste de Données Junior spécialisé en Python, SQL et Power BI.",
            greeting: "Bonjour, je suis", jobTitle: "Analyste de Données Junior | Python, SQL, Power BI", contactMe: "Contactez-moi",
            projectsTitle: "Projets à la Une",
            project1Title: "Analyse des Ventes Mensuelles", project1Desc: "Tableau de bord interactif Power BI pour visualiser les KPI de vente.",
            project2Title: "Segmentation Client avec Python", project2Desc: "Utilisation de Python (Pandas, Scikit-learn) pour regrouper les clients.",
            project3Title: "Automatisation des Rapports avec SQL", project3Desc: "Création de scripts SQL pour automatiser les rapports quotidiens.",
            viewProject: "Voir le Projet", skillsTitle: "Compétences Techniques", contactTitle: "Contact",
            formName: "Nom", formEmail: "Email", formMessage: "Message", formSubmit: "Envoyer le Message",
            formSuccess: "Merci ! Votre message a été envoyé avec succès.", formError: "Désolé, une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.", formSubmitting: "Envoi...",
            footerOwnerName: "Davi Silva dos Santos", footerRights: "Tous droits réservés.",
             // Page Droits
            rightsTitle: "Droits d'Auteur et Conditions d'Utilisation",
            rightsIntroP1: "Cette page détaille les conditions relatives à l'utilisation du contenu présenté sur le site web de Davi Silva dos Santos.",
            rightsHeading1: "1. Propriété Intellectuelle",
            rightsH1P1: 'Sauf indication contraire, tout le contenu affiché sur ce site web – y compris, mais sans s\'y limiter, les textes, graphiques, données, code source (HTML, CSS, JavaScript), photographies, images, vidéos, sons, illustrations, articles, études de cas, analyses ainsi que leur sélection et arrangement ("Contenu") – est la propriété de Davi Silva dos Santos.',
            rightsH1P2: "La conception visuelle, la structure de navigation et les éléments fonctionnels de ce site sont également protégés par le droit d'auteur.",
            rightsH1P3: "Copyright © [YEAR] Davi Silva dos Santos. Tous droits réservés.",
            rightsHeading2: "2. Utilisation du Contenu",
            rightsH2P1: "Le Contenu de ce site web est mis à disposition exclusivement à des fins d'information et d'évaluation professionnelle du portfolio de Davi Silva dos Santos.",
            rightsH2P2: "Il est strictement interdit :",
            rightsH2L1: "De copier, reproduire, republier, télécharger, poster, transmettre ou distribuer toute partie du Contenu par quelque moyen que ce soit sans l'autorisation écrite préalable et expresse de Davi Silva dos Santos.",
            rightsH2L2: "De modifier, adapter, traduire ou créer des œuvres dérivées basées sur le Contenu.",
            rightsH2L3: "D'utiliser le Contenu à des fins commerciales ou d'une manière qui pourrait concurrencer directement ou indirectement les activités professionnelles de Davi Silva dos Santos.",
            rightsH2L4: "De supprimer ou modifier tout avis de droit d'auteur, marque déposée ou autre avis de propriété contenu dans le Contenu.",
            rightsH2P3: "L'accès au contenu ne confère à l'utilisateur aucune licence ni aucun droit de propriété sur celui-ci.",
            rightsHeading3: "3. Contenu de Tiers et Liens Externes",
            rightsH3P1: "Ce site peut contenir des liens vers des sites web de tiers ou afficher du contenu provenant de tiers (par exemple, bibliothèques de code, polices, icônes). Ce contenu et ces liens sont fournis uniquement pour votre commodité et information. Davi Silva dos Santos n'est pas responsable de l'exactitude, de la légalité ou du contenu des sites externes ou des matériaux de tiers.",
            rightsHeading4: "4. Exclusion de Garanties",
            rightsH4P1: 'Bien que tous les efforts soient faits pour assurer l\'exactitude et la mise à jour du Contenu, celui-ci est fourni "tel quel", sans garantie d\'aucune sorte, expresse ou implicite. Davi Silva dos Santos ne garantit pas que le site ou son contenu répondra aux exigences de l\'utilisateur ou qu\'il sera ininterrompu, opportun, sûr ou exempt d\'erreurs.',
            rightsHeading5: "5. Contact",
            rightsH5P1: "Pour demander l'autorisation d'utiliser le Contenu ou pour toute autre question relative à ces conditions, veuillez prendre contact via le formulaire de contact sur le site principal ou l'e-mail fourni en pied de page.",
            rightsBackLink: "Retour au Portfolio"
        },
        'de': {
            // Hauptseite
            pageTitle: "Davi Silva dos Santos - Junior Datenanalyst", metaDescription: "Portfolio von Davi Silva dos Santos, Junior Datenanalyst spezialisiert auf Python, SQL und Power BI.",
            greeting: "Hallo, ich bin", jobTitle: "Junior Datenanalyst | Python, SQL, Power BI", contactMe: "Kontaktieren Sie mich",
            projectsTitle: "Vorgestellte Projekte",
            project1Title: "Monatliche Verkaufsanalyse", project1Desc: "Interaktives Power BI-Dashboard zur Visualisierung von Verkaufs-KPIs.",
            project2Title: "Kundensegmentierung mit Python", project2Desc: "Verwendung von Python (Pandas, Scikit-learn) zur Gruppierung von Kunden.",
            project3Title: "Berichtsautomatisierung mit SQL", project3Desc: "Erstellung von SQL-Skripten zur Automatisierung täglicher Berichte.",
            viewProject: "Projekt ansehen", skillsTitle: "Technische Fähigkeiten", contactTitle: "Kontakt",
            formName: "Name", formEmail: "E-Mail", formMessage: "Nachricht", formSubmit: "Nachricht senden",
            formSuccess: "Danke! Ihre Nachricht wurde erfolgreich gesendet.", formError: "Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.", formSubmitting: "Senden...",
            footerOwnerName: "Davi Silva dos Santos", footerRights: "Alle Rechte vorbehalten.",
            // Rechte Seite
            rightsTitle: "Urheberrecht und Nutzungsbedingungen",
            rightsIntroP1: "Diese Seite erläutert die Bedingungen für die Nutzung der auf der Website von Davi Silva dos Santos präsentierten Inhalte.",
            rightsHeading1: "1. Geistiges Eigentum",
            rightsH1P1: 'Sofern nicht anders angegeben, ist der gesamte auf dieser Website angezeigte Inhalt – einschließlich, aber nicht beschränkt auf Texte, Grafiken, Daten, Quellcode (HTML, CSS, JavaScript), Fotografien, Bilder, Videos, Töne, Illustrationen, Artikel, Fallstudien, Analysen sowie deren Auswahl und Anordnung ("Inhalt") – Eigentum von Davi Silva dos Santos.',
            rightsH1P2: "Das visuelle Design, die Navigationsstruktur und die funktionalen Elemente dieser Website sind ebenfalls urheberrechtlich geschützt.",
            rightsH1P3: "Copyright © [YEAR] Davi Silva dos Santos. Alle Rechte vorbehalten.",
            rightsHeading2: "2. Nutzung des Inhalts",
            rightsH2P1: "Der Inhalt dieser Website wird ausschließlich zu Informationszwecken und zur professionellen Bewertung des Portfolios von Davi Silva dos Santos zur Verfügung gestellt.",
            rightsH2P2: "Es ist strengstens untersagt:",
            rightsH2L1: "Jeglichen Teil des Inhalts ohne vorherige ausdrückliche schriftliche Genehmigung von Davi Silva dos Santos zu kopieren, zu vervielfältigen, neu zu veröffentlichen, hochzuladen, zu posten, zu übertragen oder zu verbreiten.",
            rightsH2L2: "Den Inhalt zu modifizieren, anzupassen, zu übersetzen oder davon abgeleitete Werke zu erstellen.",
            rightsH2L3: "Den Inhalt für kommerzielle Zwecke oder in einer Weise zu nutzen, die direkt oder indirekt mit den beruflichen Aktivitäten von Davi Silva dos Santos konkurrieren könnte.",
            rightsH2L4: "Urheberrechtsvermerke, Marken oder andere Eigentumshinweise im Inhalt zu entfernen oder zu ändern.",
            rightsH2P3: "Der Zugriff auf den Inhalt gewährt dem Nutzer keine Lizenz oder Eigentumsrechte daran.",
            rightsHeading3: "3. Inhalte Dritter und externe Links",
            rightsH3P1: "Diese Website kann Links zu Websites Dritter enthalten oder Inhalte anzeigen, die von Dritten stammen (z. B. Code-Bibliotheken, Schriftarten, Symbole). Solche Inhalte und Links werden nur aus Gründen der Zweckmäßigkeit und Information bereitgestellt. Davi Silva dos Santos ist nicht verantwortlich für die Richtigkeit, Rechtmäßigkeit oder den Inhalt externer Websites oder Materialien Dritter.",
            rightsHeading4: "4. Gewährleistungsausschluss",
            rightsH4P1: 'Obwohl alle Anstrengungen unternommen werden, um die Richtigkeit und Aktualität des Inhalts sicherzustellen, wird dieser "wie besehen" ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt. Davi Silva dos Santos garantiert nicht, dass die Website oder ihr Inhalt den Anforderungen des Nutzers entspricht oder ununterbrochen, rechtzeitig, sicher oder fehlerfrei ist.',
            rightsHeading5: "5. Kontakt",
            rightsH5P1: "Um die Erlaubnis zur Nutzung des Inhalts anzufordern oder bei sonstigen Fragen zu diesen Bedingungen, kontaktieren Sie uns bitte über das Kontaktformular auf der Hauptseite oder die im Footer angegebene E-Mail-Adresse.",
            rightsBackLink: "Zurück zum Portfolio"
        }
    };

    // --- Elementos do DOM ---
    const languageSelector = document.querySelector('.language-selector');
    const translatableElements = document.querySelectorAll('[data-translate]'); // Pega todos em qualquer página
    const htmlTag = document.documentElement;
    const titleTag = document.querySelector('title');
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    const contactForm = document.getElementById('contact-form'); // Pode ser null em rights.html
    const formFeedbackEl = document.getElementById('form-feedback'); // Pode ser null
    const submitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
    const currentYearSpans = document.querySelectorAll('#current-year, #current-year-rights'); // Pega ambos os spans de ano


    // --- Lógica de Idioma ---
    const languageClasses = ['lang-pt-BR', 'lang-en', 'lang-es', 'lang-fr', 'lang-de'];
    let currentLang = 'pt-BR'; // Default, será sobrescrito

    function updateText(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found. Defaulting to pt-BR.`);
            lang = 'pt-BR';
        }
        currentLang = lang;
        const langTranslations = translations[lang];
        const currentYear = new Date().getFullYear().toString();

        // Atualiza textos
        translatableElements.forEach(el => {
            const key = el.dataset.translate;
            if (langTranslations.hasOwnProperty(key)) {
                let translatedText = langTranslations[key];
                // Substitui [YEAR] se existir na tradução (para copyright)
                if (typeof translatedText === 'string') {
                    translatedText = translatedText.replace('[YEAR]', currentYear);
                }

                if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && key.toLowerCase().includes('message')) {
                     el.placeholder = translatedText;
                } else if (el.tagName === 'LABEL' || el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                    // Para links, apenas atualiza o texto, mantendo href
                    // Para outros (p, h1, button, li, etc.), atualiza textContent
                    el.textContent = translatedText;
                }
            } else { console.warn(`Translation key "${key}" not found for language "${lang}".`); }
        });

        // Atualiza lang e classe do HTML
        htmlTag.lang = lang;
        htmlTag.classList.remove(...languageClasses);
        htmlTag.classList.add(`lang-${lang}`);

        // Atualiza SEO (Apenas se a tag existir na página atual)
        if (titleTag && langTranslations.pageTitle) titleTag.textContent = langTranslations.pageTitle; // Assume pageTitle para index
        // Para title da rights page, podemos buscar a tradução de rightsTitle se pageTitle não existir
        else if (titleTag && langTranslations.rightsTitle) titleTag.textContent = langTranslations.rightsTitle + " - Davi Silva dos Santos";

        if (metaDescriptionTag && langTranslations.metaDescription) metaDescriptionTag.content = langTranslations.metaDescription;

        // Atualiza botões de idioma
        languageSelector.querySelectorAll('button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Salva no localStorage
        localStorage.setItem('preferredLanguage', lang);
    }

    // Detecção inicial de idioma
    function setInitialLanguage() {
        let initialLang = localStorage.getItem('preferredLanguage');
        if (!initialLang) {
            let browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.startsWith('pt')) initialLang = 'pt-BR';
            else if (browserLang.startsWith('en')) initialLang = 'en';
            else if (browserLang.startsWith('es')) initialLang = 'es';
            else if (browserLang.startsWith('fr')) initialLang = 'fr';
            else if (browserLang.startsWith('de')) initialLang = 'de';
            else initialLang = 'pt-BR';
        }
        if (!translations[initialLang]) { initialLang = 'pt-BR'; }
        updateText(initialLang); // Aplica tradução e classe inicial
    }

    setInitialLanguage();

    // Listeners de idioma
    languageSelector.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON' && event.target.dataset.lang) {
            const selectedLang = event.target.dataset.lang;
            if (translations[selectedLang]) updateText(selectedLang);
        }
    });

    // --- Lógica do Formulário de Contato (Só executa se o form existir) ---
    function showFormFeedback(message, type = 'error') {
        if (!formFeedbackEl) return;
        formFeedbackEl.textContent = message;
        formFeedbackEl.className = `form-feedback ${type} visible`;
        setTimeout(() => { formFeedbackEl.classList.remove('visible'); }, 6000);
    }

    if (contactForm && supabase && submitButton) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const originalButtonText = submitButton.textContent; // Guarda o texto traduzido atual
            submitButton.disabled = true;
            submitButton.textContent = translations[currentLang]?.formSubmitting || 'Enviando...';
            formFeedbackEl.classList.remove('visible');

            const formData = new FormData(contactForm);
            const submission = { name: formData.get('name'), email: formData.get('email'), message: formData.get('message'), };

            try {
                const { data, error } = await supabase.from('contact_submissions').insert([submission]);
                if (error) throw error;
                console.log('Supabase submission successful:', data);
                showFormFeedback(translations[currentLang]?.formSuccess || 'Mensagem enviada!', 'success');
                contactForm.reset();
            } catch (error) {
                console.error('Error submitting to Supabase:', error.message);
                showFormFeedback(translations[currentLang]?.formError || 'Erro ao enviar.', 'error');
            } finally {
                submitButton.disabled = false;
                // Restaura o texto do botão para a tradução correta
                 submitButton.textContent = translations[currentLang]?.formSubmit || originalButtonText;
            }
        });
    } else if (contactForm && !supabase) {
         console.warn("Supabase client not initialized. Contact form submissions will not work.");
         if(submitButton) submitButton.disabled = true;
    }

    // --- Animação de Scroll (Funciona em ambas as páginas) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (typeof IntersectionObserver !== 'undefined') { // Verifica se API é suportada
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => observer.observe(el));
    } else { // Fallback para navegadores sem IntersectionObserver (raro)
        animatedElements.forEach(el => el.classList.add('is-visible')); // Mostra tudo de uma vez
    }


    // --- Atualização do Ano no Rodapé (Funciona em ambas as páginas) ---
     function updateFooterYear() {
        const year = new Date().getFullYear();
         currentYearSpans.forEach(span => {
            if(span) span.textContent = year;
        });
        // Atualiza também o placeholder [YEAR] nas traduções de copyright se necessário
         if (translations[currentLang]?.rightsH1P3) {
             const copyrightElement = document.querySelector('[data-translate="rightsH1P3"]');
             if (copyrightElement) {
                 copyrightElement.textContent = translations[currentLang].rightsH1P3.replace('[YEAR]', year);
             }
         }
     }
     updateFooterYear(); // Chama na inicialização
     // Re-chama ao mudar idioma para garantir que [YEAR] seja substituído no texto traduzido
     languageSelector.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON' && event.target.dataset.lang) {
           setTimeout(updateFooterYear, 50); // Pequeno delay para garantir que o texto foi trocado antes
        }
    });


}); // Fim do DOMContentLoaded