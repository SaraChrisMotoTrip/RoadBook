/* =============================================================
   ELENCO DEI GIRI
   Questo è l'UNICO file da modificare per aggiungere un percorso.
   Copia un blocco { ... } fra parentesi graffe, incollalo sopra
   agli altri, cambia i valori. Attenzione a virgole e virgolette.
   L'ordine dei blocchi è l'ordine in cui appaiono sulla home.
   ============================================================= */
const GIRI = [
  {
    // ---- cartella dentro "giri/" che contiene i file di questo giro
    cartella: "04-anello-corto",
    // ---- testi
    numero:      "01",
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
    instagram: "",              // oppure il link del post pubblico
    // ---- foto scattate durante il giro (file dentro la cartella)
    foto: [],                   // es. ["foto1.jpg", "foto2.jpg"]
    // ---- i quattro numeri mostrati nell'anteprima
    numeri: [
      { n: "≈148", e: "chilometri" },
      { n: "706",  e: "quota max" },
      { n: "5",    e: "gallerie" },
      { n: "18",   e: "tornanti" }
    ]
  },
  {
    cartella: "05-incursione-lagunare",
    numero:      "02",
    zona:        "Laguna Sud di Venezia",
    titolo:      "Incursione Lagunare",
    sottotitolo: "Doppio imbarco per Lido e Pellestrina",
    data:        "Percorso senza data — mai di mercoledì",
    descrizione: "Anello con doppia traversata in traghetto: la moto stivata sotto coperta mentre passano la Giudecca e San Marco, poi gli undici chilometri di Pellestrina fra laguna e mare aperto.",
    copertina: "cover.jpg",
    roadbook: "index.html",
    pdf:      "roadbook.pdf",
    gpx:      "traccia.gpx",
    youtube: "",
    mp4:     "",
    instagram: "",
    foto: [],
    numeri: [
      { n: "≈163", e: "km su gomma" },
      { n: "≈22",  e: "km sull'acqua" },
      { n: "4",    e: "imbarchi" },
      { n: "42 €", e: "traghetti" }
    ]
  },
  {
    cartella: "06-risalita-della-forra",
    numero:      "03",
    zona:        "Lago di Garda",
    titolo:      "La Risalita della Forra",
    sottotitolo: "Il Garda, la roccia e l'acqua a 37 gradi",
    data:        "Due giorni e una notte — percorso senza data fissa",
    descrizione: "Sei chilometri di asfalto scavati dentro una gola, una terrazza sospesa a 350 metri sul lago e la sera nell'acqua termale a 37 gradi. Due giorni, una notte.",
    copertina: "cover.jpg",
    roadbook: "index.html",
    pdf:      "roadbook.pdf",
    gpx:      "traccia.gpx",
    youtube: "",
    mp4:     "",
    instagram: "https://www.instagram.com/reel/Dcl-GNUsgPB/",
    foto: [],
    numeri: [
      { n: "≈435", e: "chilometri" },
      { n: "2",    e: "giorni" },
      { n: "423",  e: "quota max" },
      { n: "37°",  e: "l'acqua" }
    ]
  },
  {
    cartella: "07-anello-del-delta",
    numero:      "04",
    zona:        "Delta del Po",
    titolo:      "L'Anello del Delta",
    sottotitolo: "Argini, valli e ponti di barche",
    data:        "Giro in giornata — valido tutto l'anno, mai lunedì né martedì",
    descrizione: "Novanta chilometri di argini fra laguna e mare aperto, i casoni dei pescatori, i fenicotteri della Sacca di Scardovari e due ponti di barche galleggianti da attraversare a passo d'uomo.",
    copertina: "cover.jpg",
    roadbook: "index.html",
    pdf:      "roadbook.pdf",
    gpx:      "traccia.gpx",
    youtube: "",
    mp4:     "",
    instagram: "https://www.instagram.com/reel/DcmUUghRyu5/",
    foto: [],
    numeri: [
      { n: "≈350", e: "chilometri" },
      { n: "2",    e: "ponti di barche" },
      { n: "6h 30'", e: "in sella" },
      { n: "0",    e: "dislivello" }
    ]
  },
  {
    cartella: "08-pasubio-garda-valsugana",
    numero:      "05",
    zona:        "Pasubio · Garda · Valsugana",
    titolo:      "Dal Pasubio al Garda",
    sottotitolo: "E rientro per la Valsugana",
    data:        "Giro in giornata — da primavera a autunno, mai di martedì",
    descrizione: "Un grande anello che in sette ore attraversa quattro nature di strada: la pianura vicentina, la gola dell'Astico, il valico di guerra del Pasubio a 1.163 metri e il clima mediterraneo del Garda.",
    copertina: "cover.jpg",
    roadbook: "index.html",
    pdf:      "roadbook.pdf",
    gpx:      "traccia.gpx",
    youtube: "",
    mp4:     "",
    instagram: "https://www.instagram.com/reel/DcnbDYztB-b/",
    foto: [],
    numeri: [
      { n: "≈340",  e: "chilometri" },
      { n: "1.163", e: "quota max" },
      { n: "7h",    e: "in sella" },
      { n: "4",     e: "nature di strada" }
    ]
  }
  // ,{ ... prossimo giro qui ... }
];
