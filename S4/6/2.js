function getObjectFromUrl(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "User-Agent": "StudentProject/1.0",
      },
    })
      .then((response) => response.text())
      .then((text) => resolve(JSON.parse(text)))
      .catch((err) => reject(err));
  });
}

function getCountryBounds(country) {
  return new Promise((resolve, reject) => {
    getObjectFromUrl(
      `https://nominatim.openstreetmap.org/search?country=${country}&format=json`
    )
      .then((object) => {
        if (object.length === 0) {
          reject("No data found");
        } else {
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

getCountryBounds("Romania").then((bounds) => console.log("Romania: ", bounds));
getCountryBounds("USA").then((bounds) => console.log("USA: ", bounds));
getCountryBounds("Germany").then((bounds) => console.log("Germany: ", bounds));
