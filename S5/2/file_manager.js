// import modulul nativ 'fs' pentru a lucra cu sistemul de fisiere
const fs = require("fs");
// import functia rimraf din pachetul pe care tocmai l-am instalat
const { rimraf } = require("rimraf");

// definesc numele folderului si al fisierului
const numeDirector = "director_nou";
const numeFisier = `${numeDirector}/fisier_text.txt`;

const gestioneazaFisiere = async () => {
  try {
    console.log("--- Incep operatiunile ---");

    // 1. Creez directorul
    // verific daca nu exista deja, ca sa nu primesc eroare
    if (!fs.existsSync(numeDirector)) {
      fs.mkdirSync(numeDirector);
      console.log(`[Succes] Am creat directorul: ${numeDirector}`);
    }

    // 2. Creez fisierul inauntru
    fs.writeFileSync(numeFisier, "Continut de test pentru seminar.");
    console.log(`[Succes] Am creat fisierul: ${numeFisier}`);

    console.log("[...] Astept 3 secunde inainte sa sterg totul...");

    // 3. Sterg directorul dupa o pauza (ca sa apuci sa il vezi)
    setTimeout(async () => {
      // functia rimraf sterge recursiv (directorul + tot ce e in el)
      await rimraf(numeDirector);
      console.log(
        `[Succes] Am sters directorul ${numeDirector} folosind rimraf.`
      );
    }, 3000);
  } catch (eroare) {
    console.error("A aparut o eroare:", eroare);
  }
};

gestioneazaFisiere();
