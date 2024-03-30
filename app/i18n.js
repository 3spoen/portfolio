import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "About": "About me",
      "Hire me":"Hire me",
      "Contact": "Contact",
      "Projects": "Projects",
      "My Projects:":"My Projects:",
      "Download CV EN":"Download CV EN",
      "Download CV DE":"Download CV DE",
      "AboutSectionTxt":"Hello! I'm Omar, a dedicated and passionate individual from Syria.In October 2023, I proudly completed my studies, embarking on a journey to forge a career in the dynamic field of Information Technology. As I navigate the path towards securing a position that allows me to apply and expand my skills, I am eager to connect with opportunities and projects that challenge me and foster growth.If you're looking for someone with a fresh perspective and a steadfast commitment to innovation in IT, let's get in touch!",
      "Education":"Education",
      "Skills":"Skills",
      "Let's Connect":"Let's Connect",
      "Your email":"Your email",
      "Subject":"Subject",
      "Message":"Message",
      "Send":"Send",
      "Table Tennis":"Table Tennis",
      "Syrian high school":"Syrian high school",
      "Graduated on Jul 2015 ":"Graduated on Jul 2015",
      "Guitar":"Guitar",
      "EmailP1":"Are you on the lookout for fresh talent with a passion for learning and growth? I'm at the beginning of my professional journey and eager to dive into new challenges and opportunities. Although my experience in the field is just starting, my dedication, quick learning ability, and commitment to contributing positively to any team are steadfast.",
      "EmailP2":"Please use the form below to reach out to me with any opportunities, advice, or if you simply wish to connect and share insights. Your guidance and suggestions would be greatly appreciated as I navigate the start of my career.",
      "Email sent successfully Habibi!":"Email sent successfully Habibi!0",
      "HeroSectionP4":"KISS : Keep it simple, stupid.👍",
      "It’s Me,":"It’s Me,",
      "HeroSectionP_1":"Syrien Computer scientist.",
      "HeroSectionP_2":"Welcome to my website.",

      "ProjectName_1":"Numbers Prediction using Artificial Neural Network",
      "ProjectName_1":"Road Lane Line Detection",
      "ProjectName_7":"Network Programming, Multiplayer Connect Four Java Game(incompleted)",
      "ProjectDesc_1":"Programmed an artificial neural network that predicts a handwritten number from a 28x28 pixel picture using the MNIST database. Only the Numpy library and linear algebraic equations are used to construct the ANN",
      "ProjectDesc_2":"Used the Canny edge detection method and Hough transform in Python and openCV to identify a road lane from video input",
      "ProjectDesc_3":"Implemented parallel algorithms to enhance images of text for printing. The algorithms had to use hardware efficiently, thus OpenMP was used to parallelize and vectorize the C++ code",
      "ProjectDesc_4":"a responsive and customizable portfolio website using NextJs and Tailwind",
      "ProjectDesc_5":"Optimized Python and OpenGL-based Mandelbrot visualizer employs parallel processing for efficient hardware use, allowing real-time fractal exploration with advanced shader effects",
      "ProjectDesc_6":"Implemented a shopping cart using Spring Boot for the backend in Java, optimizing for efficient data management and secure transaction processing",
      "ProjectDesc_7":"Developed the game Connect Four with Java using a Client/Server architecture. The game is multiplayer and has a chat function",

    }
  },
  de: {
    translation: {
      
      "About": "Über mich",
      "Contact": "Kontakt",
      "Projects": "Projekte",
      "Table Tennis":"Tischtennis",
      "Download CV EN":"CV herunterladen EN",
      "Download CV DE":"CV herunterladen DE",
      "Guitar":"Gitarre",
      "Hire me":"Einstellen",
      "My Projects:":"Meine Projecte:",
      "All":"Alle",
      "Syrian high school":"Syrisches Gymnasium",
      "Graduated on Jul 2015 ":"Absolviert on Jul 2015",
      "AboutSectionTxt":"Hallo! Ich bin Omar, ein engagierter und leidenschaftlicher Mensch aus Syrien. Im Oktober 2023 habe ich mein Studium erfolgreich abgeschlossen und strebe nun eine Karriere im dynamischen Bereich der Informationstechnologie an. Auf meinem Weg zu einer Position, in der ich meine Fähigkeiten anwenden und ausbauen kann, suche ich nach Möglichkeiten und Projekten, die mich herausfordern und mein Wachstum fördern. Wenn Sie jemanden mit frischer Perspektive und unerschütterlichem Engagement für Innovationen in der IT suchen, lassen Sie uns in Kontakt treten!",
      "Education":"Ausbildung",
      "Skills":"Skills",
      "Let's Connect":"Lasst uns verbinden",
      "EmailP1":"Sind Sie auf der Suche nach neuem Talent mit einer Leidenschaft für Lernen und Wachstum? Ich stehe am Anfang meiner beruflichen Laufbahn und bin begierig darauf, in neue Herausforderungen und Möglichkeiten einzutauchen. Obwohl meine Erfahrung in dem Bereich gerade erst beginnt, sind meine Hingabe, meine schnelle Auffassungsgabe und mein Engagement, positiv zu jedem Team beizutragen, unerschütterlich.,",
      "Your email":"Ihre E-mail",
      "Subject":"Betreff",
      "Send":"Senden",
      "Message":"Nachricht",
      "Email sent successfully Habibi!":"erfolgreich gesendet Habibi!",
      "EmailP2":"Bitte nutzen Sie das untenstehende Formular, um mich bei Gelegenheiten, Ratschlägen zu kontaktieren oder einfach, wenn Sie sich vernetzen und Einsichten teilen möchten. Ihre Anleitung und Vorschläge wären sehr geschätzt, während ich den Beginn meiner Karriere navigiere.",
      "HeroSectionP4":"Das ist kein Bug, das ist ein Feature.",
      "It’s Me,":"Ich bin's,",
      
      "HeroSectionP_1":"Syrischer Informatiker.",
      "HeroSectionP_2":"Willkommen auf meiner Website.",

      "ProjectName_1":"Zahlenvorhersage mit künstlichem neuronalen Netzwerk.",
      "ProjectName_2":"Erkennung von Fahrbahnmarkierungen",
      "ProjectName_7":"Netzwerkprogrammierung, Multiplayer 'Vier Gewinnt' Java-Spiel",
      "ProjectDesc_1":" Ein künstliches neuronales Netzwerk wurde programmiert, das eine handgeschriebene Zahl aus einem 28x28 Pixel Bild mit Hilfe der MNIST-Datenbank vorhersagt. Nur die Numpy-Bibliothek und lineare algebraische Gleichungen wurden zum Aufbau des KNN verwendet",
      "ProjectDesc_2":" Die Canny-Kantenerkennungsmethode und die Hough-Transformation wurden in Python und openCV verwendet, um eine Straßenfahrbahn aus Videoeingaben zu identifizieren",
      "ProjectDesc_3":" Parallele Algorithmen wurden implementiert, um Bilder von Text für den Druck zu verbessern. Die Algorithmen sollten die Hardware effizient nutzen, daher wurde OpenMP verwendet, um den C++-Code zu parallelisieren und zu vektorisieren",
      "ProjectDesc_4":"Entwicklung eines umfassenden digitalen Portfolios auf React-Basis, um eine große Auswahl an Projekten zu präsentieren, von maschinellem Lernen bis zur Webentwicklung",
      "ProjectDesc_5":"Python- und OpenGL-basierte Mandelbrot-Visualisierer nutzt die parallele Verarbeitung für eine effiziente Hardware-Nutzung und ermöglicht die Erforschung von Fraktalen in Echtzeit mit fortschrittlichen Shader-Effekten",
      "ProjectDesc_6":"Implementierung eines Einkaufswagens mit Spring Boot für das Backend in Java, Optimierung für effizientes Datenmanagement und sichere Transaktionsverarbeitung",
      "ProjectDesc_7":"Entwickelt wurde das Spiel 'Vier Gewinnt' mit Java unter Verwendung einer Client/Server-Architektur. Das Spiel ist multiplayerfähig und verfügt über eine Chat-Funktion",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;