const formatString = (s, ...format) => {
  let modified = s;
  for (let i = 0; i < format.length; i++) {
    if (modified.indexOf("{" + i + "}") !== -1) {
      modified = modified.replace("{" + i + "}", format[i]);
    }
  }
  return modified;
};

console.log(
  formatString("this is a {0} string  and we've {1} it ", "nice", "modified")
);

// implementați o funcție de formatare a unui string care suportă parametrii numiți; de exemplu "un {substantiv} este {adjectiv}" să poată fi formatat în "un căluț este drăguț".

const FormatString = (s, format) => {
  let modified = s;
  // Obtin lista de chei din obiectul format (ex: ["substantiv", "adjectiv"])
  const keys = Object.keys(format);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    // Verific daca placeholder-ul de tip {nume_cheie} exista in string
    if (modified.indexOf("{" + key + "}") !== -1) {
      // Inlocuiesc placeholder-ul cu valoarea asociata cheii
      modified = modified.replace("{" + key + "}", format[key]);
    }
  }
  return modified;
};

console.log(
  FormatString("un {substantiv} este {adjectiv}", {
    substantiv: "calut",
    adjectiv: "dragut",
  })
);
