# Sito dei Roadbook — istruzioni

Sito statico gratuito: una home con i riquadri dei giri, e per ogni giro una pagina
con guida sfogliabile, PDF, traccia GPX, video e foto.

---

## 1. Com'è fatta la cartella

```
index.html                 la home con i riquadri
media/hero.jpg             la foto grande in cima alla home
giro.html                  la pagina del singolo giro (uguale per tutti)
stile.css                  i colori e i caratteri
giri.js                    l'ELENCO DEI GIRI  ← l'unico file da modificare
giri/
  04-anello-corto/         una cartella per ogni giro
    cover.jpg              immagine di anteprima
    index.html             la guida da sfogliare
    roadbook.pdf           la guida da scaricare
    traccia.gpx            la traccia per il navigatore
```

Puoi aprire `index.html` con doppio clic sul computer: il sito funziona già,
anche senza internet. Serve solo per controllare prima di pubblicare.

---

## 2. Pubblicare il sito su GitHub Pages (gratis)

1. Vai su **github.com** e crea un account gratuito.
2. In alto a destra: **+** › **New repository**.
3. Nome del repository: `roadbook` · visibilità **Public** · crea.
4. Nella pagina del repository vuoto scegli **uploading an existing file**.
5. Trascina **tutto il contenuto** di questa cartella (compresa la cartella `giri`).
   Aspetta che il caricamento finisca, poi premi **Commit changes**.
6. Vai su **Settings** › **Pages** (menu a sinistra).
7. Alla voce *Source* scegli **Deploy from a branch**, ramo **main**, cartella **/ (root)**, e salva.
8. Dopo 1–2 minuti il sito è online all'indirizzo:
   `https://TUONOME.github.io/roadbook/`

Se qualche voce ha un nome leggermente diverso, la sostanza non cambia:
si carica il contenuto della cartella e si attiva Pages sul ramo `main`.

**Limiti da conoscere:** dal browser puoi caricare file fino a 25 MB l'uno
(il PDF e la guida stanno larghi dentro questo limite). Il sito pubblicato
può arrivare a 1 GB, con una soglia indicativa di 100 GB di traffico al mese.
I video non vanno caricati qui: si mettono su YouTube (punto 4).

---

## 2b. Cambiare la foto di apertura

La foto grande in cima alla home è `media/hero.jpg`. Per cambiarla basta
sostituire il file mantenendo lo stesso nome. Funziona meglio un'immagine
orizzontale e larga almeno 1600 pixel: viene scurita e usata come sfondo,
quindi va bene anche una foto di gruppo o una moto in strada.

---

## 3. Aggiungere un nuovo giro

1. Dentro `giri/` crea una cartella nuova, per esempio `05-monte-grappa`
   (solo lettere minuscole, numeri e trattini, **senza spazi**).
2. Metti dentro i file, con questi nomi esatti:
   - `cover.jpg` — l'immagine di anteprima
   - `index.html` — la guida sfogliabile
   - `roadbook.pdf` — la guida da scaricare
   - `traccia.gpx` — la traccia
3. Apri `giri.js`, copia il blocco fra `{` e `}` di un giro esistente,
   incollalo sopra, e cambia i valori. Fai attenzione:
   - fra un blocco e l'altro ci vuole una **virgola**;
   - `cartella` deve essere identica al nome della cartella creata al punto 1.
4. Ricarica la home: il riquadro nuovo è lì.

Sul sito già pubblicato: apri il repository su GitHub, entra in `giri.js`,
premi l'icona della matita, modifica, **Commit changes**. Per i file nuovi,
**Add file** › **Upload files**.

---

## 4. Il video del giro

Carica il video su YouTube come **Non in elenco**: è visibile solo a chi ha
il link, non compare nelle ricerche, e non consuma il tuo spazio.

Dal link `https://youtu.be/dQw4w9WgXcQ` prendi la parte finale — `dQw4w9WgXcQ` —
e mettila in `giri.js`:

```js
youtube: "dQw4w9WgXcQ",
```

In alternativa, per un video corto e leggero, puoi metterlo nella cartella
del giro e scrivere `mp4: "giro.mp4"`. Sconsigliato sopra i 25 MB.

**Video su Instagram.** Se il video è già pubblicato su un profilo pubblico,
incolla il link del post:

```js
instagram: "https://www.instagram.com/reel/XXXXXXXXXXX/",
```

Il post viene mostrato nella pagina del giro, con sotto il pulsante per aprirlo
su Instagram. Funziona solo con profili e post **pubblici**: se il profilo è
privato, o il post viene cancellato, resta visibile il solo link.

L'ordine di priorità è: `youtube`, poi `mp4`, poi `instagram`. Compila un campo solo.

---

## 5. Le foto del giro

Metti i file JPEG nella cartella del giro ed elencali in `giri.js`:

```js
foto: ["foto1.jpg", "foto2.jpg", "foto3.jpg"],
```

Prima di caricarle, ridimensionale a circa 1600 pixel di lato lungo:
le foto a piena risoluzione appesantiscono il sito senza vantaggi visibili.
