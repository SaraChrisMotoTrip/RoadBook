/* =============================================================
   ELENCO DEI GIRI
   Questo è l'UNICO file da modificare per aggiungere un percorso.
   Copia un blocco { ... } fra parentesi graffe, incollalo sopra
   agli altri, cambia i valori. Attenzione a virgole e virgolette.
   ============================================================= */

const GIRI = [

  {
    // ---- cartella dentro "giri/" che contiene i file di questo giro
    cartella: "05-incursione-lagunare",

    // ---- testi
    numero:      "05",
    zona:        "Laguna Sud di Venezia",
    titolo:      "Incursione Lagunare",
    sottotitolo: "Doppio imbarco per Lido e Pellestrina",
    data:        "Percorso senza data — mai di mercoledì",
    descrizione: "Anello con doppia traversata in traghetto: la moto stivata sotto coperta mentre passano la Giudecca e San Marco, poi gli undici chilometri di Pellestrina fra laguna e mare aperto.",

    // ---- immagine di anteprima (dentro la cartella del giro)
    copertina: "cover.jpg",

    // ---- file scaricabili o consultabili (lascia "" se non ce l'hai)
    roadbook: "index.html",
    pdf:      "roadbook.pdf",
    gpx:      "traccia.gpx",

    // ---- video del giro (lascia "" finché non ce l'hai)
    youtube: "",
    mp4:     "",
    instagram: "",

    // ---- foto scattate durante il giro (file dentro la cartella)
    foto: [],

    // ---- i quattro numeri mostrati nell'anteprima
    numeri: [
      { n: "≈163", e: "km su gomma" },
      { n: "≈22",  e: "km sull'acqua" },
      { n: "4",    e: "imbarchi" },
      { n: "42 €", e: "traghetti" }
    ]
  },

  {
    // ---- cartella dentro "giri/" che contiene i file di questo giro
    cartella: "04-anello-corto",

    // ---- testi
    numero:      "04",
    zona:        "Prealpi Trevigiane",
    titolo:      "L'Anello Corto",
    sottotitolo: "Prosecco, Revine e l'Ascesa al San Boldo",
    data:        "Percorso senza data — mai di mercoledì",
    descrizione: "Anello prealpino da Castelfranco Veneto: la dorsale del Prosecco, i Laghi di Revine e la salita al San Boldo con le cinque gallerie elicoidali affrontate in salita.",

    // ---- immagine di anteprima (dentro la cartella del giro)
    copertina: "cover.jpg",

    // ---- file scaricabili o consultabili (lascia "" se non ce l'hai)
    roadbook: "index.html",     // la guida sfogliabile nel browser
    pdf:      "roadbook.pdf",   // la guida da scaricare
    gpx:      "traccia.gpx",    // la traccia per il navigatore

    // ---- video del giro (lascia "" finché non ce l'hai)
    youtube: "",                // codice del video YouTube, es. "dQw4w9WgXcQ"
    mp4:     "",                // oppure un file video nella cartella, es. "giro.mp4"
    instagram: "",              // oppure il link del post pubblico, es. "https://www.instagram.com/reel/XXXXXXXXXXX/"

    // ---- foto scattate durante il giro (file dentro la cartella)
    foto: [],                   // es. ["foto1.jpg", "foto2.jpg"]

    // ---- i quattro numeri mostrati nell'anteprima
    numeri: [
      { n: "≈148", e: "chilometri" },
      { n: "706",  e: "quota max" },
      { n: "5",    e: "gallerie" },
      { n: "18",   e: "tornanti" }
    ]
  }

  // ,{ ... prossimo giro qui ... }

];
