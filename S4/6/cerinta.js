// bazat pe exemplul anterior implementați o funcție care obține lista avioanelor de deasupra României.
// 1. Functia generica pentru cereri HTTP
function getObjectFromUrl(url) {
  return new Promise((resolve, reject) => {
    // configurez cererea fetch incluzand header-ul User-Agent
    fetch(url, {
      headers: {
        "User-Agent": "StudentProject/1.0",
      },
    })
      .then((response) => {
        // verific daca raspunsul serverului este ok
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        // transform raspunsul in JSON
        return response.json();
      })
      // rezolv promisiunea cu datele obtinute
      .then((data) => resolve(data))
      // prind eventualele erori de retea si resping promisiunea
      .catch((err) => reject(err));
  });
}

// 2. Functia care obtine coordonatele geografice ale tarii
function getCountryBounds(country) {
  return new Promise((resolve, reject) => {
    // apelez functia de fetch catre API-ul Nominatim
    getObjectFromUrl(
      `https://nominatim.openstreetmap.org/search?country=${country}&format=json`
    )
      .then((object) => {
        // verific daca am primit date valide pentru tara cautata
        if (!object || object.length === 0) {
          reject("Country not found");
        } else {
          // extrag limitele geografice si le returnez intr-un obiect organizat
          resolve({
            minLatitude: object[0].boundingbox[0],
            maxLatitude: object[0].boundingbox[1],
            minLongitude: object[0].boundingbox[2],
            maxLongitude: object[0].boundingbox[3],
          });
        }
      })
      .catch((err) => reject(err));
  });
}

// 3. Functia care obtine lista avioanelor
function getPlanesOverCountry(country) {
  return new Promise((resolve, reject) => {
    // pasul 1: obtin mai intai coordonatele tarii
    getCountryBounds(country)
      .then((bounds) => {
        console.log(`Caut avioane deasupra: ${country}...`);

        // pasul 2: construiesc URL-ul catre OpenSky folosind limitele obtinute
        const openSkyUrl = `https://opensky-network.org/api/states/all?lamin=${bounds.minLatitude}&lomin=${bounds.minLongitude}&lamax=${bounds.maxLatitude}&lomax=${bounds.maxLongitude}`;

        // apelez din nou functia generica de fetch pentru lista de avioane
        return getObjectFromUrl(openSkyUrl);
      })
      .then((data) => {
        // verific daca proprietatea 'states' exista (poate fi null daca nu sunt avioane)
        if (!data.states) {
          resolve([]);
        } else {
          // mapez array-urile brute primite de la OpenSky in obiecte mai clare
          const formattedPlanes = data.states.map((plane) => ({
            callsign: plane[1].trim(), // indicativul
            originCountry: plane[2], // tara de origine
            velocity: plane[5], // viteza
            altitude: plane[7], // altitudinea
          }));

          // returnez lista procesata
          resolve(formattedPlanes);
        }
      })
      .catch((err) => reject(err));
  });
}

// Executia codului
getPlanesOverCountry("Romania")
  .then((planes) => {
    console.log(`Am gasit ${planes.length} avioane.`);
    // afisez primele 5 rezultate pentru verificare
    console.log(planes.slice(0, 5));
  })
  .catch((err) => console.error("A aparut o eroare:", err));
