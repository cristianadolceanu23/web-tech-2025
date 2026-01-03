async function getObjectFromUrl(url) {
  // Aici este modificarea: adaugam al doilea parametru cu headers
  const response = await fetch(url, {
    headers: {
      // Nominatim cere un User-Agent pentru a identifica aplicatia
      "User-Agent": "ProiectStudent/1.0",
    },
  });

  // Putem adauga si o verificare de siguranta
  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }

  const text = await response.text();
  return JSON.parse(text);
}

async function getCountryBounds(country) {
  const object = await getObjectFromUrl(
    `https://nominatim.openstreetmap.org/search?country=${country}&format=json`
  );

  // Verificam daca am primit rezultate inainte sa accesam indexul [0]
  if (object.length === 0) {
    throw new Error(`Nu am gasit date pentru tara: ${country}`);
  }

  return {
    minLatitude: object[0].boundingbox[0],
    maxLatitude: object[0].boundingbox[1],
    minLongitude: object[0].boundingbox[2],
    maxLongitude: object[0].boundingbox[3],
  };
}

getCountryBounds("Romania")
  .then((bounds) => console.log("Romania: ", bounds))
  .catch((err) => console.error(err));
getCountryBounds("France")
  .then((bounds) => console.log("France: ", bounds))
  .catch((err) => console.error(err));
